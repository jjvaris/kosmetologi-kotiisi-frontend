import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import PriceTable from './components/PriceTable';
import Services from './components/Services';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import brushes from './static/brushes.jpg';
import products from './static/products.jpg';
import { Parallax } from 'react-parallax';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingPage />
        <main>
          <Services />
          {/* <div className="bg-image-products" /> */}
          <Parallax
            bgImage={products}
            bgImageAlt="Sokerointi tuotteita"
            strength={200}
            bgClassName="bg-img"
          >
            {/* <div className="bg-image-products" /> */}
            <div className="bg-image-products" />
          </Parallax>
          <Introduction />
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
          {/* <img className="full-width-img" src={makeup} /> */}

          {/* <div className="bg-image-fixed" /> */}
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
