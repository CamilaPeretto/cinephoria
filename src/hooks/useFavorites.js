import { useContext } from 'react';
import { FavoritesContextInstance } from '../contexts/FavoritesContextInstance.js';

export const useFavorites = () => {
  const context = useContext(FavoritesContextInstance);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
};
