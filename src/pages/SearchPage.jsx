import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { useMoviesApi } from "../hooks/useMoviesApi";

export default function SearchPage() {
  const { movies, loading, error, setQuery } = useMoviesApi();
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleShowFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(favorites);
    setShowFavorites(true);
  };

  const handleSearch = (term) => {
    setQuery(term);
    setShowFavorites(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={handleSearch} onShowFavorites={handleShowFavorites} />
      <main className="p-4 flex-1 space-y-6">
        {loading && <Loading />}

        {error && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            ❌ Erro: {error}
          </div>
        )}

        {!loading && showFavorites && favoriteMovies.length > 0 && (
          <MovieList movies={favoriteMovies} />
        )}

        {!loading && !showFavorites && movies.length > 0 && (
          <MovieList movies={movies} />
        )}

        {!loading && !showFavorites && movies.length === 0 && (
          <p className="text-gray-500">Nenhum filme encontrado.</p>
        )}

        {!loading && showFavorites && favoriteMovies.length === 0 && (
          <p className="text-gray-500">Nenhum favorito salvo.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
