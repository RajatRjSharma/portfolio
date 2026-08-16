import { render, screen } from "@testing-library/react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

function Probe() {
  const reduced = usePrefersReducedMotion();
  return <span>{reduced ? "reduced" : "motion"}</span>;
}

describe("usePrefersReducedMotion", () => {
  it("reports false when the media query does not match", () => {
    render(<Probe />);
    expect(screen.getByText("motion")).toBeInTheDocument();
  });

  it("reports true when the user prefers reduced motion", () => {
    const original = window.matchMedia;
    window.matchMedia = (query) => ({
      matches: query.includes("prefers-reduced-motion: reduce"),
      media: query,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
    });
    render(<Probe />);
    expect(screen.getByText("reduced")).toBeInTheDocument();
    window.matchMedia = original;
  });
});
