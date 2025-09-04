import { useFavorites } from "../hooks/useFavorites.js";
import MovieList from "../components/MovieList.jsx";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">Nenhum filme favoritado ainda.</p>
      ) : (
        <MovieList movies={favorites} />
      )}
    </div>
  );
}
