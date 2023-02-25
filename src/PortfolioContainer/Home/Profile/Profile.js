import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  function scrollToContact() {
    document.getElementById("contact-form").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/rajatrjsharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rajatrjsharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.instagram.com/rj_rajatsharma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Rajat Kumar Sharma</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Angular Dev",
                    1000,
                    "Play Framework",
                    1000,
                    "React Dev",
                    1000,
                    "Spring Boot",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={scrollToContact}>
              {""}
              Contact Me
            </button>
            <a
              href="resume.pdf"
              rel="noopener noreferrer"
              download="Rajat Kumar Sharma Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
