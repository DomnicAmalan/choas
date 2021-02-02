import React from 'react';
import "./app.scss";
import { CyberpunkButton } from '../Components/atoms/index'

const App = () => {
  return(
    <div className="app-container">
      <div className="logo-container">
        <p className="welcome-text">Chaos</p>
      </div>
      <div className="enter-button">
        <CyberpunkButton title={"Enter the Game"} subtitle={"chaos"} />
      </div>
    </div>
  )
}

export default App;