import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the Hello, world! heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Hello, world!" }),
    ).toBeInTheDocument();
  });

  it("shows a short message for workflow exercises", () => {
    render(<App />);

    expect(
      screen.getByText("Your workflow exercise starts here."),
    ).toBeInTheDocument();
  });
});
