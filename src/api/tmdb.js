import { BASE_URL, getApiKey } from "../utils/constants.js";

const request = async (endpoint) => {
	const apiKey = getApiKey();
	if (!apiKey) return { data: null, error: "API Key não definida" };

	try {
		const res = await fetch(
			`${BASE_URL}${endpoint}&api_key=${apiKey}&language=pt-BR`
		);

		if (!res.ok) throw new Error("Erro na requisição");

		const data = await res.json();
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error.message };
	}
};

export const tmdb = {
	searchMovies: (term, page = 1) =>
		request(`/search/movie?query=${encodeURIComponent(term)}&page=${page}`),

	getPopularMovies: (page = 1) => request(`/movie/popular?page=${page}`),

	getMovieDetails: (id) => request(`/movie/${id}?append_to_response=credits`),

	getMovieCredits: (id) => request(`/movie/${id}/credits`),
};
