import debounce from "just-debounce-it";
import { useCallback, useState } from "react";
import "./App.css";
import { SearchResult } from "./components/SearchResult";
import { useMovies, useSearch } from "./hooks";

const App = () => {
  const [isSorted, setIsSorted] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, isSorted });

  const debounceGetMovies = useCallback(
    debounce(({ search }) => {
      const trimmedSearch = search.trim();

      if (trimmedSearch === "") {
        return;
      }

      getMovies({ search: trimmedSearch });
    }, 800),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedSearch = search.trim();

    updateSearch(trimmedSearch);
    getMovies({ search: trimmedSearch });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debounceGetMovies({ search: newSearch });
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Your Best Film Finder</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            name="movieName"
            className="form__input"
            type="search"
            placeholder="Spider-Man, The Flash, Transformers, ..."
            value={search}
            onChange={handleChange}
            autoFocus
            required
          />

          <button type="submit" disabled={search.length < 3}>
            Search
          </button>
        </form>

        <div className="sort">
          <label className="sort__wrapper">
            <input
              type="checkbox"
              className="sort__checkbox"
              onChange={handleSort}
              checked={isSorted}
            />
            <span className="sort__text">Ordenar alfabéticamente</span>
          </label>
        </div>

        {error && <p className="error-message">{error}</p>}
      </header>

      <main>
        <div className="movies-wrapper">
          {loading ? <p>Loading...</p> : <SearchResult movies={movies} />}
        </div>
      </main>
    </div>
  );
};

export default App;
