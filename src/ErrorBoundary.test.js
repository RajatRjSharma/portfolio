import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function Problem() {
  throw new Error("boom");
}

describe("ErrorBoundary", () => {
  let consoleError;

  beforeEach(() => {
    consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <p>All good</p>
      </ErrorBoundary>
    );
    expect(screen.getByText("All good")).toBeInTheDocument();
  });

  it("shows a recovery message when a child throws", () => {
    render(
      <ErrorBoundary>
        <Problem />
      </ErrorBoundary>
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Something went wrong");
    expect(screen.getByRole("button", { name: /refresh/i })).toBeInTheDocument();
  });
});
