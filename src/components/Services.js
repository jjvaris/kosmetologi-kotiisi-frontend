import React, { useState } from 'react';
import alexandriaLogo from '../static/alexandria-logo.png';
import Instructions from './Instructions';
import SmoothCollapse from 'react-smooth-collapse';

const Services = () => {
  const [showInstructions, setShowIntructions] = useState(false);

  return (
    <section id="palvelut" className="">
      <div className="content">
        <h1 style={{ marginBottom: '50px' }}>PALVELUT</h1>
        <div className="service-img">
          <h2
            style={{
              marginBottom: '50px'
            }}
          >
            SOKEROINNIT
          </h2>
          <img
            className=""
            src={alexandriaLogo}
            alt="Alexandria Professional logo"
          />
        </div>
        <div className="sokerointi">
          {/* <h3 style={{ marginBottom: '30px' }}>
                  ALEXANDRIA PROFESSIONAL &reg; BODY SUGARING
                </h3> */}
          {/* <h3>Alexandria Professional Body Sugaring</h3> */}
          <p style={{ textAlign: 'start' }}>
            Alexandria Professional &reg; sokerointi on maailmanlaajuisesti
            johtava karvanpoistomenetelmä yli kahdenkymmenen vuoden
            kokemuksella.
          </p>
          <p style={{ textAlign: 'start' }}>
            Sokerointi on hygieeninen ja täysin vegaaninen
            karvanpoistomenetelmä. Karvat poistetaan karvan kasvusuuntaan,
            jolloin ne eivät katkeile ja iho pysyy karvattomana pidempään.
            Sokeroinnilla voidaan poistaa jopa alle kahden millimetrin pituisia
            karvoja. Sokerointi poistaa myös kuollutta ihosolukkoa, joten se on
            mitä parhain vartalon kuorinta menetelmä. Sokeri ei tartu eläviin
            ihosoluihin, joten sillä saadaan turvallisesti ja hellävaraisesti
            poistettua myös intiimialueen karvat.
          </p>
          <button
            className="sokerointi__button"
            onClick={() => setShowIntructions(!showInstructions)}
          >
            Tutustu sokeroinnin ohjeisiin
          </button>
          <SmoothCollapse
            expanded={showInstructions}
            heightTransition="ease-in-out .5s"
          >
            <Instructions />
          </SmoothCollapse>
        </div>
        <div className="sokerointi">
          <h2 style={{ marginTop: '50px', marginBottom: '30px' }}>
            MEIKKAUKSET &reg; JANE IREDALE
          </h2>
          <p style={{ textAlign: 'center' }}>
            Jane Iredale on 100% mineraalimeikkisarja, jonka valmistuksessa
            käytetään ainoastaan puhtaita luonnon mineraaleja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
