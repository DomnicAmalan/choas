import React from 'react';
import './cyberpunkbutton.scss';

const CyberpunkButton = ({ title, subtitle, onPress }) => (
  <button onClick={onPress} className="btn btn--secondary">
    <span className="btn__content">{title}</span>
    <span className="btn__glitch" />
    <span className="btn__label">{subtitle}</span>
  </button>
);

export default CyberpunkButton;
