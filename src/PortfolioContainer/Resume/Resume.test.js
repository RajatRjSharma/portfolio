import { fireEvent, render, screen } from "@testing-library/react";
import Resume from "./Resume";

const resume = {
  workHistory: [
    {
      role: "Software Engineer",
      place: "Acme",
      link: "https://acme.test",
      startDate: "Jan 2024",
      endDate: "present",
      description: ["Shipped features"],
    },
  ],
  education: [
    {
      institute: "Test University",
      course: "B-Tech, CSE",
      startDate: "Jul 2018",
      endDate: "Jun 2022",
      description: ["CGPA: 8.0."],
    },
  ],
  programmingSkills: [
    { skill: "ReactJs", scale: "70", icon: "fab fa-react" },
    { skill: "Python", scale: "90", icon: "fa-brands fa-python" },
  ],
  certifications: [
    {
      title: "FastAPI",
      from: "Coursera",
      link: "https://coursera.test",
      icon: "fas fa-circle",
      date: "Jun 2024",
    },
  ],
};

describe("Resume", () => {
  it("shows work history by default", () => {
    render(<Resume resume={resume} />);
    expect(screen.getByRole("tab", { name: /work history/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /acme/i })).toHaveAttribute(
      "href",
      "https://acme.test"
    );
  });

  it("notifies the parent when a tab is selected", () => {
    const onTabChange = jest.fn();
    render(
      <Resume
        resume={resume}
        activeTab="work-history"
        onTabChange={onTabChange}
      />
    );
    fireEvent.click(screen.getByRole("tab", { name: /programming skills/i }));
    expect(onTabChange).toHaveBeenCalledWith("programming-skills");
  });

  it("renders skills sorted by scale when that tab is active", () => {
    render(
      <Resume resume={resume} activeTab="programming-skills" onTabChange={() => {}} />
    );
    const skills = screen.getAllByText(/reactjs|python/i).map((node) => node.textContent);
    expect(skills[0]).toContain("Python");
    expect(skills[1]).toContain("ReactJs");
  });

  it("falls back to work history for an unknown tab", () => {
    render(<Resume resume={resume} activeTab="nope" />);
    expect(screen.getByRole("tab", { name: /work history/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("moves to the next tab with the arrow keys", () => {
    const onTabChange = jest.fn();
    render(
      <Resume
        resume={resume}
        activeTab="work-history"
        onTabChange={onTabChange}
      />
    );
    fireEvent.keyDown(screen.getByRole("tablist"), { key: "ArrowRight" });
    expect(onTabChange).toHaveBeenCalledWith("programming-skills");
  });
});
