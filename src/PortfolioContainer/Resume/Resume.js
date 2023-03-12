import React from "react";
import "./Resume.css";

export default function Resume({ resume }) {
  function handleClick(value) {
    changeDisplay(value);
  }

  function changeDisplay(value) {
    let displayIdArray = [
      "work-history",
      "education",
      "programming-skills",
      "projects",
      "certifications",
    ];

    switch (value) {
      case "education":
        displayIdArray[0] = displayIdArray.splice(1, 1, displayIdArray[0])[0];
        break;
      case "programming-skills":
        displayIdArray[0] = displayIdArray.splice(2, 1, displayIdArray[0])[0];
        break;
      case "projects":
        displayIdArray[0] = displayIdArray.splice(3, 1, displayIdArray[0])[0];
        break;
      case "certifications":
        displayIdArray[0] = displayIdArray.splice(4, 1, displayIdArray[0])[0];
        break;
      default:
        break;
    }

    displayIdArray.forEach((id, index) => {
      if (index !== 0) {
        document.getElementById(id).style.display = "none";
        document
          .getElementById(id + "-tile")
          .classList.remove("left-title-select");
        document.getElementById(id + "-tile").classList.add("left-title-hover");
      } else {
        document.getElementById(id).style.display = "block";
        document
          .getElementById(id + "-tile")
          .classList.add("left-title-select");
        document
          .getElementById(id + "-tile")
          .classList.remove("left-title-hover");
      }
    });

    document
      .getElementById("resume-body-right")
      .scroll({ top: 0, behavior: "smooth" });
  }

  React.useEffect(() => {
    changeDisplay("education");
  });

  return (
    <div className="resume-container">
      <div className="resume-parent">
        <div className="title-text">
          <h1>Resume</h1>
          <span>My formal Bio Details</span>
          <div className="resume-parent-border">
            <span></span>
          </div>
        </div>
        <div className="resume-body">
          <div className="resume-body-left">
            <div
              className="left-title"
              onClick={() => handleClick("education")}
              id="education-tile"
            >
              <i className="fas fa-graduation-cap"></i>
              <span className="left-text">Education</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("work-history")}
              id="work-history-tile"
            >
              <i className="fas fa-history"></i>
              <span className="left-text">Work History</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("programming-skills")}
              id="programming-skills-tile"
            >
              <i className="fas fa-laptop"></i>
              <span className="left-text">Programming Skills</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("certifications")}
              id="certifications-tile"
            >
              <i className="fa-solid fa-certificate"></i>
              <span className="left-text">Certifications</span>
            </div>
            <div
              className="left-title"
              onClick={() => handleClick("projects")}
              id="projects-tile"
            >
              <i className="fas fa-tasks"></i>
              <span className="left-text">Projects</span>
            </div>
          </div>
          <div id="resume-body-right" className="resume-body-right">
            <div id="work-history">
              {resume?.workHistory?.map((history, indexHistory) => {
                return (
                  <div className="right-object" key={indexHistory}>
                    <div className="right-title">
                      <div className="right-title-1">
                        <i className="fas fa-circle"></i>
                        <span className="left-text">
                          {history?.role}{" "}
                          <span className="left-text-sub">
                            {history?.place}
                          </span>
                        </span>
                      </div>
                      <div className="right-title-2">
                        {history?.startDate} - {history?.endDate}
                      </div>
                    </div>
                    <div className="right-desc">
                      {history?.description?.map((desc, indexDesc) => {
                        return (
                          <div className="right-desc-1" key={indexDesc}>
                            <i className="fas fa-circle"></i>
                            <span className="left-text">{desc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="education">
              {resume?.education?.map((educ, indexEduc) => {
                return (
                  <div className="right-object" key={indexEduc}>
                    <div className="right-title">
                      <div className="right-title-1">
                        <i className="fas fa-circle"></i>
                        <span className="left-text">
                          {educ?.institute}{" "}
                          <span className="left-text-sub">{educ?.course}</span>
                        </span>
                      </div>
                      <div className="right-title-2">
                        {educ?.startDate} - {educ?.endDate}
                      </div>
                    </div>
                    <div className="right-desc">
                      {educ?.description?.map((desc, indexDesc) => {
                        return (
                          <div className="right-desc-1" key={indexDesc}>
                            <i className="fas fa-circle"></i>
                            <span className="left-text">{desc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="programming-skills">
              {resume?.programmingSkills?.map((skill, indexSkill) => {
                return (
                  <div className="right-object" key={indexSkill}>
                    <div className="right-title">
                      <div className="right-title-1 prog-skill">
                        <i className={skill?.icon}></i>
                        <span className="left-text">
                          {skill?.skill} <span className="left-text-sub"></span>
                        </span>
                      </div>
                      <div className="right-title-2-level">
                        <span
                          className={
                            "right-title-2-level-1 right-title-2-level-1-" +
                            skill?.scale
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="projects">
              {resume?.projects?.map((project, indexProject) => {
                return (
                  <div className="right-object" key={indexProject}>
                    <div className="right-title">
                      {project?.projectTitle?.map((title, indexTitle) => {
                        return (
                          <div className="right-title-1" key={indexTitle}>
                            <i className="fas fa-circle"></i>
                            <span className="left-text">
                              {title?.link?.length > 0 ? (
                                <a
                                  href={title?.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {title?.title}
                                </a>
                              ) : (
                                <>{title?.title}</>
                              )}{" "}
                              <span className="left-text-sub">
                                {title?.subTitle}
                              </span>
                            </span>
                          </div>
                        );
                      })}
                      <div className="right-title-2">
                        {project?.startDate} - {project?.endDate}
                      </div>
                    </div>
                    <div className="right-desc">
                      {project?.description?.map((desc, indexDesc) => {
                        return (
                          <div className="right-desc-1" key={indexDesc}>
                            <i className="fas fa-circle"></i>
                            <span className="left-text">{desc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="certifications">
              {resume?.certifications?.map((certificate, certificateSkill) => {
                return (
                  <div className="right-object" key={certificateSkill}>
                    <div className="right-title">
                      <div className="right-title-1 cerfificate">
                        <i className={certificate?.icon}></i>
                        <span className="left-text">
                          {certificate?.link?.length > 0 ? (
                            <a
                              href={certificate?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {certificate?.title}
                            </a>
                          ) : (
                            <>{certificate?.title}</>
                          )}{" "}
                          <span className="left-text-sub ml-1">
                            {certificate?.from}
                          </span>
                        </span>
                      </div>
                      <div className="right-title-2">{certificate?.date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
