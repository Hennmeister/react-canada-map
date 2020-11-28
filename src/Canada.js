import React from 'react'
import PropTypes from 'prop-types'
import data from './data/data'
import Province from './Province'
import drawDetails from './svgUtils'

class Canada extends React.Component {
    clickHandler = (event) => {
        this.props.onClick(event)
    }

    fillProvinceColor = (province) => {
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

    provinceClickHandler = (province) => {
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
                    dimensions={data[province]['dimensions']}
                    provinceAbbreciatiom={this.props.province}
                    provinceName={data[province]['name']}
                    fill={this.fillProvinceColor(province)}
                    onClick={this.provinceClickHandler(province)}
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

Canada.propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    defaultFill: PropTypes.string,
    customize: PropTypes.object,
}

Canada.defaultProps = {
    onClick: () => {},
    width: 1113,
    height: 942,
    defaultFill: '#D3D3D3',
    title: 'Canada',
    customize: {},
}

export default Canada
