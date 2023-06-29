import React, { useState } from 'react';
import './Testimonial.css';
import TitleHeader from '../TitleHeader/TitleHeader';
import Card from '../Card/Card';

import Down from '../../assets/Down 1.svg';
import Jane from '../../assets/Jane Cooper.png';
import Devon from '../../assets/Devon Lane.png';
import Robert from '../../assets/Robert Fox.png';

const data = [
  {
    srcImage: Jane,
    altImage: 'Jane',
    headertitle: 'Jane Cooper',
    jobtitl: 'Ceo of Hunt',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
  },
  {
    srcImage: Devon,
    altImage: 'Devon ',
    headertitle: 'Devon Lane',
    jobtitl: 'Ceo of Hunt',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
  },
  {
    srcImage: Robert,
    altImage: 'Robert',
    headertitle: 'Robert Fox',
    jobtitl: 'Ceo of Hunt',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
  },
];

const Testimonial = () => {

  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const leftButtonClick = () => {
    if(activeCardIndex > 0){
      setActiveCardIndex(activeCardIndex - 1);
    }
  }

  const rightButtonClick = () => {
    if(activeCardIndex < data.length-1){
      setActiveCardIndex(activeCardIndex + 1);
    }
  }

  return (
    <div className="testimonial__container">
      <div className="testimonial__info">
        <div>
          <TitleHeader title={`What says our`} />
          <TitleHeader title={`happy Clients`} />
        </div>
        <div className="testimonial__btn">
          <button onClick={leftButtonClick}>
            <img src={Down} alt="Down" className="testimonial__btn-left" />
          </button>
          <button onClick={rightButtonClick}>
            <img src={Down} alt="Down" className="testimonial__btn-right" />
          </button>
        </div>
      </div>
      <div className="testimonial__card">
        {data.map((item, index) => (
          <Card
            activeIndex={activeCardIndex}
            cardIndex={index}
            key={index}
            srcImage={item.srcImage}
            altImage={item.altImage}
            headerTitle={item.headertitle}
            jobTitle={item.jobtitl}
            subTitle={item.subtitle}
            btnName={item.btnName}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

// import TitleHeader from '../TitleHeader/TitleHeader';
// import Down from '../../assets/Down 1.svg';
// import Carousel from '../Carousel/Carousel';

// import './Testimonial.css';

// const Testimonial = () => {
//   return (
//     <div className="testimonial__container">
//       <div className="testimonial__info">
//         <div>
//           <TitleHeader title={`What says our`} />
//           <TitleHeader title={`happy Clients`} />
//         </div>
//         <div className="testimonial__btn">
//           <button>
//             <img src={Down} alt="Down" className="testimonial__btn-left" />
//           </button>

//           <button>
//             <img src={Down} alt="Down" className="testimonial__btn-right" />
//           </button>
//         </div>
//       </div>
//       <div className="testimonial__card">
//         <Carousel />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
