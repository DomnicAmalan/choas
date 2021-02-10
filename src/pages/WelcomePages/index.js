import React from 'react';
import "./welcomepages.scss";
import { useHistory } from "react-router-dom";
import {LoginTemplate} from '../../templates/index';
import {Map} from '../../Components/molecules/index'

const WelcomePage = () => {
  const history = useHistory();

  return(
    <div className="app-container">
      <Map />
      <LoginTemplate />
    </div>
  )
}

export default WelcomePage;