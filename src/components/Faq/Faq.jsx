import React from 'react';
import './Faq.css';
import TitleHeader from '../TitleHeader/TitleHeader';
import Accordions from '../Accordions/Accordions';
const Faq = () => {
  return (
    <div className="faq__container">
      <div className="faq__info">
        <TitleHeader title={'FAQ'} />
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="faq__accordion">
        <Accordions />
      </div>
    </div>
  );
};

export default Faq;
