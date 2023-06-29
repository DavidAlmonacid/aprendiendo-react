import { useEffect, useState } from 'react';

const BASE_IMAGE_URL = 'https://cataas.com';

export const useCatImage = ({ fact }) => {
  const [imageURL, setImageURL] = useState('');

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

  return { imageURL: BASE_IMAGE_URL + imageURL };
};
