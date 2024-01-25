import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getCurrentPath } from "../utils/getCurrentPath.js";
import Router from "./Router.jsx";

vi.mock("../utils/getCurrentPath.js", () => ({
  getCurrentPath: vi.fn().mockReturnValue("/about")
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("Should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("Should render the default component when no route is matched", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("Should render the component of the first matched route", () => {
    getCurrentPath.mockReturnValue("/about");

    const routes = [
      {
        path: "/",
        component: () => <h1>Home</h1>
      },
      {
        path: "/about",
        component: () => <h1>About</h1>
      }
    ];

    render(<Router routes={routes} />);

    expect(screen.getByText("About")).toBeTruthy();
  });
});
