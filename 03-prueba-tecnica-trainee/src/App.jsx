import { useEffect, useState } from 'react';
import { getRandomFact } from './api/fact';
import { useCatImage } from './hooks/useCatImage';

const BASE_IMAGE_URL = 'https://cataas.com';

const App = () => {
  const [fact, setFact] = useState('');
  const { imageURL } = useCatImage({ fact });

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main className='main'>
      <h1>Random facts about cats</h1>

      <section className='info'>
        {fact && <p>{fact}</p>}
        {imageURL && (
          <img
            src={BASE_IMAGE_URL + imageURL}
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
