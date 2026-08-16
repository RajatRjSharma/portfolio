import React, { memo, useMemo, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExternalLink from "../../utils/ExternalLink";
import { formatDateRange } from "../../utils/formatDate";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import useProjectPageSize from "../../hooks/useProjectPageSize";
import "./FeaturedProjects.css";

import thumbChatsql from "../../assets/projects/chatsql.jpg";
import thumbFormBuilder from "../../assets/projects/form-builder.jpg";
import thumbTaskManager from "../../assets/projects/task-manager.jpg";
import thumbRobotFrontend from "../../assets/projects/robot-frontend.jpg";
import thumbRobotBackend from "../../assets/projects/robot-backend.jpg";
import thumbCalendar from "../../assets/projects/calendar.jpg";
import thumbBmi from "../../assets/projects/bmi.jpg";
import thumbRandomQuote from "../../assets/projects/random-quote.jpg";
import thumbCalculator from "../../assets/projects/calculator.jpg";
import thumbEmailQuote from "../../assets/projects/email-quote.jpg";
import thumbFlex from "../../assets/projects/flex.jpg";
import thumbTodo from "../../assets/projects/todo.jpg";
import thumbContactManager from "../../assets/projects/contact-manager.jpg";

const THUMBS = {
  chatsql: thumbChatsql,
  "form-builder": thumbFormBuilder,
  "task-manager": thumbTaskManager,
  "robot-frontend": thumbRobotFrontend,
  "robot-backend": thumbRobotBackend,
  calendar: thumbCalendar,
  bmi: thumbBmi,
  "random-quote": thumbRandomQuote,
  calculator: thumbCalculator,
  "email-quote": thumbEmailQuote,
  flex: thumbFlex,
  todo: thumbTodo,
  "contact-manager": thumbContactManager,
};

function projectKey(project) {
  return (project?.projectTitle || [])
    .map((item) => `${item.title}-${item.subTitle}`)
    .join("|");
}

function ctaLabel(link) {
  if (!link) return "View project";
  if (link.includes("github.com")) return "View code";
  if (link.includes("drive.google.com")) return "View file";
  return "Open project";
}

function Thumb({ src, alt, className, eager }) {
  if (!src) {
    return (
      <div className={`${className} project-thumb-fallback`} aria-hidden="true">
        <span>{alt || "Preview"}</span>
      </div>
    );
  }

    return (
      <img
        className={className}
        src={src}
        alt={alt || ""}
        width={640}
        height={360}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    );
}

function FeaturedProjects({ projects }) {
  const list = useMemo(
    () => (projects || []).filter((project) => project?.show),
    [projects]
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const pageSize = useProjectPageSize();
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);
  const pageItems = list.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  if (!list.length) return null;

  function goTo(nextPage) {
    setPage(Math.max(0, Math.min(pageCount - 1, nextPage)));
    document.getElementById("projects")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <section
      id="projects"
      className="featured-container"
      aria-labelledby="featured-heading"
    >
      <div className="featured-parent">
        <SectionTitle
          headingId="featured-heading"
          title="Selected Work"
          subtitle="Projects I have built"
        />
        <div className="project-grid">
          {pageItems.map((project, index) => {
            const primary = project.projectTitle?.[0] || {};
            return (
              <article key={projectKey(project)} className="project-card">
                <Thumb
                  src={THUMBS[project.thumb]}
                  alt={`${primary.title} homepage`}
                  className="project-card-shot"
                  eager={index < 2}
                />
                <div className="project-card-body">
                  <div className="project-card-top">
                    <h3 className="project-card-title">
                      {project.projectTitle.map((item) => item.title).join(", ")}
                    </h3>
                    <span className="featured-date">
                      {formatDateRange(project.startDate, project.endDate)}
                    </span>
                  </div>
                  {primary.subTitle ? (
                    <p className="project-card-stack">{primary.subTitle}</p>
                  ) : null}
                  <ul className="featured-points">
                    {(project.description || []).map((line) => (
                      <li key={line}>
                        <i className="fas fa-circle" aria-hidden="true"></i>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-pane-actions">
                    {project.projectTitle
                      ?.filter((title) => title.link)
                      .map((title) => (
                        <ExternalLink
                          key={title.link}
                          className="btn highlighted-btn featured-cta"
                          href={title.link}
                        >
                          {ctaLabel(title.link)}
                        </ExternalLink>
                      ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {pageCount > 1 ? (
          <div className="project-pager" role="navigation" aria-label="Project pages">
            <button
              type="button"
              className="btn primary-btn"
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 0}
              aria-label="Previous projects"
            >
              Previous
            </button>
            <span className="project-pager-status" aria-live="polite" aria-atomic="true">
              {currentPage + 1} of {pageCount}
            </span>
            <button
              type="button"
              className="btn highlighted-btn"
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === pageCount - 1}
              aria-label="Next projects"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default memo(FeaturedProjects);
