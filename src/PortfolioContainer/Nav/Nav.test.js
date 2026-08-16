import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  let resume;
  let scrollIntoView;
  let replaceState;

  beforeEach(() => {
    window.history.pushState({}, "", "/");
    resume = document.createElement("div");
    resume.id = "resume";
    document.body.appendChild(resume);
    scrollIntoView = jest
      .spyOn(resume, "scrollIntoView")
      .mockImplementation(() => {});
    replaceState = jest
      .spyOn(window.history, "replaceState")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    resume.remove();
    scrollIntoView.mockRestore();
    replaceState.mockRestore();
  });

  it("marks Projects as the default current section", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "location"
    );
  });

  it("reads the current hash on load", () => {
    window.history.pushState({}, "", "/#resume");
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "aria-current",
      "location"
    );
  });

  it("scrolls to a section and updates the hash on click", () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole("link", { name: "Resume" }));
    expect(scrollIntoView).toHaveBeenCalled();
    expect(replaceState).toHaveBeenCalledWith(null, "", "#resume");
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "aria-current",
      "location"
    );
  });

  it("lets modified clicks use the browser default", () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole("link", { name: "Resume" }), {
      ctrlKey: true,
    });
    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(replaceState).not.toHaveBeenCalled();
  });
});
