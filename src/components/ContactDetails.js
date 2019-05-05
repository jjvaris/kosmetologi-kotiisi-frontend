import React from 'react';
import { Facebook, Instagram } from '../components/socials';

const ContactDetails = () => (
  <section id="yhteystiedot">
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
    </div>
  </section>
);

export default ContactDetails;
