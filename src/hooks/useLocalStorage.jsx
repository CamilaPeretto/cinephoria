import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [state, setState] = useState(() => {
		try {
			const stored = localStorage.getItem(key);
			return stored ? JSON.parse(stored) : initialValue;
		} catch {
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(state));
		} catch {
			console.error("Erro ao salvar no localStorage");
		}
	}, [key, state]);

	return [state, setState];
};
