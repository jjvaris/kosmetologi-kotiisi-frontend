import React from 'react';

const PriceTable = () => (
  <table className="price-table">
    <tbody>
      <tr className="price-table__row">
        <th className="price-table__service">Palvelut</th>
        <th className="price-table__price">Hinta EUR</th>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service">Kasvohoidot</td>
        <td className="price-table__price">Alk. 30 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Peruskasvohoito (60 min)
        </td>
        <td className="price-table__price">30 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Erikoiskasvohoito (90 min)
        </td>
        <td className="price-table__price">50 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service">Käsi ja jalkahoidot</td>
        <td className="price-table__price">Alk. 50 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Peruskäsihoito (45 min)
        </td>
        <td className="price-table__price">50 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Erikoiskäsihoito (70 min)
        </td>
        <td className="price-table__price">65 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Perusjalkahoito (70 min)
        </td>
        <td className="price-table__price">65 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Erikoisjalkahoito (90 min)
        </td>
        <td className="price-table__price">75 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service">Sokeroinnit</td>
        <td className="price-table__price">Alk. 20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Kasvot (15 min)
        </td>
        <td className="price-table__price">20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Sääret (20 min)
        </td>
        <td className="price-table__price">30 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Bikini (30 min)
        </td>
        <td className="price-table__price">50 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service">Ehostukset</td>
        <td className="price-table__price">Alk. 20 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Häämeikki (90 min)
        </td>
        <td className="price-table__price">80 €</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Häämeikki usealle
        </td>
        <td className="price-table__price">Kysy tarjous!</td>
      </tr>
      <tr className="price-table__row">
        <td className="price-table__service price-table__service--special">
          Juhlameikki (60min)
        </td>
        <td className="price-table__price">60 €</td>
      </tr>
    </tbody>
  </table>
);

export default PriceTable;
