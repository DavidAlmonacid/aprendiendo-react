import { useRef, useState } from 'react';
import { searchMovies } from '../api/movies';

export const useMovies = ({ search, isSorted }) => {
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

  const getSortedMovies = () => {
    console.log('getSortedMovies');
    const sortedMovies = isSorted
      ? movies.toSorted((a, b) => a.title.localeCompare(b.title))
      : movies;

    return sortedMovies;
  };

  return { movies: getSortedMovies(), getMovies, loading };
};
