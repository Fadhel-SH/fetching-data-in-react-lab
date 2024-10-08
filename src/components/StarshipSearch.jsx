// src/components/StarshipSearch.jsx

import { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a starship"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default StarshipSearch;
