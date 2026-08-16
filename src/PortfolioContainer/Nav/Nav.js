import React, { memo, useEffect, useState } from "react";
import "./Nav.css";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const LINKS = [
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#resume", id: "resume", label: "Resume" },
  { href: "#contact-form", id: "contact-form", label: "Contact" },
];

function Nav() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState("projects");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (LINKS.some((link) => link.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(event, href) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
    const id = href.replace("#", "");
    if (id) setActiveId(id);
  }

  return (
    <nav className="site-nav" aria-label="Primary">
      <a className="site-nav-brand" href="#main">
        Rajat Kumar Sharma
      </a>
      <ul className="site-nav-links">
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={
                activeId === link.id
                  ? "site-nav-link site-nav-link-active"
                  : "site-nav-link"
              }
              aria-current={activeId === link.id ? "location" : undefined}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(Nav);
