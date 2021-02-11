import React from 'react';
import './welcomepages.scss';
import { LoginTemplate } from '../../templates/index';
import { Map } from '../../Components/molecules/index';

const WelcomePage = () => (
  <div className="app-container">
    <Map />
    <LoginTemplate />
  </div>
);

export default WelcomePage;
