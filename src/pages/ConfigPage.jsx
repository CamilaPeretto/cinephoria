import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";

export default function ConfigPage() {
  const [apiKey, setApiKey] = useLocalStorage("cinephoria_api_key", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("API Key salva com sucesso!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium">API Key do TMDB</label>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Digite sua API Key"
          className="p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
