import React from 'react';
import Close from './Close';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Facebook, Instagram } from './socials';

const Modal = ({ show, onHide }) => {
  const css = show ? 'modal modal--open' : 'modal modal--closed';

  return (
    <div className={css}>
      <Close onClick={onHide} className="modal__close" />
      <nav>
        <AnchorLink onClick={onHide} href="#esittely">
          Esittely
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#hoidot">
          Hoidot
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#palvelut">
          Palvelut
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#hinnasto">
          Hinnasto
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#ota-yhteytta">
          Ota Yhteyttä
        </AnchorLink>
        <AnchorLink onClick={onHide} href="#yhteystiedot">
          Yhteystiedot
        </AnchorLink>
        <div className="modal__socials">
          <a href="http://facebook.com">
            <Facebook style={{ marginRight: '15px' }} />
          </a>
          <a href="http://instagram.com">
            <Instagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Modal;
