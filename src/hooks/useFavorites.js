import { useContext } from "react";
import { FavoritesContextInstance } from "../contexts/FavoritesContextInstance.js";

export const useFavorites = () => {
	const context = useContext(FavoritesContextInstance);

	if (!context) {
		throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
	}

	return context;
};
