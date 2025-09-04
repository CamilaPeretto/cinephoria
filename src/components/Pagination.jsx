import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // esconde se só tiver 1 página

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded ${
            i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
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
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        ◀
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        ▶
      </button>
    </div>
  );
}
