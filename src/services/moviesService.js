const getApiKey = () => {
  const key = import.meta.env.VITE_API_KEY || "4c226abf99e0ff2cbb52b0d59fc19eab";
  console.log("🔑 API Key usada:", key);
  return key;
};

const BASE_URL = 'https://api.themoviedb.org/3';

export const moviesService = {
  searchMovies: async (term, page = 1) => {
    const apiKey = getApiKey();
    if (!apiKey) return { data: null, error: "API Key não definida" };
    if (!term) return { data: { results: [], total_pages: 0 }, error: null };

    try {
      const url = `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(term)}&page=${page}&language=pt-BR`;
      const res = await fetch(url);
      console.log("➡️ URL chamada searchMovies:", url);

      if (!res.ok) throw new Error('Erro ao buscar filmes');

      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  },

  getMovieDetails: async (id) => {
    const apiKey = getApiKey();
    if (!apiKey) return { data: null, error: "API Key não definida" };

    try {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${apiKey}&language=pt-BR`);
      if (!res.ok) throw new Error('Erro ao buscar detalhes do filme');
      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  },

  getMovieCredits: async (id) => {
    const apiKey = getApiKey();
    if (!apiKey) return { data: null, error: "API Key não definida" };

    try {
      const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`);
      if (!res.ok) throw new Error('Erro ao buscar créditos');
      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  },

  getPopularMovies: async (page = 1) => {
  const apiKey = getApiKey();
  const url = `${BASE_URL}/movie/popular?api_key=${apiKey}&page=${page}&language=pt-BR`;
  console.log("➡️ URL chamada getPopularMovies:", url); // <-- adiciona aqui

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erro ao buscar filmes populares');
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    console.error("❌ Erro em getPopularMovies:", error);
    return { data: null, error: error.message };
  }
}
};
