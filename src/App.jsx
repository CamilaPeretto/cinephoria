import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import ConfigPage from './pages/ConfigPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/config" element={<ConfigPage />} />
    </Routes>
  );
};

export default App;
