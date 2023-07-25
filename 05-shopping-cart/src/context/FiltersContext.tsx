import type { Filter } from '@/types';
import { createContext, useState } from 'react';

export type FiltersContextType = {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

export type FiltersProviderProps = {
  children: React.ReactNode;
};

export const FiltersContext = createContext({} as FiltersContextType);

export const FiltersProvider: React.FC<FiltersProviderProps> = ({
  children
}) => {
  const [filters, setFilters] = useState<Filter>({
    category: 'all',
    minPrice: 0
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
