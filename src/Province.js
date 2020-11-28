import React from 'react'

import './paths.css'

const Province = (props) => {
    const use = props.use ? <use xlinkHref={props.use} /> : null
    return (
        <g id={props.provinceAbbreviation}>
            <path
                d={props.dimensions}
                id={props.provinceName}
                fill={props.fill}
                mask="url(#all)"
                className={`prov-${props.provinceAbbreviation}`}
                onClick={props.onClick}
            >
                <title>{props.provinceName}</title>
            </path>
            {use}
        </g>
    )
}
export default Province
