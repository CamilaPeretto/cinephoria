import { useState, useEffect } from "react";

export default function MovieCard({ movie, onFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.id === movie.id));
  }, [movie.id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    onFavorite && onFavorite(updatedFavorites);
  };

  const handleDetails = () => {
    alert(`Detalhes de ${movie.title}`);
  };

  return (
    <div className="bg-gray-800 rounded overflow-hidden relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2 text-white">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.release_date}</p>
        <div className="flex justify-between mt-2">
          <button
            onClick={handleFavorite}
            className={`px-2 py-1 rounded ${
              isFavorite ? "bg-red-500" : "bg-gray-600"
            }`}
          >
            {isFavorite ? "❤️ Favorito" : "🤍 Favorito"}
          </button>
          <button
            onClick={handleDetails}
            className="px-2 py-1 bg-blue-600 rounded"
          >
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
