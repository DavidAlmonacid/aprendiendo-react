import './App.css';
import { SearchResult } from './components/SearchResult';
import { useMovies } from './hooks/useMovies';

const App = () => {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const movieName = data.get('movieName');
    console.log({ movieName });
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
            required
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
