import { useStore } from './hooks/useStore.ts';

function App() {
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <>
      <h1>Google translate</h1>

      <button
        onClick={() => {
          setFromLanguage('es');
        }}
      >
        Cambiar a Español
      </button>

      <span>{fromLanguage}</span>
    </>
  );
}

export default App;
