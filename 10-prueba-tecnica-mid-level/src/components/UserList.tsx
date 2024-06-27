import { SortBy, type User } from "../types";

interface Props {
  users: User[];
  deleteUser: (uuid: string) => void;
  handleSortUsers: (sortBy: SortBy) => void;
  colorRows: boolean;
}

export function UserList({
  users,
  deleteUser,
  handleSortUsers,
  colorRows
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-gray-200">
        <thead className="text-xs text-left uppercase bg-gray-50 dark:bg-gray-700 text-gray-200">
          <tr>
            <th scope="col" className="px-4 py-3">
              Foto
            </th>
            <th
              scope="col"
              className="px-4 py-3 cursor-cell"
              onClick={() => handleSortUsers(SortBy.Name)}
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-4 py-3 cursor-cell"
              onClick={() => handleSortUsers(SortBy.Lastname)}
            >
              Apellido
            </th>
            <th
              scope="col"
              className="px-4 py-3 cursor-cell"
              onClick={() => handleSortUsers(SortBy.Country)}
            >
              País
            </th>
            <th scope="col" className="px-4 py-3">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.login.uuid}
              className={`border-b dark:border-gray-700 ${colorRows ? "odd:bg-gray-600 even:bg-gray-500" : ""}`}
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
                  <button
                    className="w-full py-1.5 bg-gray-900 rounded-lg"
                    type="button"
                    onClick={() => deleteUser(user.login.uuid)}
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
