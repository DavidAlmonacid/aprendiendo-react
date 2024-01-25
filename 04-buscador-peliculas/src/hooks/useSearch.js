import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState("");
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search.length === 0;
      return;
    }

    if (search.length < 3) {
      setError("The search must contain at least 3 letters");
      return;
    }

    setError("");
  }, [search]);

  return {
    search,
    updateSearch,
    error
  };
};
