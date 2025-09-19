import Navbar from "../components/NavBar";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { useMoviesApi } from "../hooks/useMoviesApi";

export default function SearchPage() {
	const { movies, loading, error, setQuery, page, setPage, totalPages } =
		useMoviesApi();

	const handleSearch = (term) => {
		setQuery(term);
		setPage(1);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar onSearch={handleSearch} />

			<main className="p-4 flex-1 space-y-6">
				{loading && <Loading />}

				{error && (
					<div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
						Erro: {error}
					</div>
				)}

				{!loading && movies.length > 0 && (
					<>
						<MovieList movies={movies} />
						<Pagination
							currentPage={page}
							totalPages={totalPages}
							onPageChange={setPage}
						/>
					</>
				)}

				{!loading && !error && movies.length === 0 && (
					<p className="text-gray-500">Nenhum filme encontrado.</p>
				)}
			</main>

			<Footer />
		</div>
	);
}
