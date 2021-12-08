import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';
import CountryCard from './components/Country/Country';

function App() {
  const [countries, setcountries] = useState([]);
  const [quary, setQuary] = useState('');
  const [continent, setContinent] = useState('All');
  const [order, setOrder] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setcountries(data);
    };
    fetchData();
  }, []);

  const filteredCountries = () => {
    return countries
      .sort((a, b) => {
        if (order === 'asc') {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        } else if (order === 'dsc') {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }
      })
      .filter((country) => {
        return (
          country.name.toLowerCase().includes(quary) &&
          (country.continent === continent || continent === 'All')
        );
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
        <option value="All">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>
      <select
        value={order}
        onChange={(c) => {
          setOrder(c.target.value);
        }}
      >
        <option value="default">default</option>
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
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
