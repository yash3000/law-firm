import React, { useState } from 'react';
import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/logo.png';

const navBarLinks = [
  { id: 'home', label: 'Home' },
  { id: 'attorneys', label: 'Attorneys' },
  { id: 'praticeareas', label: 'Pratice Areas' },
  { id: 'about-us', label: 'About us' },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <nav className="nav__container">
      {/* Logo */}
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Menu Links */}
      <ul className="nav__menu">
        {navBarLinks.map(({ id, label }) => (
          <li id={id} key={id}>
            <a href={`#${id}`} title={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact us */}
      <div className="nav__btn">
        <button>Contact Now</button>
      </div>

      {/* Moblie */}
      <div className="nav__menu-moblie">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={handleToggleMenu}
        />
        {/*  */}
        {toggleMenu && (
          <div className="nav__menu-overlay">
            <AiOutlineClose fontSize={27} onClick={handleToggleMenu} />
            {/*  */}
            <ul className="nav__menu-moblie-links">
              {navBarLinks.map(({ id, label }) => (
                <li id={id}>
                  <a href={`#${id}`} title={label}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {/*  */}
          </div>
        )}
      </div>

      {/*  */}
    </nav>
  );
};
export default Navbar;
