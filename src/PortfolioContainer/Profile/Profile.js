import React, { memo, useCallback, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import ExternalLink from "../../utils/ExternalLink";
import profilePhoto from "../../assets/profile/profilephoto.jpg";
import "./Profile.css";

function Profile({ profile }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fullName = profile?.fullname || "Rajat Kumar Sharma";
  const skills = profile?.profileSkills?.skills;
  const skillTime = profile?.profileSkills?.skillTime || 1000;

  const typeSequence = useMemo(
    () => (skills || []).flatMap((skill) => [skill, skillTime]),
    [skills, skillTime]
  );

  const scrollToContact = useCallback(() => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  return (
    <header className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <ExternalLink
                href={profile?.links?.github}
                ariaLabel="GitHub"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </ExternalLink>
              <ExternalLink
                href={profile?.links?.linkedin}
                ariaLabel="LinkedIn"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </ExternalLink>
              <ExternalLink
                href={profile?.links?.instagram}
                ariaLabel="Instagram"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </ExternalLink>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">{fullName}</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <span className="sr-only">
                  {skills?.[0] || "Software Engineer"}
                </span>
                {prefersReducedMotion || typeSequence.length === 0 ? (
                  <span aria-hidden="true">
                    {skills?.[0] || "Software Engineer"}
                  </span>
                ) : (
                  <TypeAnimation
                    sequence={typeSequence}
                    repeat={Infinity}
                    wrapper="span"
                    speed={50}
                    aria-hidden="true"
                    style={{ display: "inline-block" }}
                  />
                )}
              </h1>
              <span className="profile-role-tagline">
                {profile?.profileTagline}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              type="button"
              className="btn primary-btn"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
            <a
              className="btn highlighted-btn"
              href="/resume.pdf"
              download="Rajat_Kumar_Sharma_Resume.pdf"
            >
              Get Resume
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <img
            className="profile-picture-background"
            src={profilePhoto}
            alt={`${fullName}, software engineer`}
            width={350}
            height={350}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
}

export default memo(Profile);
