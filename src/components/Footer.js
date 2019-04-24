import React from 'react';
import logo from '../static/logo.jpg';
import tietosuojaseloste from '../static/tietosuojaseloste.pdf';
import { Facebook, Instagram } from '../components/socials';

const Footer = () => (
  <footer id="yhteystiedot">
    <div className="content">
      <h1>YHTEYSTIEDOT</h1>
      <p>Niina Varis</p>
      <p>SKY-kosmetologi, lähihoitaja</p>
      <p>
        <a href="tel:0400586586">0400 586 586</a>
      </p>
      <p>
        <a href="https://wa.me/358400586586">WhatsApp</a>
      </p>
      <p>
        <a href="mailto:varis.niina@gmail.com">varis.niina@gmail.com</a>
      </p>
      <p>Y: 2254322-5</p>
      <p>Joensuu</p>
      <div className="socials">
        <a href="https://www.facebook.com/kosmetologikotiisi/">
          <Facebook style={{ marginRight: '15px' }} />
        </a>
        <a href="https://www.instagram.com/kosmetologikotiisi/">
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
          paddingTop: '0px',
          fontSize: '0.7em'
        }}
      >
        <a href={tietosuojaseloste}>Tietosuojaseloste</a>
      </p>

      <p
        style={{
          textAlign: 'center',
          paddingTop: '40px',
          fontSize: '0.7em'
        }}
      >
        COPYRIGHT &copy; 2019
      </p>
      <p style={{ fontSize: '0.7em', textAlign: 'center' }}>
        Design by{' '}
        <a href="https://www.linkedin.com/in/jouni-varis-990a5585/">
          Jouni Varis
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
