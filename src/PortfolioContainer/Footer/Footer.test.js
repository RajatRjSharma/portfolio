import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders social links and the current year", () => {
    render(
      <Footer
        links={{
          github: "https://github.com/rajatrjsharma",
          linkedin: "https://www.linkedin.com/in/rajatrjsharma",
          instagram: "https://www.instagram.com/rj_rajatsharma/",
        }}
      />
    );
    expect(
      screen.getByRole("link", { name: /github \(opens in a new tab\)/i })
    ).toHaveAttribute("href", "https://github.com/rajatrjsharma");
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
  });
});
