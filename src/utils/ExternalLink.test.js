import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink";

describe("ExternalLink", () => {
  it("renders children only when href is missing", () => {
    render(<ExternalLink>Plain text</ExternalLink>);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Plain text")).toBeInTheDocument();
  });

  it("opens in a new tab with a safe rel", () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    const link = screen.getByRole("link", { name: /example/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveTextContent("(opens in a new tab)");
  });

  it("includes the new-tab hint in aria-label when one is provided", () => {
    render(
      <ExternalLink href="https://github.com" ariaLabel="GitHub">
        gh
      </ExternalLink>
    );
    expect(
      screen.getByRole("link", { name: "GitHub (opens in a new tab)" })
    ).toBeInTheDocument();
  });
});
