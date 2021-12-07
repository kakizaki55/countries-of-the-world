import React from 'react';
import './Country.css';

export default function CountryCard({ name, iso2, continent }) {
  console.log(name);
  return (
    <>
      <div className="name">{name}</div>
      <div className="iso2">{iso2}</div>
      <div className="continent">{continent}</div>
      <img src="https://flagcdn.com/32x24/za.png" />
    </>
  );
}
