import React from 'react';
import './WhyChooseUs.css';
import TitleHeader from '../TitleHeader/TitleHeader';
import Card from '../Card/Card';

import Gift from '../../assets/Gift 1.svg';

const data = [
  {
    srcImage: Gift,
    altImage: { Gift },
    headertitle: '98% Success Rate',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
    btnName: 'Read More',
  },
  {
    srcImage: Gift,
    altImage: { Gift },
    headertitle: '100% Success Rate',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
    btnName: 'Read More',
  },
  {
    srcImage: Gift,
    altImage: { Gift },
    headertitle: '100% Success Rate',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
    btnName: 'Read More',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="chooseus__container">
      <div className="chooseus__info">
        <TitleHeader title={'Why Choose us?'} />
      </div>
      <div className="chooseus__card">
        {data.map((item, index) => (
          <Card
            key={index}
            srcImage={item.srcImage}
            altImage={item.altImage}
            headerTitle={item.headertitle}
            subTitle={item.subtitle}
            btnName={item.btnName}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
