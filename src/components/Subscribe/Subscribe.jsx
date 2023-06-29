import React from 'react';
import './Subscribe.css';
import TitleHeader from '../TitleHeader/TitleHeader';

const Subscribe = () => {
  return (
    <div className="subscribe__container">
      <div className="subscribe__info">
        <TitleHeader title={'Subscribe Our Newsletter'} />
      </div>

      <div className="subscribe__form">
        <input type="text" placeholder="Name" className='input-name'/>
        <input type="email" placeholder="Enter your Email" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Subscribe;
