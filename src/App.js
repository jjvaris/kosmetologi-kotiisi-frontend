import React, { Component } from 'react';
import Burger from './components/Burger';
import Modal from './components/Modal';
import { Facebook, Instagram } from './components/socials';
import FlourishFrame from './components/FlourishFrame';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import niina from './static/niina.jpg';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Instructions from './components/Instructions';
import SmoothCollapse from 'react-smooth-collapse';

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
        <div className="app">
          <div className="wrapper">
            <nav className="app__nav app__nav--mobile">
              <Burger onClick={this.showModal} />
              <Modal show={this.state.showModal} onHide={this.hideModal} />
            </nav>
            <nav className="app__nav app__nav--desktop">
              <AnchorLink href="#esittely">Esittely</AnchorLink>
              {/* <AnchorLink href="#hoidot">Hoidot</AnchorLink> */}
              <AnchorLink href="#palvelut">Palvelut</AnchorLink>
              <AnchorLink href="#hinnasto">Hinnasto</AnchorLink>
              <AnchorLink href="#ota-yhteytta">Ota Yhteyttä</AnchorLink>
              <AnchorLink href="#yhteystiedot">Yhteystiedot</AnchorLink>
            </nav>
            <header className="app__header fade-in">
              <div className="app__title">
                <FlourishFrame />
                <h3 className="app__beauty_by font-playfair">
                  Kosmetologi kotiisi
                </h3>
                <h1 className="app__company_name font-playfair">Niina Varis</h1>
                <FlourishFrame reversed />
                {/* <p>KAUNEUDEN HOITOPALVELUT</p> */}
              </div>
            </header>
            <div className="app__scroll">
              <div id="scroll-down">
                <AnchorLink href="#esittely">
                  <span />
                  <span />
                  <span />
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
        <main>
          <section id="esittely">
            <div>
              <img className="profile-img" src={niina} alt="Niina Varis" />
              <h1>Niina Varis</h1>
              <p>
                Hei olen Niina ja lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled
              </p>
            </div>
          </section>
          <section id="palvelut" className="dark">
            <div>
              <h1>Palvelut</h1>
              <div className="sokerointi">
                <h3>Sokerointi</h3>
                <p>Täydellinen sokerointi aijai! Karvat vekka lähtee...</p>
                <button
                  className="sokerointi__button"
                  onClick={() =>
                    this.setState({
                      showInstructions: !this.state.showInstructions
                    })
                  }
                >
                  {this.state.showInstructions ? '⇧' : '⇩'} Tutustu sokeroinnin
                  ohjeisiin {this.state.showInstructions ? '⇧' : '⇩'}
                </button>
                <SmoothCollapse expanded={this.state.showInstructions}>
                  <Instructions />
                </SmoothCollapse>
              </div>
              <div className="sokerointi">
                <h3>Hoidot</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </section>
          <section id="hinnasto">
            <h1>Hinnasto</h1>

            <PriceTable />
            <p
              style={{
                fontSize: '1.2em',
                maxWidth: '500px',
                textAlign: 'center'
              }}
            >
              Kutsu kotiisi myös kaverisi ja saat alennusta hoidoistasi{' '}
              <b>-10%</b> per jokainen henkilö!
            </p>
            <p
              style={{
                fontSize: '1.2em',
                maxWidth: '500px',
                textAlign: 'center'
              }}
            >
              Ota rohkeasti yhteyttä ja pyydä tarjous esimerkiksi
              meikki-illasta!
            </p>
          </section>
          <section id="ota-yhteytta" className="dark">
            <h1>Ota yhteyttä</h1>
            <ContactForm />
          </section>
        </main>
        <footer id="yhteystiedot">
          <div>
            <h1>Yhteystiedot</h1>
            <p>Niina Varis</p>
            <p>SKY-kosmetolgi, lähihoitaja</p>
            <p>040 058 6586</p>
            <p>niina.varis@gmail.com</p>
            <p>Y: 2332198-1</p>

            <div className="socials">
              <a href="http://facebook.com">
                <Facebook style={{ marginRight: '15px' }} />
              </a>
              <a href="http://instagram.com">
                <Instagram />
              </a>
            </div>
            <p
              style={{
                textAlign: 'center',
                paddingTop: '30px',
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
