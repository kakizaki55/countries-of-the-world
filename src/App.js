import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';
import CountryCard from './components/Country/Country';

function App() {
  const [countries, setcountries] = useState([]);
  const [quary, setQuary] = useState('');
  const [continent, setContinent] = useState('ALL');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setcountries(data);
    };
    fetchData();
  }, []);

  const filteredCountries = () => {
    return countries.filter((country) => {
      return country.name.includes(quary);
    });
  };

  return (
    <>
      <input
        value={quary}
        onChange={(e) => {
          setQuary(e.target.value);
        }}
      />
      <select
        value={continent}
        onChange={(c) => {
          setContinent(c.target.value);
        }}
      >
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>

      <div className="App">
        {filteredCountries().map((place) => {
          return <CountryCard key={place.id} {...place} />;
        })}
      </div>
    </>
  );
}

export default App;
