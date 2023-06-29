import React from 'react';
import './ProflieCard.css';

const ProflieCard = ({ srcImage, altImage, name, cases }) => {
  return (
    <div className="profliecard__container">
      <div className="profliecard__img">
        <img src={srcImage} alt={altImage} />
      </div>
      <div className="profliecard__info">
        <h3>{name}</h3>
        <p>{cases}</p>
      </div>
    </div>
  );
};

export default ProflieCard;
