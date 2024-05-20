import type { User } from "../types";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id.value}>
          <img src={user.picture.thumbnail} alt={user.name.first} />
          <p>
            {user.name.first} {user.name.last}
          </p>

          <p>
            {user.location.city}, {user.location.state}, {user.location.country}
          </p>

          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}
