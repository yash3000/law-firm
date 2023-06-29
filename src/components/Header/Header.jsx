import React from 'react';
import './Header.css';

import person from '../../assets/preson.png';

const Header = () => {
  return (
    <div className="header__container" id="home">
      {/* content */}
      <div className="header__info">
        <h3>You don't have to</h3>
        <h2>Fight them Alone.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          quisquam placeat nulla soluta aspernatur pariatur ea recusandae ab
          totam odio doloribus unde laboriosam sit cum, omnis voluptas officiis,
        </p>

        <div className="header__form">
          <input type="text" placeholder="Enter your email address" />
          <button className="header__btn">Lets Talk</button>
        </div>
      </div>

      {/* Image */}
      <div className="header__img">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};

export default Header;
