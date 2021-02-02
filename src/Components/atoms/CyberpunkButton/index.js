import React from 'react';
import "./cyberpunkbutton.scss"

const CyberpunkButton = ({
  title,
  subtitle
}) => {
  return (
    <button class="btn btn--secondary">
      <span class="btn__content">{title}</span>
      <span class="btn__glitch"></span>
      <span class="btn__label">{subtitle}</span>
    </button>
  )
}

export {CyberpunkButton}