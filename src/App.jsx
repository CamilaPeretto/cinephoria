import { Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<SearchPage />} />
			<Route path="/details/:movieId" element={<DetailsPage />} />
			<Route path="/favorites" element={<FavoritesPage />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}
