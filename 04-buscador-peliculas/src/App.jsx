import { useState } from 'react';
import './App.css';
import { SearchResult } from './components/SearchResult';
import { useMovies, useSearch } from './hooks';

const App = () => {
  const [isSorted, setIsSorted] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, isSorted });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearch(search.trim());
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div>
      <header className='header'>
        <h1 className='header__title'>Your Best Film Finder</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            name='movieName'
            className='form__input'
            type='search'
            placeholder='Spider-Man, The Flash, Transformers, ...'
            value={search}
            onChange={handleChange}
            autoFocus
            required
          />

          <button type='submit' disabled={search.length < 3}>
            Search
          </button>
        </form>

        <div className='sort'>
          <label className='sort__wrapper'>
            <input
              type='checkbox'
              className='sort__checkbox'
              onChange={handleSort}
              checked={isSorted}
            />
            <span className='sort__text'>Ordenar alfabéticamente</span>
          </label>
        </div>

        {error && <p className='error-message'>{error}</p>}
      </header>

      <main>
        <div className='movies-wrapper'>
          {loading ? <p>Loading...</p> : <SearchResult movies={movies} />}
        </div>
      </main>
    </div>
  );
};

export default App;
