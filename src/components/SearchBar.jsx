import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar filmes..."
        className="flex-1 p-2 rounded border border-gray-400"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Buscar
      </button>
    </form>
  );
}

