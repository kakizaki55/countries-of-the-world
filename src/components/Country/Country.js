import React from 'react';
import './Country.css';

export default function CountryCard({ name, iso2, continent }) {
  return (
    <div className="card">
      <div className="name">name:{name}</div>
      <div className="continent">Continent:{continent}</div>
      <img src={`https://flagcdn.com/80x60/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
