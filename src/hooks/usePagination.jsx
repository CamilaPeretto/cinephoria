import { useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
  const goToPage = (p) => setPage(p);

  return { page, nextPage, prevPage, goToPage, setPage };
};
