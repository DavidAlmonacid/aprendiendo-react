import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/store.ts";
import type { UserWithId } from "../types/types";
import { CreateNewUser } from "./CreateNewUser.tsx";
import { SearchIcon } from "./Icons.tsx";
import { UserRow } from "./UserRow.tsx";

export function ListOfUsers() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<UserWithId[]>([]);

  const users = useAppSelector((state) => state.users);

  useEffect(() => {
    setFilteredUsers(users.toSorted((a, b) => a.id.localeCompare(b.id)));
  }, [users]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleSearchUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userFilter = event.target.value.toLowerCase();

    setFilteredUsers(
      users.filter((user) => {
        const id = user.id;
        const name = user.name.toLowerCase();
        const role = user.role.toLowerCase();

        return (
          name.includes(userFilter) ||
          role.includes(userFilter) ||
          id.includes(userFilter)
        );
      })
    );
  };

  return (
    <div className="flex items-center px-4 min-h-screen">
      <div className="max-w-3xl mx-auto py-16 w-full">
        <header className="flex flex-col gap-y-4 bg-gray-900 px-4 py-3 rounded-t-2xl">
          <section className="flex items-end justify-between gap-x-2 text-gray-300">
            <h3 className="text-2xl font-semibold leading-none">Users</h3>

            <span>
              Total&nbsp;
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-700">
                {filteredUsers.length}
              </span>
            </span>
          </section>

          <div className="relative flex justify-between gap-x-4">
            <div className="flex items-center border border-gray-600 rounded-lg bg-gray-700 overflow-hidden has-[:focus]:ring-2">
              <span className="px-2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                type="search"
                name="search"
                className="p-2 text-sm text-white w-80 bg-transparent placeholder-gray-400 outline-none"
                placeholder="Search for users"
                onChange={handleSearchUsers}
              />
            </div>

            <button
              className="inline-flex text-nowrap items-center text-gray-400 bg-gray-800 border border-gray-600 focus:outline-none hover:bg-gray-700 focus:ring-2 font-medium rounded-lg text-sm px-3 py-1.5 hover:border-gray-600"
              type="button"
              onClick={handleOpenModal}
            >
              Add New User
            </button>

            {isOpenModal && (
              <CreateNewUser open={isOpenModal} setOpen={setIsOpenModal} />
            )}
          </div>
        </header>

        <div className="w-full overflow-x-auto rounded-b-2xl shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="p-4">
                  ID
                </th>

                <th scope="col" className="px-6 py-3">
                  Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Role
                </th>

                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <UserRow key={user.id} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
