import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';
import CountryCard from './components/Country/Country';

function App() {
  const [countries, setcountries] = useState([]);
  const [quary, setQuary] = useState('');

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
      <div className="App">
        {filteredCountries().map((place) => {
          return <CountryCard key={place.id} {...place} />;
        })}
      </div>
    </>
  );
}

export default App;
