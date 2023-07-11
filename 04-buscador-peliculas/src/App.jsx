import './App.css';
import { SearchResult } from './components/SearchResult';
import { useMovies, useSearch } from './hooks';

const App = () => {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearch(search.trim());
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>Your Best Film Finder</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            name='movieName'
            className='form__input'
            type='search'
            placeholder='Spider-Man, The Flash, Transformers, ...'
            value={search}
            onChange={handleChange}
            required
          />

          <button type='submit' disabled={search.length <= 1}>
            Search
          </button>
        </form>

        {error && <p className='error-message'>{error}</p>}
      </header>

      <main>
        <div>
          <SearchResult movies={movies} />
        </div>
      </main>
    </div>
  );
};

export default App;
