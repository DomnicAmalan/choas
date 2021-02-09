import React from 'react';
import "./welcomepages.scss";
import { useHistory } from "react-router-dom";
import {LoginTemplate} from '../../templates/index'

const WelcomePage = () => {
  const history = useHistory();

  return(
    <div className="app-container">
      <LoginTemplate />
    </div>
  )
}

export default WelcomePage;