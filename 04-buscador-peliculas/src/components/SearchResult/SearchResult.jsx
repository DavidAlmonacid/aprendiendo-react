const ListOfMovies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h3>{movie.title}</h3>

          <figure>
            <picture>
              <img src={movie.poster} alt={movie.title} />
            </picture>
            <figcaption>{movie.year}</figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
};

const NoResults = () => {
  return (
    <div>
      <p>No matched results</p>
    </div>
  );
};

const SearchResult = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />;
};

export default SearchResult;
