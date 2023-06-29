import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

import insta from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';
import titwer from '../../assets/titwer.svg';
import pin from '../../assets/pin.svg';

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'attorneys', label: 'Attorneys' },
  { id: 'praticeareas', label: 'Pratice Areas' },
  { id: 'about-us', label: 'About us' },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu Links */}
        <ul className="footer__menu">
          {footerLinks.map(({ id, label }) => (
            <li id={id} key={id}>
              <a href={`#${id}`} title={label}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact us */}
        <div className="footer__btn">
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
          <img src={titwer} alt="titwer" />
          <img src={pin} alt="pin" />
        </div>
      </div>
      <div className="footer__copyright">
        <p> ©2023 Acme. All right reserved.</p>
        <p>
          <a href="#home">Privacy Policy</a>
        </p>
        <p>
          <a href="#home">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
