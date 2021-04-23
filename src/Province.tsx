import React, { Component } from "react"
import "./paths.css"

interface Props {
  onClick: (e: React.MouseEvent) => void
  provinceName: string
  provinceAbbreviation: string
  svgLink: string
  dimensions: string
  fillColor: string
  onHoverColor?: string
}

class Province extends Component<Props> {
  state = {
    isHovered: false,
  }

  render() {
    const {
      onClick,
      provinceName,
      provinceAbbreviation,
      svgLink,
      dimensions,
      fillColor,
    } = this.props
    const link = svgLink ? <use xlinkHref={svgLink}></use> : null
    return (
      <>
        <g id={provinceAbbreviation}>
          <path
            style={
              this.state.isHovered ? { fill: this.props.onHoverColor } : {}
            }
            onMouseEnter={() => this.setState({ isHovered: true })}
            onMouseLeave={() => this.setState({ isHovered: false })}
            d={dimensions}
            id={provinceName}
            fill={fillColor}
            mask="url(#all)"
            className={`prov-${provinceAbbreviation}`}
            onClick={onClick}
          >
            <title>{provinceName}</title>
          </path>
          {link}
        </g>
      </>
    )
  }
}

export default Province
