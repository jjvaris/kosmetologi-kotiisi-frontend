import React from 'react';
import niina from '../static/niina.jpg';

const Introduction = () => (
  <section id="esittely" className="dark">
    <div className="introduction content">
      <div className="avatar">
        <img className="avatar__img" src={niina} alt="Niina Varis" />
      </div>
      <h1>NIINA VARIS</h1>
      <p>
        Tarjoan kosmetologin palveluita suoraan kotiisi Joensuun alueella.
        Koulutukseltani olen SKY-kosmetologi sekä lähihoitaja. Palveluihin
        kuuluvat ihokarvojen hellävarainen poisto sokeroinnilla sekä meikkaukset
        yli kymmenen vuoden ammattitaidolla.
      </p>
    </div>
  </section>
);

export default Introduction;
