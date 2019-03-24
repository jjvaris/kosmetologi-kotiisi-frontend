import React, { Component } from 'react';
import Burger from './components/Burger';
import Modal from './components/Modal';
import { Facebook, Instagram } from './components/socials';
import FlourishFrame from './components/FlourishFrame';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends Component {
  state = {
    showModal: false
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
          <nav className="app__nav">
            <Burger onClick={this.showModal} />
            <Modal show={this.state.showModal} onHide={this.hideModal} />
          </nav>
          <header className="app__header">
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
              <AnchorLink href="#hoidot">
                <span />
                <span />
                <span />
              </AnchorLink>
            </div>
          </div>
        </div>
        <main>
          <section id="hoidot">
            <h1>Hoidot</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
          <section id="palvelut" className="black">
            <h1>Palvelut</h1>
            <p>
              Mandamus deterruisset et his, quot timeam alienum quo ea. Amet
              nominavi cum ea. Ad vel quod iisque virtute, ad duo justo viris
              euismod. Cum eu ludus legendos constituam, ei pri vidisse recteque
              accusamus. Per ne nullam voluptua consetetur. Sed ne errem postea.
            </p>
          </section>
          <section id="hinnasto">
            <h1>Hinnasto</h1>
            <p>1 Lorem</p>
            <p>2 Lorem</p>
            <p>3 Lorem</p>
            <p>4 Lorem</p>
          </section>
          <section className="black">
            <h1>Niina</h1>
            <p>kuva</p>
          </section>
          <section id="ota-yhteytta">
            <h1>Ota yhteyttä</h1>
            <p>1 Lorem</p>
            <p>2 Lorem</p>
            <p>3 Lorem</p>
            <p>4 Lorem</p>
          </section>
          <section id="yhteystiedot" className="black">
            <h1>Yhteystiedot</h1>
            <p>Niina Varis</p>
            <p>Y: 2332198-1</p>
            <p>040 4897911</p>
            <p>niina.varis@gmail.com</p>

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
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
