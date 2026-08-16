import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders the heading, subtitle, and heading id", () => {
    render(
      <SectionTitle
        headingId="projects-heading"
        title="Selected Work"
        subtitle="Projects I have built"
      />
    );
    const heading = screen.getByRole("heading", { name: "Selected Work" });
    expect(heading).toHaveAttribute("id", "projects-heading");
    expect(screen.getByText("Projects I have built")).toBeInTheDocument();
  });
});
