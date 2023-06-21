import { useEffect, useState } from 'react';

const App = () => {
  const [fact, setFact] = useState('');
  const [firstWord, setFirstWord] = useState('');

  useEffect(() => {
    const getFact = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      const { fact } = data;

      setFact(fact);
      setFirstWord(encodeURIComponent(fact.split(' ')[0]));
    };
    getFact();
  }, []);

  return (
    <>
      <h1>Random facts about cats</h1>
      <p>{fact}</p>
      <img src={`https://cataas.com/cat/says/${firstWord}`} alt='' />
    </>
  );
};

export default App;
