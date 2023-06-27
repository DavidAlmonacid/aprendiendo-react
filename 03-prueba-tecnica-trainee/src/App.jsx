import { useEffect, useState } from 'react';
import { BASE_IMAGE_URL, getCatImage } from './api/cat-image';
import { getRandomFact } from './api/fact';

const App = () => {
  const [fact, setFact] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(' ', 3).join(' ');
    const threeFirstWordsURL = encodeURIComponent(threeFirstWords);

    getCatImage(threeFirstWordsURL).then((newImage) => setImageURL(newImage));
  }, [fact]);

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
