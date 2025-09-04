import { useState, useEffect } from "react";
import { moviesService } from "../services/moviesService.js";

export const useMoviesApi = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchTerm = "") => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (searchTerm) {
        result = await moviesService.searchMovies(searchTerm);
      } else {
        result = await moviesService.getPopularMovies(1);
      }

      if (result.error) throw new Error(result.error);
      setMovies(result.data.results.slice(0, 20));
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return { movies, loading, error, query, setQuery, fetchMovies };
};
