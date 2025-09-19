import { useState, useEffect } from "react";
import { tmdb } from "../api/tmdb.js";

export const useMoviesApi = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			setError(null);

			try {
				let response;
				if (query) {
					response = await tmdb.searchMovies(query, page);
				} else {
					response = await tmdb.getPopularMovies(page);
				}

				if (response.error) throw new Error(response.error);

				setMovies(response.data.results || []);
				setTotalPages(response.data.total_pages || 1);
			} catch (err) {
				setError(err.message);
				setMovies([]);
				setTotalPages(1);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, [query, page]);

	return { movies, loading, error, setQuery, page, setPage, totalPages };
};
