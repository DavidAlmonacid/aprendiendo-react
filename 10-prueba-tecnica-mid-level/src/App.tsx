import { useState, useEffect } from "react";
import type { User } from "./types";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colorRows, setColorRows] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async (response) => await response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleColorRows = () => {
    setColorRows(!colorRows);
  };

  const toggleSortByCountry = () => {
    setSortByCountry((prevState) => !prevState);
  };

  const sortedUsers = sortByCountry
    ? [...users].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : users;

  return (
    <section className="bg-gray-50 dark:bg-gray-950 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-sm px-4 lg:px-12">
        <main className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {/* start header */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
                onClick={toggleColorRows}
              >
                Colorear filas
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
                onClick={toggleSortByCountry}
              >
                {sortByCountry ? "No ordenar" : "Ordenar"} por país
              </button>
            </div>
          </div>
          {/* end header */}

          <UserList users={sortedUsers} colorRows={colorRows} />
        </main>
      </div>
    </section>
  );
}

export default App;
