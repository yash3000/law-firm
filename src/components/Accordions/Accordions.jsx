import React, { useState } from 'react';
import './Accordions.css';

const getAccordionData = [
  {
    id: 1,
    question: 'Do I need a personal injury report?',
    answer: `Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
  },
  {
    id: 2,
    question: 'How much is my case worth?',
    answer: `Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
  },
  {
    id: 3,
    question: 'What should I do right after car accidect',
    answer: `Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
  },
  {
    id: 4,
    question: 'How much is my case worth?',
    answer: `Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`,
  },
];

const Accordions = () => {
  const [open, setOpen] = useState(null);

  const handleOpenClose = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordions__container">
      {getAccordionData.map((item, index) => (
        <div key={item.id} className="accordions__question">
          <button
            onClick={() => handleOpenClose(index)}
            className="accordions__que"
          >
            <h3>{item.question}</h3>
            <div className='accordion-button'>{open === index ? <h1>-</h1> : <h1>+</h1>}</div>
          </button>
          {open === index && (
            <div className="accordions__answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
