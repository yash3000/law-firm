import React from 'react'
import './App.css';
import { AreaOfPractices, Carousel, Faq, Footer, Header, Intro, Navbar, OurTeam, Subscribe, Testimonial, WhyChooseUs } from './components';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <WhyChooseUs />
      <AreaOfPractices />
      {/* <Carousel /> */}

      <Testimonial />
      <OurTeam />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App