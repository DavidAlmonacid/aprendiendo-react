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
import { EditIcon, TrashIcon } from "./Icons";

export interface User {
  id: string;
  name: string;
  email: string;
  github: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Viola Amherd",
    email: "viola.amherd@example.com",
    github: "violaamherd"
  },
  {
    id: "2",
    name: "Albert Rösti",
    email: "albert.roesti@example.com",
    github: "albertroesti"
  },
  {
    id: "3",
    name: "Beat Jans",
    email: "beat.jans@example.com",
    github: "beatjans"
  },
  {
    id: "4",
    name: "Ignazio Cassis",
    email: "ignazio.cassis@example.com",
    github: "ignaziocassis"
  },
  {
    id: "5",
    name: "Karin Keller-Sutter",
    email: "karin.keller-sutter@example.com",
    github: "karinkellersutter"
  },
  {
    id: "6",
    name: "Guy Parmelin",
    email: "guy.parmelin@example.com",
    github: "guyparmelin"
  },
  {
    id: "7",
    name: "Elisabeth Baume-Schneider",
    email: "elisabeth.baume-schneider@example.com",
    github: "elisabethbaumeschneider"
  }
];

export function ListOfUsers() {
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
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <picture>
                  <img
                    src={`https://unavatar.io/github/${item.github}`}
                    alt={item.name}
                    className="w-8 h-8 rounded-full"
                  />
                </picture>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.email}</TableCell>
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
