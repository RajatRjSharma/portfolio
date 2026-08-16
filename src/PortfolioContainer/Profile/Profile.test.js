import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

const profile = {
  fullname: "Rajat Kumar Sharma",
  profileTagline: "A Software Engineer",
  profileSkills: { skills: ["Software Engineer"], skillTime: 1000 },
  links: {
    github: "https://github.com/rajatrjsharma",
    linkedin: "https://www.linkedin.com/in/rajatrjsharma",
    instagram: "https://www.instagram.com/rj_rajatsharma/",
  },
};

describe("Profile", () => {
  it("renders the name, resume download, and social links", () => {
    render(<Profile profile={profile} />);
    expect(screen.getByText("Rajat Kumar Sharma")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get resume/i })).toHaveAttribute(
      "href",
      "/resume.pdf"
    );
    expect(
      screen.getByRole("link", { name: /github \(opens in a new tab\)/i })
    ).toHaveAttribute("href", "https://github.com/rajatrjsharma");
  });
});
