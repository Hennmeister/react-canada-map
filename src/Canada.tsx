import React, { Component, MouseEvent } from "react"
import data from "./data/data"
import Province from "./Province"
import drawDetails from "./svgUtils"

interface Props {
  onClick: (province: Provinces, event: MouseEvent) => void
  width: number
  height: number
  defaultFillColor: string
  defaultHoverColor: string
  customize: { [key in Provinces]: ProvinceCustomizations }
}

enum Provinces {
  BC = "BC",
  AB = "AB",
  SK = "SK",
  MB = "MB",
  ON = "ON",
  QC = "QC",
  NB = "NB",
  NS = "NS",
  PE = "PE",
  NL = "NL",
  YT = "YT",
  NT = "NT",
  NU = "NU",
}

interface ProvinceCustomizations {
  fillColor: string
  onHoverColor: string
}

class Canada extends Component<Props> {
  public static defaultProps = {
    onClick: () => {},
    width: 1113,
    height: 942,
    defaultFillColor: "#D3D3D3",
    onHoverColor: "#ffffff",
    customize: {},
  }

  fillProvinceColor = (province: string) => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].fillColor
    ) {
      return this.props.customize[province].fillColor
    }
    // const defaultColour = "d3d3d3"
    return this.props.defaultFillColor
  }

  fillProvinceHoverColor = (province: string) => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].onHoverColor
    ) {
      return this.props.customize[province].onHoverColor
    }
    return this.props.defaultHoverColor
  }

  buildProvinces = () => {
    let paths = []
    let prov_data = data["default"]
    for (let province in prov_data) {
      const path = (
        <Province
          key={province}
          dimensions={prov_data[province]["dimensions"]}
          provinceAbbreviation={province}
          provinceName={prov_data[province]["name"]}
          fillColor={this.fillProvinceColor(province)}
          onHoverColor={this.fillProvinceHoverColor(province)}
          onClick={(e: MouseEvent) =>
            this.props.onClick(Provinces[province], e)
          }
          svgLink={""}
        />
      )
      paths.push(path)
    }
    return paths
  }

  render() {
    return (
      <svg
        className="canada-map"
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox="-24500 -15050 55700 32000"
      >
        {drawDetails()}
        {this.buildProvinces()}
      </svg>
    )
  }
}

export default Canada
