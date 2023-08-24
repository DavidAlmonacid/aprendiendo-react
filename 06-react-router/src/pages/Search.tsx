import { useEffect } from 'react';

interface SearchProps {
  routeParams: Record<string, string>;
}

const Search: React.FC<SearchProps> = ({ routeParams }) => {
  useEffect(() => {
    document.title = `Search results for ${routeParams.query}`;
  }, [routeParams.query]);

  return (
    <>
      <p>Search results for {routeParams.query}</p>
    </>
  );
};

export default Search;
