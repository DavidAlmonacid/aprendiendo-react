import { CreateNewUser } from "./components/CreateNewUser.tsx";
import { ListOfUsers } from "./components/ListOfUsers.tsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ListOfUsers />
      <CreateNewUser />
    </>
  );
}

export default App;
