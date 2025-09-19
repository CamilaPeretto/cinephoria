export default function Footer() {
	return (
		<footer className="bg-slate-900 text-slate-300 py-4 mt-10">
			<div className="container mx-auto text-center text-sm">
				<p>
					© {new Date().getFullYear()} CinePhoria. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
