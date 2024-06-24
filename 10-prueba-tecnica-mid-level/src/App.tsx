import { useEffect, useMemo, useRef, useState } from "react";
import UserList from "./components/UserList";
import { SortBy, type User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const originalUsers = useRef<User[]>([]);

  const [colorRows, setColorRows] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.None);
  const [filterByCountry, setFilterByCountry] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
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
    const newSortingValue =
      sorting !== SortBy.Country ? SortBy.Country : SortBy.None;
    setSorting(newSortingValue);
  };

  const filteredUsers = useMemo(() => {
    return filterByCountry !== ""
      ? users.filter((user) => {
          const currentUserCountry = user.location.country.toLowerCase();
          const inputFilterCountry = filterByCountry.toLowerCase();

          return currentUserCountry.includes(inputFilterCountry);
        })
      : users;
  }, [users, filterByCountry]);

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.None) {
      return filteredUsers;
    }

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.Name]: (user) => user.name.first,
      [SortBy.Lastname]: (user) => user.name.last,
      [SortBy.Country]: (user) => user.location.country
    };

    return filteredUsers.toSorted((a, b) => {
      const sortingProperty = compareProperties[sorting];

      return sortingProperty(a).localeCompare(sortingProperty(b));
    });
  }, [filteredUsers, sorting]);

  const handleDeleteUser = (uuid: string) => {
    setUsers(users.filter((user) => user.login.uuid !== uuid));
  };

  const handleRestoreUsers = () => {
    setUsers(originalUsers.current);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByCountry(event.target.value);
  };

  const handleSortUsers = (sortBy: SortBy) => {
    setSorting(sortBy);
  };

  return (
    <section className="bg-gray-950 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-md px-4">
        <main className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {/* start header */}
          <div className="p-4">
            <div className="w-full flex flex-col md:flex-row items-stretch md:items-center gap-y-2 gap-x-3">
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
                {sorting === SortBy.Country ? "No ordenar" : "Ordenar"} por país
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
                className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 grow"
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
            handleSortUsers={handleSortUsers}
            colorRows={colorRows}
          />
        </main>
      </div>
    </section>
  );
}

export default App;
