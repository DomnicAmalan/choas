import React from 'react';
import './logo.scss';

const Logo = ({animated=true}) => {
  console.log(animated)
  return (
      <div className="logo-container">
        <p className="welcome-text">Chaos</p>
      </div>
  )
}

export default Logo
