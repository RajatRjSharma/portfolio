import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders primary navigation and hero heading", async () => {
  render(<App />);
  expect(
    screen.getByRole("navigation", { name: /primary/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /get resume/i })).toHaveAttribute(
    "href",
    "/resume.pdf"
  );
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /contact me/i })
    ).toBeInTheDocument();
  });
});
