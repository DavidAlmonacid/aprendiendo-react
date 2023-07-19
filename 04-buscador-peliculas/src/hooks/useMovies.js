import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../api/movies';

export const useMovies = ({ search, isSorted }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) {
      return;
    }

    try {
      setLoading(true);
      previousSearch.current = search;

      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      throw new Error('There was an error');
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return isSorted
      ? movies.toSorted((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [isSorted, movies]);

  return { movies: sortedMovies, getMovies, loading };
};
