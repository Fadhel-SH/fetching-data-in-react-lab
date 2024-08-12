// src/services/starshipService.js

const BASE_URL = 'https://swapi.dev/api/starships/';

export const getStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};
