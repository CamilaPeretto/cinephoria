export const getApiKey = () => {
	return (
		import.meta.env.VITE_API_KEY || localStorage.getItem("cinephoria_api_key")
	);
};

export const BASE_URL = "https://api.themoviedb.org/3";
