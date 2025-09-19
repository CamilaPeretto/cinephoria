import { useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites.js";
import { Heart, HeartOff, Info } from "lucide-react";

export default function MovieCard({ movie }) {
	const { isFavorite, addFavorite, removeFavorite } = useFavorites();
	const navigate = useNavigate();

	const toggleFavorite = () => {
		isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie);
	};

	const openDetails = () => navigate(`/details/${movie.id}`);

	return (
		<div className="bg-slate-800 rounded overflow-hidden relative shadow hover:shadow-lg transition">
			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
						: "https://via.placeholder.com/500x750?text=Sem+Imagem"
				}
				alt={movie.title}
				className="w-full object-cover"
			/>

			<div className="p-2 text-white">
				<h3 className="font-bold truncate">{movie.title}</h3>
				<p className="text-sm text-slate-300">
					{movie.release_date || "Sem data"}
				</p>

				<div className="flex justify-center mt-4 gap-6">
					<button
						onClick={toggleFavorite}
						className="flex items-center gap-1 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded bg-rose-600 hover:bg-rose-700 transition text-white"
					>
						{isFavorite(movie.id) ? (
							<>
								<HeartOff className="w-4 h-4" />
							</>
						) : (
							<>
								<Heart className="w-4 h-4" />
							</>
						)}
					</button>

					<button
						onClick={openDetails}
						className="flex items-center gap-1 text-xs sm:text-sm px-2 sm:px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-700 transition text-white"
					>
						<Info className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
