import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const goHome = () => {
    navigate("/"); // vai para a rota inicial
  };

  const goFavorites = () => {
    navigate("/favorites"); // vai para a página de favoritos
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center text-white">
      <h1 className="font-bold text-xl cursor-pointer" onClick={goHome}>
        MovieApp
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar filmes..."
          className="px-2 py-1 rounded text-black"
        />
        <button type="submit" className="bg-blue-600 px-3 py-1 rounded">
          Buscar
        </button>
      </form>

      <button onClick={goFavorites} className="bg-red-600 px-3 py-1 rounded">
        Favoritos
      </button>
    </nav>
  );
}
