import { useEffect, useState } from 'react';

const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact';
const BASE_IMAGE_URL = 'https://cataas.com';

const App = () => {
  const [fact, setFact] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(' ', 3).join(' ');
    const threeFirstWordsURL = encodeURIComponent(threeFirstWords);

    fetch(`${BASE_IMAGE_URL}/c/s/${threeFirstWordsURL}?wi=400&he=400&json=true`)
      .then((response) => response.json())
      .then((data) => {
        const { url } = data;
        setImageURL(url);
      });
  }, [fact]);

  return (
    <>
      <h1>Random facts about cats</h1>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={BASE_IMAGE_URL + imageURL}
          alt={`image extracted using the three first words for '${fact}'`}
        />
      )}
    </>
  );
};

export default App;
