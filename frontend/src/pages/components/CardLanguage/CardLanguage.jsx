import React from 'react'
import './CardLanguage.css'

function CardLanguage({ imageSrc, title, description, hoverText }) {
    return (
      <div className="card">
        <div className="icon">
          <img src={imageSrc} alt="icon" />
        </div>
        <strong>{title}</strong>
        <div className="card__body">{description}</div>
        <span>{hoverText}</span>
      </div>
    );
  }

export default CardLanguage