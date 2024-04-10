import { useUserActions } from "../hooks/useUserActions.ts";
import type { UserId, UserWithId } from "../types/types.d.ts";
import { EditIcon, TrashIcon } from "./Icons.tsx";

interface Props {
  user: UserWithId;
  index: number;
}

export function UserRow({ user, index }: Props) {
  const { deleteUser } = useUserActions();

  const handleDeleteUser = (id: UserId) => {
    deleteUser(id);
  };

  return (
    <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
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
          <div className="font-normal text-gray-500">{user.email}</div>
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
  );
}
