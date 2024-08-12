// src/App.jsx
import { useState, useEffect } from 'react';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getStarships();
      setStarships(data.results);
    };

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const filteredStarships = starships.filter((ship) =>
      ship.name.toLowerCase().includes(query.toLowerCase())
    );
    setStarships(filteredStarships);
  };

  return (
    <main>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={starships} />
    </main>
  );
};

export default App;
