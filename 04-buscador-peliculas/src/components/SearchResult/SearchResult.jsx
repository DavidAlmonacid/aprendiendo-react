import './ListOfMovies.css';

const ListOfMovies = ({ movies }) => {
  return (
    <div className='movies'>
      {movies.map((movie) => (
        <article key={movie.id} className='movie'>
          <picture className='movie__image-container'>
            <img
              src={movie.poster}
              alt={movie.title}
              width={300}
              className='movie__image'
            />
          </picture>
          <div className='movie__info'>
            <h3 className='movie__title' title={movie.title}>
              {movie.title}
            </h3>
            <span className='movie__year'>{movie.year}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

const NoResults = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 18 }}>No matched results</p>
    </div>
  );
};

const SearchResult = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />;
};

export default SearchResult;
