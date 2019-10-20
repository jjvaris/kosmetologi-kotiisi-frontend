import React, { Component } from 'react';
import Campaign from './components/Campaign';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Services from './components/Services';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import brushes from './static/brushes.jpg';
import products from './static/products.jpg';
import { Parallax } from 'react-parallax';
import { getInstagramFeed } from './api';
import InstagramFeed from './components/InstagramFeed';
import ContactDetails from './components/ContactDetails';

class App extends Component {
  state = {
    instaFeed: undefined
  };

  componentDidMount() {
    getInstagramFeed().then(response => this.setState({ instaFeed: response }));
  }

  render() {
    return (
      <React.Fragment>
        <LandingPage />
        <main id="main">
          <Campaign until={new Date('2019-12-23')} />
          <Services />
          <Parallax
            bgImage={products}
            bgImageAlt="Sokerointi tuotteita"
            strength={200}
            bgClassName="bg-img"
          >
            <div className="bg-image-products" />
          </Parallax>
          <Introduction />
          <section id="hinnasto">
            <div className="content">
              <h1>HINNASTO</h1>
              <p>Tuon mukanani hoitopöydän ja kaiken tarvittavan.</p>
              <PriceTable />
              <p
                style={{
                  fontSize: '1.1em',
                  maxWidth: '500px',
                  textAlign: 'center',
                  marginTop: '30px'
                }}
              >
                Kutsu kotiisi myös kaverisi ja saat alennusta hoidoistasi -10%
                per jokainen henkilö!
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
            </div>
          </section>
          <Parallax bgImage={brushes} bgImageAlt="Meikkejä" strength={200}>
            <div style={{ height: '300px' }} />
          </Parallax>
          <section id="ota-yhteytta" className="dark">
            <div className="content">
              <h1>OTA YHTEYTTÄ</h1>
              <ContactForm />
            </div>
          </section>
        </main>
        <ContactDetails />
        {this.state.instaFeed && (
          <InstagramFeed instaFeed={this.state.instaFeed} />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
