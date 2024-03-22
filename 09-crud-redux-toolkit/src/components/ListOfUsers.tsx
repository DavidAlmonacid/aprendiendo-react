import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/store.ts";
import { useUserActions } from "../hooks/useUserActions.ts";
import type { UserId, UserWithId } from "../types/types";
import { CreateNewUser } from "./CreateNewUser.tsx";
import { EditIcon, SearchIcon, TrashIcon } from "./Icons.tsx";

export function ListOfUsers() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<UserWithId[]>([]);

  const users = useAppSelector((state) => state.users);
  const { deleteUser } = useUserActions();

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleDeleteUser = (id: UserId) => {
    deleteUser(id);
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
      <div className="max-w-3xl mx-auto py-16 w-full overflow-hidden">
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
                <tr
                  key={user.id}
                  className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {user.id.length > 4 ? user.id.slice(0, 4) + "..." : user.id}
                  </td>

                  <th
                    scope="row"
                    className="flex items-center gap-x-3 px-6 py-4 text-white whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://picsum.photos/100/100?random=${index + 1}`}
                      alt={`Profile picture of ${user.name}`}
                    />
                    <div>
                      <div className="text-base font-semibold">{user.name}</div>
                      <div className="font-normal text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </th>

                  <td className="px-6 py-4">{user.role}</td>

                  <td className="px-6 py-4">
                    <section className="flex items-center justify-evenly h-full">
                      <button
                        type="button"
                        className="hover:text-yellow-600 focus:text-yellow-600"
                        aria-label="Edit user"
                      >
                        <EditIcon />
                      </button>

                      <button
                        type="button"
                        className="hover:text-red-600 focus:text-red-600"
                        aria-label="Delete user"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <TrashIcon />
                      </button>
                    </section>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
