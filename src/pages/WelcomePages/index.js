import React, { useCallback } from 'react';
import {CyberpunkButton} from '../../Components/atoms/index';
import "./welcomepages.scss";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  const history = useHistory();

  const enterGame = useCallback(() => {
    history.push("/analysis")
  })

  return(
    <div className="app-container">
      <div className="logo-container">
        <p className="welcome-text">Chaos</p>
      </div>
      <div className="enter-button">
        <CyberpunkButton onPress={enterGame} title={"Enter the Game"} subtitle={"chaos"} />
      </div>
    </div>
  )
}

export default WelcomePage;