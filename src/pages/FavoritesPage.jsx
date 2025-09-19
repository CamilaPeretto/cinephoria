import MovieList from "../components/MovieList.jsx";
import { useFavorites } from "../hooks/useFavorites.js";
import Footer from "../components/Footer.jsx";

export default function FavoritesPage() {
	const { favorites } = useFavorites();

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="bg-slate-900 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-white">
				<h1
					className="font-bold text-xl cursor-pointer hover:text-indigo-400 transition"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					CinePhoria
				</h1>
			</nav>
			<main className="p-4 flex-1">
				{favorites.length > 0 ? (
					<MovieList movies={favorites} />
				) : (
					<p className="text-gray-500">Nenhum favorito salvo.</p>
				)}
			</main>
			<Footer />
		</div>
	);
}
