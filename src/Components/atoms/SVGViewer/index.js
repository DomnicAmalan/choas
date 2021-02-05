import React from 'react'
import "./svgviewer.scss"

const SVGViewer = ({attributes}) => {
  console.log(attributes)
  return (
    <div className="svg-wrapper">
      <img src={attributes.icon} className="svg-view"/>
      <p className="svg-text">{attributes.name}</p>
    </div>
    
  )
}

export default SVGViewer;