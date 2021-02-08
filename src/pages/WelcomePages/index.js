import React from 'react';
// import {CyberpunkButton, Logo} from '../../Components/atoms/index';
import { GlobeMap } from '../../Components/molecules/index'
import "./welcomepages.scss";
// import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  // const history = useHistory();

  // const enterGame = useCallback(() => {
  //   history.push('/analysis');
  // });

  return (
    <div className="app-container">
      <GlobeMap />
      {/* <Logo /> */}
      {/* <div className="enter-button">
        <CyberpunkButton onPress={enterGame} title={"Enter the Game"} subtitle={"chaos"} />
      </div> */}
    </div>
  );
};

export default WelcomePage;
