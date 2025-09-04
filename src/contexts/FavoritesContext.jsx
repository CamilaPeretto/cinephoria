import { useEffect, useState } from 'react';
import { FavoritesContextInstance } from './FavoritesContextInstance.js';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find(f => f.id === movie.id)) setFavorites(prev => [...prev, movie]);
  };

  const removeFavorite = (id) => setFavorites(prev => prev.filter(f => f.id !== id));
  const isFavorite = (id) => favorites.some(f => f.id === id);

  return (
    <FavoritesContextInstance.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContextInstance.Provider>
  );
};
