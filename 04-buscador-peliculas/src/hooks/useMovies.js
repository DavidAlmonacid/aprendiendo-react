import { useRef, useState } from 'react';
import { searchMovies } from '../api/movies';

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const trimmedSearch = search.trim();
  const previousSearch = useRef(trimmedSearch);

  const getMovies = async () => {
    if (trimmedSearch === previousSearch.current) {
      return;
    }

    try {
      setLoading(true);
      previousSearch.current = trimmedSearch;

      const newMovies = await searchMovies({ search: trimmedSearch });
      setMovies(newMovies);
    } catch (error) {
      throw new Error('There was an error');
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
};
