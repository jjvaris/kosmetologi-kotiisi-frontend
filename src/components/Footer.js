import React from 'react';
import logo from '../static/logo.jpg';
import { Facebook, Instagram } from '../components/socials';

const Footer = () => (
  <footer id="yhteystiedot">
    <div className="content">
      <h1>YHTEYSTIEDOT</h1>
      <p>Niina Varis</p>
      <p>SKY-kosmetologi, lähihoitaja</p>
      <p>0400 586 586</p>
      <p>varis.niina@gmail.com</p>
      <p>Y: 2254322-5</p>
      <p>Joensuu</p>
      <div className="socials">
        <a href="http://facebook.com">
          <Facebook style={{ marginRight: '15px' }} />
        </a>
        <a href="http://instagram.com">
          <Instagram />
        </a>
      </div>
      <div className="service-img">
        <img
          className="kosmetologi-kotiisi-logo"
          src={logo}
          alt="Kosmetologi kotiisi logo"
          style={{ marginBottom: '10px' }}
        />
      </div>
      <p
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          fontSize: '0.7em'
        }}
      >
        COPYRIGHT &copy; 2019
      </p>
      <p style={{ fontSize: '0.7em', textAlign: 'center' }}>Design by Jouni</p>
    </div>
  </footer>
);

export default Footer;
