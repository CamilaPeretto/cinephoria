import MovieCard from "./MovieCard";

export default function MovieList({ movies, onFavorite }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
}
