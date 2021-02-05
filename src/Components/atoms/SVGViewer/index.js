import React from 'react'
import "./svgviewer.scss";
import {getRandom} from '../../helpers/filterColorGen'

const SVGViewer = ({attributes}) => {

  let filters = getRandom("color")  
  return (
    <div className="svg-wrapper">
      <img style={{filter: filters.filter}} src={attributes.icon} className="svg-view"/>
      <p   className="svg-text">{attributes.name}</p>
    </div>
    
  )
}

export default SVGViewer;