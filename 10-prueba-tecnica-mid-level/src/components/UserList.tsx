import type { User } from "../types";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-sm px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Foto
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Apellido
                  </th>
                  <th scope="col" className="px-4 py-3">
                    País
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id.value || index}
                    className="border-b dark:border-gray-700"
                  >
                    <td scope="row" className="px-4 py-3">
                      <img
                        className="size-8 rounded-full"
                        src={user.picture.thumbnail}
                        alt={`${user.name.first} ${user.name.last} profile picture`}
                      />
                    </td>
                    <td className="px-4 py-3">{user.name.first}</td>
                    <td className="px-4 py-3">{user.name.last}</td>
                    <td className="px-4 py-3">{user.location.country}</td>
                    <td className="px-4 py-3">
                      <div className="flex">
                        <button>Borrar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
