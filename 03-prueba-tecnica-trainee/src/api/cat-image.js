export const BASE_IMAGE_URL = 'https://cataas.com';

export const getCatImage = async (randomTextURL) => {
  return fetch(`${BASE_IMAGE_URL}/c/s/${randomTextURL}?wi=400&he=400&json=true`)
    .then((response) => response.json())
    .then((data) => {
      const { url } = data;
      return url;
    });
};
