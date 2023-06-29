import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

import Jane from '../../assets/Jane Cooper.png';
import Devon from '../../assets/Devon Lane.png';
import Robert from '../../assets/Robert Fox.png';
import Card from '../Card/Card';

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

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
};

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <Controls data={data} />

      {data.map(
        (
          { srcImage, altImage, headertitle, jobtitl, subtitle, btnName },
          i
        ) => (
          <SwiperSlide key={i}>
            <Card
              key={i}
              srcImage={srcImage}
              altImage={altImage}
              headerTitle={headertitle}
              jobTitle={jobtitl}
              subTitle={subtitle}
              btnName={btnName}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Carousel;
