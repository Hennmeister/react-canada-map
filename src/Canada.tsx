import React, { Component } from "react"
import data from "./data/data"
import Province from "./Province"
import drawDetails from "./svgUtils"

interface Props {
  onClick: (event: any) => void
  width: number
  height: number
  title: string
  defaultFill: string
  customize: any
  province: string
}

class Canada extends Component<Props> {
  public static defaultProps = {
    onClick: () => {},
    width: 1113,
    height: 942,
    defaultFill: "#D3D3D3",
    title: "Canada",
    customize: {},
  }

  clickHandler = (event: any) => {
    this.props.onClick(event)
  }

  fillProvinceColor = (province: string) => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].fill
    ) {
      return this.props.customize[province].fill
    }
    // const defaultColour = "d3d3d3"
    return this.props.defaultFill
  }

  provinceClickHandler = (province: string) => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].clickHandler
    ) {
      return this.props.customize[province].clickHandler
    }
    return this.clickHandler
  }

  buildProvinces = () => {
    let paths = []
    for (let province in data) {
      const path = (
        <Province
          key={province}
          dimensions={data[province]["dimensions"]}
          provinceAbbreviation={this.props.province}
          provinceName={data[province]["name"]}
          fill={this.fillProvinceColor(province)}
          onClick={this.provinceClickHandler(province)}
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
