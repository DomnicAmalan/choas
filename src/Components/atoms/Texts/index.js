import React from 'react';
import "./logo.scss"

const Logo = ({style}) => {

  return (
      <div style={style} className="logo-container">
        <p className="welcome-text">Chaos</p>
      </div>
  )
}

export {Logo}