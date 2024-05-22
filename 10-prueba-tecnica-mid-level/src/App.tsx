import { useState, useEffect, useRef } from "react";
import type { User } from "./types";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const originalUsers = useRef<User[]>([]);

  const [colorRows, setColorRows] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [filterByCountry, setFilterByCountry] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async (response) => await response.json())
      .then(({ results }) => {
        setUsers(results);
        originalUsers.current = results;
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

  const filteredUsers = filterByCountry
    ? users.filter((user) => {
        const currentUserCountry = user.location.country.toLowerCase();
        const inputFilterCountry = filterByCountry.toLowerCase();

        return currentUserCountry.includes(inputFilterCountry);
      })
    : users;

  const sortedUsers = sortByCountry
    ? [...filteredUsers].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : filteredUsers;

  const handleDeleteUser = (uuid: string) => {
    setUsers(users.filter((user) => user.login.uuid !== uuid));
  };

  const handleRestoreUsers = () => {
    setUsers(originalUsers.current);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByCountry(event.target.value);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-950 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-md px-4 lg:px-12">
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

              <button
                type="button"
                className="flex items-center justify-center text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
                onClick={handleRestoreUsers}
              >
                Restaurar usuarios
              </button>

              <input
                type="search"
                className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Filtrar por país"
                defaultValue={filterByCountry}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          {/* end header */}

          <UserList
            users={sortedUsers}
            deleteUser={handleDeleteUser}
            colorRows={colorRows}
          />
        </main>
      </div>
    </section>
  );
}

export default App;
