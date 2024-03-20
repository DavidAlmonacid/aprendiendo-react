import { useAppSelector } from "../hooks/store.ts";
import { useUserActions } from "../hooks/useUserActions.ts";
import { EditIcon, TrashIcon } from "./Icons.tsx";

export function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  const { deleteUser } = useUserActions();

  return (
    <div className="px-4">
      <div className="shadow-md rounded-2xl max-w-3xl mx-auto overflow-hidden">
        <section className="flex flex-col gap-y-4 bg-gray-900 px-4 py-3">
          <header className="flex items-end justify-between gap-x-2 text-gray-300">
            <h3 className="text-2xl font-semibold leading-none">Users</h3>

            <span>
              Total&nbsp;
              <span className="bg-gray-100 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700">
                {users.length}
              </span>
            </span>
          </header>

          <div className="flex justify-between gap-x-4">
            <button
              className="inline-flex text-nowrap items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              Add New User
            </button>

            <label className="sr-only">Search</label>
            <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 overflow-hidden">
              <span className="px-2">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="p-2 text-sm text-gray-900 w-80 bg-transparent dark:placeholder-gray-400 dark:text-white outline-none"
                placeholder="Search for users"
              />
            </div>
          </div>
        </section>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              {users.map((user, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    {user.id.length > 4 ? user.id.slice(0, 4) + "..." : user.id}
                  </td>

                  <th
                    scope="row"
                    className="flex items-center gap-x-3 px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
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
                    <button>
                      <EditIcon />
                    </button>

                    <button onClick={() => deleteUser(user.id)}>
                      <TrashIcon />
                    </button>
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
