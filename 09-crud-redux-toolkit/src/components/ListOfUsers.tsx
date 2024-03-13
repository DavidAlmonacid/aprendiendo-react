import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title
} from "@tremor/react";
import { useSelector } from "react-redux";
import { EditIcon, TrashIcon } from "./Icons.tsx";

export function ListOfUsers() {
  const users = useSelector((state) => state.users);

  return (
    <Card>
      <Title>
        <span>Users</span>
        <Badge>{users.length}</Badge>
      </Title>

      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <picture>
                  <img
                    src={`https://unavatar.io/github/${user.github}`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                </picture>
                <span>{user.name}</span>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <button>
                  <EditIcon />
                </button>

                <button>
                  <TrashIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
