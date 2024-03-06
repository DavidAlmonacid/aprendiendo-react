import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 600) {
  const [debounceValue, setDebounceValue] = useState<T>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}
