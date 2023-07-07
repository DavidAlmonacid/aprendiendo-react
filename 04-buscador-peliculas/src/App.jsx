import './App.css';
import { SearchResult } from './components/SearchResult';
import { useMovies } from './hooks/useMovies';

const App = () => {
  const { movies } = useMovies();

  return (
    <div>
      <header>
        <h1>Your Best Film Finder</h1>

        <form className='form'>
          <input
            className='form__input'
            type='search'
            placeholder='Spider-Man, The Flash, Transformers, ...'
          />

          <button type='submit'>Search</button>
        </form>
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
