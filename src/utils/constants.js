export const getApiKey = () => {
  const key = localStorage.getItem("cinephoria_api_key");
  return key ? key : import.meta.env.VITE_API_KEY;
};
