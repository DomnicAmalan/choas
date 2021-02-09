import React, { useCallback } from 'react';
import {CyberpunkButton, Logo} from '../../Components/atoms/index';
import "./welcomepages.scss";
import { useHistory } from "react-router-dom";
import { Map } from '../../Components/molecules/index'

const WelcomePage = () => {
  const history = useHistory();

  return(
    <div className="app-container">
      <Map />
      {/* <Logo />
      <div className="enter-button">
        <CyberpunkButton onPress={enterGame} title={"Enter the Game"} subtitle={"chaos"} />
      </div> */}
    </div>
  )
}

export default WelcomePage;