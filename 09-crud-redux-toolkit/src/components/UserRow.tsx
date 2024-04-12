import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions.ts";
import type { UserId, UserWithId } from "../types/types.d.ts";
import { CancelIcon, EditIcon, TrashIcon } from "./Icons.tsx";

interface Props {
  user: UserWithId;
  index: number;
}

export function UserRow({ user, index }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newRole, setNewRole] = useState(user.role);

  const { deleteUser, updateUser } = useUserActions();

  const handleUpdateUser = () => {
    setIsEditing(false);

    const newUser = {
      ...user,
      name: newName,
      email: newEmail,
      role: newRole
    };
    updateUser(newUser);
  };

  const handleDeleteUser = (id: UserId) => {
    deleteUser(id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewName(user.name);
    setNewEmail(user.email);
    setNewRole(user.role);
  };

  return (
    <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
      <th className="w-4 p-4">
        {user.id.length > 4 ? user.id.slice(0, 4) + "..." : user.id}
      </th>

      <td
        scope="row"
        className="flex items-center gap-x-3 px-6 py-4 text-white whitespace-nowrap"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={`https://picsum.photos/100/100?random=${index + 1}`}
          alt={`Profile picture of ${user.name}`}
        />

        <div className="grow">
          {isEditing ? (
            <>
              <input
                type="text"
                className="block w-full px-1 py-0.5 bg-gray-700 text-white mb-1"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />

              <input
                type="email"
                className="block w-full px-1 py-0.5 bg-gray-700 text-white mb-1"
                pattern="\w+\.*\w*@example\.com"
                title="Must end with &#34;@example.com&#34;"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
              />

              <button
                type="button"
                className="text-white font-medium rounded-lg text-sm px-4 py-1.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
                onClick={handleUpdateUser}
              >
                Save changes
              </button>
            </>
          ) : (
            <>
              <div className="text-base font-semibold">{user.name}</div>
              <div className="font-normal text-gray-500">{user.email}</div>
            </>
          )}
        </div>
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            className="w-full px-1 py-0.5 bg-gray-700 text-white"
            value={newRole}
            onChange={(event) => setNewRole(event.target.value)}
          />
        ) : (
          user.role
        )}
      </td>

      <td className="px-6 py-4">
        <section className="flex items-center justify-evenly h-full">
          {isEditing ? (
            <button
              type="button"
              className="hover:text-amber-600"
              aria-label="Cancel edit"
              onClick={handleCancelEdit}
            >
              <CancelIcon />
            </button>
          ) : (
            <button
              type="button"
              className="hover:text-amber-600"
              aria-label="Edit user"
              onClick={() => setIsEditing(true)}
            >
              <EditIcon />
            </button>
          )}

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
