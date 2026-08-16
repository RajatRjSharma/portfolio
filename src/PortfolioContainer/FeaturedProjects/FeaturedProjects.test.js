import { fireEvent, render, screen } from "@testing-library/react";
import FeaturedProjects from "./FeaturedProjects";

function makeProject(index, extras = {}) {
  return {
    show: true,
    projectTitle: [
      {
        title: `Project ${index}`,
        subTitle: "React",
        link: `https://github.com/example/project-${index}`,
      },
    ],
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    description: [`Point ${index}`],
    ...extras,
  };
}

function mockMatchMedia({ mobile = false, tablet = false } = {}) {
  window.matchMedia = (query) => ({
    matches: query.includes("767px")
      ? mobile
      : query.includes("1023px")
        ? tablet
        : false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
}

describe("FeaturedProjects", () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("renders nothing when there are no visible projects", () => {
    const { container } = render(
      <FeaturedProjects projects={[{ show: false, projectTitle: [] }]} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("hides the pager when everything fits on one page", () => {
    render(
      <FeaturedProjects
        projects={Array.from({ length: 3 }, (_, index) => makeProject(index))}
      />
    );
    expect(
      screen.queryByRole("navigation", { name: /project pages/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Project 0" })).toBeInTheDocument();
  });

  it("pages through projects six at a time on large screens", () => {
    mockMatchMedia();
    render(
      <FeaturedProjects
        projects={Array.from({ length: 7 }, (_, index) => makeProject(index))}
      />
    );
    expect(screen.getByText("1 of 2")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /previous projects/i })
    ).toBeDisabled();
    expect(
      screen.getAllByRole("link", { name: /view code/i })[0]
    ).toHaveAttribute("href", "https://github.com/example/project-0");

    fireEvent.click(screen.getByRole("button", { name: /next projects/i }));
    expect(screen.getByText("2 of 2")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Project 6" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project 0" })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next projects/i })).toBeDisabled();
  });

  it("pages three at a time on mobile", () => {
    mockMatchMedia({ mobile: true, tablet: true });
    render(
      <FeaturedProjects
        projects={Array.from({ length: 7 }, (_, index) => makeProject(index))}
      />
    );
    expect(screen.getByText("1 of 3")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Project 2" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project 3" })
    ).not.toBeInTheDocument();
  });

  it("pages four at a time on tablet", () => {
    mockMatchMedia({ mobile: false, tablet: true });
    render(
      <FeaturedProjects
        projects={Array.from({ length: 7 }, (_, index) => makeProject(index))}
      />
    );
    expect(screen.getByText("1 of 2")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Project 3" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project 4" })
    ).not.toBeInTheDocument();
  });

  it("skips hidden projects", () => {
    render(
      <FeaturedProjects
        projects={[makeProject(1), { ...makeProject(2), show: false }]}
      />
    );
    expect(screen.getByRole("heading", { name: "Project 1" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project 2" })
    ).not.toBeInTheDocument();
  });
});
