import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile({ profile }) {
  function scrollToContact() {
    document.getElementById("contact-form").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="profile-container mt-3">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href={profile?.links?.github ? profile.links.github : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={profile?.links?.linkedin ? profile.links.linkedin : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={profile?.links?.instagram ? profile.links.instagram : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">
                {profile?.fullname ? profile.fullname : "Rajat Kumar Sharma"}
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={profile?.profileSkills?.skills
                    .join(`,${profile?.profileSkills?.skillTime},`)
                    .split(",")
                    .map((value) => (+value ? +value : value))}
                />
              </h1>
              <span className="profile-role-tagline">
                {profile?.profileTagline}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={scrollToContact}>
              Contact Me
            </button>
            <a
              href="resume.pdf"
              rel="noopener noreferrer"
              download="Rajat_Kumar_Sharma_Resume.pdf"
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
