import { useState } from 'react';

const BASE_URL = 'https://www.omdbapi.com/';

export const useMovies = ({ search }) => {
  const [responseMovies, setResponseMovies] = useState({});

  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }));

  const getMovies = () => {
    fetch(`${BASE_URL}?apikey=aaf5165c&s=${search.trim()}`)
      .then((res) => res.json())
      .then((data) => setResponseMovies(data));
  };

  return { movies: mappedMovies, getMovies };
};
