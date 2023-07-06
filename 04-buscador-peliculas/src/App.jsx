import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Buscador de películas</h1>

        <form className='form'>
          <input
            className='form__input'
            type='search'
            placeholder='Spider-Man, The Flash, Transformers, ...'
          />

          <button type='submit'>Search</button>
        </form>
      </header>
    </div>
  );
};

export default App;
