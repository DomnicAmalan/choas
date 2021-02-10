import React from 'react'
import "./logintemplate.scss";
import {Logo} from '../../Components/atoms/index';
import {SocialAuths} from '../../Components/molecules/index'

const LoginTemplate = () => {
  
  return (
    <div className="login-template-container">
      <div className="items logo-item">
        {/* <img src={require('../../assets/logo.svg')} width={60} height={60} /> */}
        {/* <LottieView url={"https://assets9.lottiefiles.com/packages/lf20_mJJGAz.json"}/> */}
        <Logo style={{fontSize: "8px"}} />
      </div>
      <div className="items">
        <SocialAuths />
      </div>
    </div>
  )
}

export default LoginTemplate;