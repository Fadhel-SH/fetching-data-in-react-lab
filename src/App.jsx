// src/App.jsx
import { useState, useEffect } from 'react';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getStarships();
      setStarships(data.results);
      setFilteredStarships(data.results);
      setLoading(false);
    };

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((ship) =>
      ship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <header>
        <h1>Star Wars API</h1>
      </header>

      <section>
        <h2>Search</h2>
        <StarshipSearch onSearch={handleSearch} />
      </section>

      <section>
        <h2>Starships</h2>
        <p>Number of results: {filteredStarships.length}</p>
        <StarshipList starships={filteredStarships} />
      </section>
    </main>
  );
};

export default App;