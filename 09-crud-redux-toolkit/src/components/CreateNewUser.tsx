import { useState } from "react";

import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions.ts";

export function CreateNewUser() {
  const [result, setResult] = useState<"ok" | "ko" | null>(null);
  const { addUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    if (!name || !email || !role) {
      setResult("ko");
      return;
    }

    addUser({ name, email, role });
    setResult("ok");
    form.reset();
  };

  return (
    <Card>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Name" name="name" />
        <TextInput placeholder="Email" name="email" type="email" />
        <TextInput placeholder="Role" name="role" />

        <div>
          <Button>Create</Button>
          <span>
            {result === "ok" && <Badge color="green">User created</Badge>}
            {result === "ko" && <Badge color="red">Invalid input</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
