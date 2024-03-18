import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions.ts";

export function CreateNewUser() {
  const { addUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    addUser({ name, email, github });
  };

  return (
    <Card>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Name" name="name" />
        <TextInput placeholder="Email" name="email" />
        <TextInput placeholder="GitHub username" name="github" />

        <div>
          <Button>Create</Button>
        </div>
      </form>
    </Card>
  );
}
