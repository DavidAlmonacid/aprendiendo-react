import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App.tsx";

test(
  "should work as expected",
  async () => {
    const user = userEvent.setup();
    const app = render(<App />);

    const textArea = app.getByPlaceholderText("Enter text");
    user.type(textArea, "Hola mundo");

    const result = await app.findByText(/Hello world/i, {}, { timeout: 12000 });
    expect(result).toBeTruthy();
  },
  { timeout: 12000 }
);
