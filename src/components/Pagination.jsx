import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	if (totalPages <= 1) return null;

	const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
	const handleNext = () =>
		currentPage < totalPages && onPageChange(currentPage + 1);

	const renderPageNumbers = () => {
		const pages = [];
		const maxVisible = 3;

		let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
		let end = start + maxVisible - 1;

		if (end > totalPages) {
			end = totalPages;
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => onPageChange(i)}
					className={`px-3 py-1 rounded transition ${
						i === currentPage
							? "bg-indigo-600 text-white"
							: "bg-slate-200 text-slate-700 hover:bg-slate-300"
					}`}
				>
					{i}
				</button>
			);
		}

		return pages;
	};

	return (
		<div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
			<button
				onClick={handlePrev}
				disabled={currentPage === 1}
				className="px-3 py-1 bg-slate-200 rounded disabled:opacity-50 hover:bg-slate-300 disabled:hover:bg-slate-200"
			>
				<ChevronLeft className="w-5 h-5" />
			</button>

			{renderPageNumbers()}

			<button
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className="px-3 py-1 bg-slate-200 rounded disabled:opacity-50 hover:bg-slate-300 disabled:hover:bg-slate-200"
			>
				<ChevronRight className="w-5 h-5" />
			</button>
		</div>
	);
}
