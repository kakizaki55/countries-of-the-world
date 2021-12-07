import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';
import CountryCard from './components/Country/Country';

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      // console.log(data);
      setCountry(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {country.map((place) => {
        return <CountryCard key={place.id} {...place} />;
      })}
    </div>
  );
}

export default App;
