import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesService } from "../services/moviesService.js";
import { useFavorites } from "../hooks/useFavorites.js";
import Loading from "../components/Loading.jsx";

export default function DetailsPage() {
  const { id } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const { data: movieData, error: movieError } = await moviesService.getMovieDetails(id);
        const { data: creditsData, error: creditsError } = await moviesService.getMovieCredits(id);

        if (movieError || creditsError) throw new Error(movieError || creditsError);

        setMovie(movieData);
        if (creditsData) {
          const dir = creditsData.crew.find((c) => c.job === "Director");
          setDirector(dir ? dir.name : "Desconhecido");
          setCast(creditsData.cast.slice(0, 5));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Erro: {error}</p>;
  if (!movie) return null;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="mb-4 rounded shadow"
        />
      )}
      <p className="mb-2"><strong>Sinopse:</strong> {movie.overview || "Sem descrição."}</p>
      <p className="mb-2"><strong>Nota:</strong> {movie.vote_average}/10</p>
      <p className="mb-2"><strong>Diretor:</strong> {director}</p>
      <p className="mb-4"><strong>Elenco:</strong> {cast.map((actor) => actor.name).join(", ")}</p>

      {isFavorite(movie.id) ? (
        <button
          onClick={() => removeFavorite(movie.id)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Remover dos Favoritos
        </button>
      ) : (
        <button
          onClick={() => addFavorite(movie)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Adicionar aos Favoritos
        </button>
      )}
    </div>
  );
}
