const RANDOM_FACT_ENDPOINT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const response = await fetch(RANDOM_FACT_ENDPOINT);
  const data = await response.json();
  const { fact } = data;
  return fact;
};
