import { useEffect, useState } from "react";
import { FavoritesContextInstance } from "./FavoritesContextInstance.js";

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState(() => {
		try {
			const stored = localStorage.getItem("favorites");
			return stored ? JSON.parse(stored) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem("favorites", JSON.stringify(favorites));
		} catch {
			console.error("Erro ao salvar favoritos no localStorage");
		}
	}, [favorites]);

	const addFavorite = (movie) => {
		if (!favorites.find((f) => f.id === movie.id)) {
			setFavorites((prev) => [...prev, movie]);
		}
	};

	const removeFavorite = (id) =>
		setFavorites((prev) => prev.filter((f) => f.id !== id));

	const isFavorite = (id) => favorites.some((f) => f.id === id);

	return (
		<FavoritesContextInstance.Provider
			value={{ favorites, addFavorite, removeFavorite, isFavorite }}
		>
			{children}
		</FavoritesContextInstance.Provider>
	);
};
