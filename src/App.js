import React, { Component } from 'react';
import Burger from './components/Burger';
import Modal from './components/Modal';
import { Facebook, Instagram } from './components/socials';
import FlourishFrame from './components/FlourishFrame';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import niina from './static/niina.jpg';
import lady from './static/lady2.jpg';
import sokerointi from './static/sokerointi.jpg';
import image1 from './static/i_1.jpg';
import image2 from './static/i_2.jpg';
import logo from './static/logo.jpg';
import alexandriaLogo from './static/alexandria-logo.png';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Instructions from './components/Instructions';
import SmoothCollapse from 'react-smooth-collapse';
import Services from './components/Services';
import Div100 from './components/Div100';

class App extends Component {
  state = {
    showModal: false,
    showInstructions: false
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Div100 className="app">
          <div className="wrapper">
            <nav className="app__nav app__nav--mobile">
              <Burger onClick={this.showModal} />
              <Modal show={this.state.showModal} onHide={this.hideModal} />
            </nav>
            <nav className="app__nav app__nav--desktop">
              {/* <AnchorLink href="#hoidot">Hoidot</AnchorLink> */}
              <AnchorLink href="#palvelut">Palvelut</AnchorLink>
              <AnchorLink href="#esittely">Esittely</AnchorLink>
              <AnchorLink href="#hinnasto">Hinnasto</AnchorLink>
              <AnchorLink href="#ota-yhteytta">Ota Yhteyttä</AnchorLink>
              <AnchorLink href="#yhteystiedot">Yhteystiedot</AnchorLink>
            </nav>
            <header className="app__header fade-in">
              <div className="app__title">
                {/* <FlourishFrame /> */}
                <h3 className="app__beauty_by font-playfair">
                  KOSMETOLOGI KOTIISI
                </h3>
                <h1 className="app__company_name font-playfair">NIINA VARIS</h1>
                {/* <FlourishFrame reversed /> */}
                {/* <p>KAUNEUDEN HOITOPALVELUT</p> */}
              </div>
            </header>
            <div className="app__scroll">
              <div id="scroll-down">
                <AnchorLink href="#palvelut">
                  <span />
                  <span />
                  <span />
                </AnchorLink>
              </div>
            </div>
          </div>
        </Div100>
        <main>
          <Services />
          <div className="bg-image-products" />
          <section id="esittely" className="dark">
            <div className="introduction content">
              <div className="avatar">
                <img className="avatar__img" src={niina} alt="Niina Varis" />
              </div>
              <h1>NIINA VARIS</h1>
              <p>Kosmetologi kotiisi esittely</p>
            </div>
          </section>
          {/* <img
            src={sokerointi}
            alt="sokerointi promokuva"
            className="sokerointi__img"
          /> */}

          {/* <div className="image-grid">
            <div style={{ backgroundImage: `url(${lady})` }} />
            <div
              style={{
                backgroundImage: `url(${image1})`,
                backgroundPosition: 'unset'
              }}
            />
            <div style={{ backgroundImage: `url(${image2})` }} />
            <div style={{ backgroundImage: `url(${image3})` }} />
          </div> */}
          <section id="hinnasto">
            {/* <img
              src={lady}
              alt="Alexandria promokuva"
              style={{ width: '100%' }}
            /> */}
            <h1>HINNASTO</h1>

            <PriceTable />
            <p
              style={{
                fontSize: '1.1em',
                maxWidth: '500px',
                textAlign: 'center',
                marginTop: '30px'
              }}
            >
              Kutsu kotiisi myös kaverisi ja saat alennusta hoidoistasi -10% per
              jokainen henkilö!
            </p>
            <p
              style={{
                fontSize: '1.1em',
                maxWidth: '500px',
                textAlign: 'center'
              }}
            >
              Ota rohkeasti yhteyttä ja pyydä tarjous esimerkiksi
              meikki-illasta!
            </p>
          </section>
          {/* <img className="full-width-img" src={makeup} /> */}
          <div className="bg-image-fixed" />
          <section id="ota-yhteytta" className="dark">
            <h1>OTA YHTEYTTÄ</h1>
            <ContactForm />
          </section>
        </main>
        <footer id="yhteystiedot">
          <div>
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
            <p style={{ fontSize: '0.7em', textAlign: 'center' }}>
              Design by Jouni
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
