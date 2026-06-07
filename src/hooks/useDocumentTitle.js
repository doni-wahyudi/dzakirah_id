import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title 
      ? `${title} — Dzakirah.id` 
      : 'Dzakirah.id — Ruang Pulih & Tumbuh untuk Perempuan';
  }, [title]);
}
