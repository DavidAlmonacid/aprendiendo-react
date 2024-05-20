import { useState, useEffect } from "react";
import type { User } from "./types";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async (response) => await response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
