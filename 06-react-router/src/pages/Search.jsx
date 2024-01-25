import { useEffect } from "react";

const Search = ({ routeParams }) => {
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
