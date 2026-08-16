import React, { memo } from "react";
import ExternalLink from "../../utils/ExternalLink";
import "./Footer.css";

function Footer({ links }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-body">
        <span>Thank you for visiting · {year}</span>
        <div className="colz">
          <div className="colz-icon">
            <ExternalLink href={links?.github} ariaLabel="GitHub">
              <i className="fab fa-github" aria-hidden="true"></i>
            </ExternalLink>
            <ExternalLink href={links?.linkedin} ariaLabel="LinkedIn">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </ExternalLink>
            <ExternalLink href={links?.instagram} ariaLabel="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
