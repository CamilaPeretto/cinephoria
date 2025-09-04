import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import DetailsPage from '../pages/DetailsPage';
import FavoritesPage from '../pages/FavoritesPage';
import ConfigPage from '../pages/ConfigPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/config" element={<ConfigPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
