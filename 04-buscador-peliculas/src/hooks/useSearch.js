import { useEffect, useRef, useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search.length === 0;
      return;
    }

    if (search.length < 2) {
      setError('The search must contain at least 2 letters');
      return;
    }

    setError('');
  }, [search]);

  return {
    search,
    updateSearch: setSearch,
    error
  };
};
