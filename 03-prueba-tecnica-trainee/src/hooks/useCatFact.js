import { useEffect, useState } from "react";
import { getRandomFact } from "../api/fact";

export const useCatFact = () => {
  const [fact, setFact] = useState("");

  const randomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(randomFact, []);

  return { fact, randomFact };
};
