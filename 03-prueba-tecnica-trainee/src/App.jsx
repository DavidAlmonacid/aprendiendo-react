import { useCatFact, useCatImage } from './hooks';

const App = () => {
  const { fact, randomFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  const handleClick = async () => {
    randomFact();
  };

  return (
    <main className='main'>
      <h1>Random facts about cats</h1>

      <section className='info'>
        {fact && <p>{fact}</p>}
        {imageURL && (
          <img
            src={imageURL}
            alt={`image extracted using the three first words for '${fact}'`}
          />
        )}
      </section>

      <section>
        <button onClick={handleClick}>Get new fact</button>
      </section>
    </main>
  );
};

export default App;
