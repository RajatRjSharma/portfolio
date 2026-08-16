import React, { memo, useMemo } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExternalLink from "../../utils/ExternalLink";
import { formatDate, formatDateRange } from "../../utils/formatDate";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import "./Resume.css";

const TABS = [
  { id: "work-history", label: "Work History", icon: "fas fa-history" },
  { id: "programming-skills", label: "Programming Skills", icon: "fas fa-laptop" },
  { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
  { id: "certifications", label: "Certifications", icon: "fa-solid fa-certificate" },
];

function Resume({ resume, activeTab = "work-history", onTabChange }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const currentTab = TABS.some((tab) => tab.id === activeTab)
    ? activeTab
    : "work-history";

  const sortedSkills = useMemo(
    () =>
      [...(resume?.programmingSkills || [])].sort(
        (a, b) => Number(b?.scale) - Number(a?.scale)
      ),
    [resume?.programmingSkills]
  );

  function handleTabChange(tabId) {
    onTabChange?.(tabId);
    const panel = document.getElementById("resume-body-right");
    if (panel) {
      panel.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }

  function handleTabsKeyDown(event) {
    const currentIndex = TABS.findIndex((tab) => tab.id === currentTab);
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % TABS.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = TABS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    handleTabChange(TABS[nextIndex].id);
    requestAnimationFrame(() => {
      document.getElementById(`${TABS[nextIndex].id}-tile`)?.focus();
    });
  }

  return (
    <section
      id="resume"
      className="resume-container"
      aria-labelledby="resume-heading"
    >
      <div className="resume-parent">
        <SectionTitle
          headingId="resume-heading"
          title="Resume"
          subtitle="My Formal Bio Details"
        />
        <div className="resume-body">
          <div
            className="resume-body-left"
            role="tablist"
            aria-label="Resume sections"
            onKeyDown={handleTabsKeyDown}
          >
            {TABS.map((tab) => {
              const selected = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${tab.id}-tile`}
                  aria-selected={selected}
                  aria-controls={`${tab.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={
                    selected
                      ? "left-title left-title-select"
                      : "left-title left-title-hover"
                  }
                  onClick={() => handleTabChange(tab.id)}
                >
                  <i className={tab.icon} aria-hidden="true"></i>
                  <span className="left-text">{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div id="resume-body-right" className="resume-body-right">
            <div
              id="work-history-panel"
              role="tabpanel"
              aria-labelledby="work-history-tile"
              hidden={currentTab !== "work-history"}
              tabIndex={currentTab === "work-history" ? 0 : undefined}
            >
              {resume?.workHistory?.map((history) => (
                <div
                  className="right-object"
                  key={`${history.role}-${history.place}`}
                >
                  <div className="right-title">
                    <div className="right-title-1">
                      <i className="fas fa-circle" aria-hidden="true"></i>
                      <span className="left-text">
                        {history?.role}{" "}
                        <span className="left-text-sub">
                          <ExternalLink
                            href={history?.link}
                            className="work-place-link"
                          >
                            {history?.place}
                          </ExternalLink>
                        </span>
                      </span>
                    </div>
                    <div className="right-title-2">
                      {formatDateRange(history?.startDate, history?.endDate)}
                    </div>
                  </div>
                  <div className="right-desc">
                    {history?.description?.map((desc) => (
                      <div className="right-desc-1" key={desc}>
                        <i className="fas fa-circle" aria-hidden="true"></i>
                        <span className="left-text">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              id="education-panel"
              role="tabpanel"
              aria-labelledby="education-tile"
              hidden={currentTab !== "education"}
              tabIndex={currentTab === "education" ? 0 : undefined}
            >
              {resume?.education?.map((educ) => (
                <div className="right-object" key={educ.institute}>
                  <div className="right-title">
                    <div className="right-title-1">
                      <i className="fas fa-circle" aria-hidden="true"></i>
                      <span className="left-text">
                        <ExternalLink href={educ?.link}>
                          {educ?.institute}
                        </ExternalLink>{" "}
                        <span className="left-text-sub">{educ?.course}</span>
                      </span>
                    </div>
                    <div className="right-title-2">
                      {formatDateRange(educ?.startDate, educ?.endDate)}
                    </div>
                  </div>
                  <div className="right-desc">
                    {educ?.description?.map((desc) => (
                      <div className="right-desc-1" key={desc}>
                        <i className="fas fa-circle" aria-hidden="true"></i>
                        <span className="left-text">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              id="programming-skills-panel"
              role="tabpanel"
              aria-labelledby="programming-skills-tile"
              hidden={currentTab !== "programming-skills"}
              tabIndex={currentTab === "programming-skills" ? 0 : undefined}
            >
              {sortedSkills.map((skill) => (
                <div className="right-object" key={skill.skill}>
                  <div className="right-title">
                    <div className="right-title-1 prog-skill">
                      <i className={skill?.icon} aria-hidden="true"></i>
                      <span className="left-text">
                        {skill?.skill}
                        <span className="left-text-sub"></span>
                      </span>
                    </div>
                    <div
                      className="right-title-2-level"
                      role="meter"
                      aria-label={`${skill.skill} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Number(skill.scale)}
                    >
                      <span
                        className={
                          "right-title-2-level-1 right-title-2-level-1-" +
                          skill?.scale
                        }
                      ></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              id="certifications-panel"
              role="tabpanel"
              aria-labelledby="certifications-tile"
              hidden={currentTab !== "certifications"}
              tabIndex={currentTab === "certifications" ? 0 : undefined}
            >
              {resume?.certifications?.map((certificate) => (
                <div className="right-object" key={certificate.title}>
                  <div className="right-title">
                    <div className="right-title-1 cerfificate">
                      <i className={certificate?.icon} aria-hidden="true"></i>
                      <span className="left-text">
                        <ExternalLink href={certificate?.link} className="mr-1">
                          {certificate?.title}
                        </ExternalLink>{" "}
                        <span className="left-text-sub">
                          {certificate?.from}
                        </span>
                      </span>
                    </div>
                    <div className="right-title-2 certi-date">
                      {formatDate(certificate?.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Resume);
