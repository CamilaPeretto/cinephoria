import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchTerm.trim());
	};

	const goHome = () => {
		setSearchTerm("");
		onSearch("");
		navigate("/");
	};

	const goFavorites = () => navigate("/favorites");

	return (
		<nav className="bg-slate-900 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-white">
			<h1
				className="font-bold text-xl cursor-pointer hover:text-indigo-400 transition"
				onClick={goHome}
			>
				CinePhoria
			</h1>

			<form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Buscar filmes..."
					className="flex-1 px-2 py-1 rounded text-black"
				/>
				<button
					type="submit"
					className="bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 transition"
				>
					Buscar
				</button>
			</form>

			<button
				onClick={goFavorites}
				className="bg-rose-600 px-3 py-1 rounded hover:bg-rose-700 transition"
			>
				Favoritos
			</button>
		</nav>
	);
}
