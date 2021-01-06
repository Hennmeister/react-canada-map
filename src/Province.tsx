import React, { Component } from "react"
import "./paths.css"

interface Props {
  onClick: () => void
  provinceName: string
  provinceAbbreviation: string
  svgLink: string
  dimensions: string
  fill: string
}

class Province extends Component<Props> {
  render() {
    const {
      onClick,
      provinceName,
      provinceAbbreviation,
      svgLink,
      dimensions,
      fill,
    } = this.props
    const link = svgLink ? <use xlinkHref={svgLink}></use> : null
    return (
      <g id={provinceAbbreviation}>
        <path
          d={dimensions}
          id={provinceName}
          fill={fill}
          mask="url(#all)"
          className={`prov-${provinceAbbreviation}`}
          onClick={onClick}
        >
          <title>{provinceName}</title>
        </path>
        {link}
      </g>
    )
  }
}

export default Province
