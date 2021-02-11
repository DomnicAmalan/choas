import React from 'react';
import './logintemplate.scss';
import { Logo } from '../../Components/atoms/index';
import { SocialAuths } from '../../Components/molecules/index';

const LoginTemplate = () => (
  <div className="login-template-container">
    <div className="items">
      <Logo style={{ fontSize: '8px' }} />
    </div>
    <div className="items">
      <SocialAuths />
    </div>
  </div>
);

export default LoginTemplate;
