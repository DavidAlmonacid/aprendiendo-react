const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "aaf5165c";

export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${search}`);
    const data = await response.json();
    const movies = data.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
