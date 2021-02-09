import React from 'react'
import "./authbutton.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthButtons = ({provider, title, icon,style}) => {
  return (
    <div className="auth-button-container">
      <FontAwesomeIcon style={style} className="icon" icon={icon} />
      <p className="auth-button-text">{title}</p>
    </div>
  )
}

export default AuthButtons;