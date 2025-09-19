import MovieCard from "./MovieCard.jsx";

export default function MovieList({ movies }) {
	if (!movies || movies.length === 0) {
		return <p className="text-slate-500">Nenhum filme disponível.</p>;
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
}
