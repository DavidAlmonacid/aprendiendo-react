import { Toaster } from "sonner";
import { ListOfUsers } from "./components/ListOfUsers.tsx";

function App() {
  return (
    <>
      <ListOfUsers />
      <Toaster richColors visibleToasts={1} />
    </>
  );
}

export default App;
