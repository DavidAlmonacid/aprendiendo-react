import { useState } from 'react';
import { searchMovies } from '../api/movies';

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const trimmedSearch = search.trim();

  const getMovies = async () => {
    try {
      setLoading(true);

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
