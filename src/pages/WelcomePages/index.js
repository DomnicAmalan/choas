import React, { useContext } from 'react';
import "./welcomepages.scss";
import { ThemeContext } from '../../hooks/index'

const WelcomePage = () => {

  const {toggle, theme} = useContext(ThemeContext)
  console.log(theme, toggle)

  return (
    <div className="app-container">
      <div onClick={() => toggle()}>
        TTTTT
      </div>
    </div>
  );
};

export default WelcomePage;
