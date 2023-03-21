import React from "react";
import "./Footer.css";

export default function Footer({ links }) {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <span>Thank You for Visit </span>
        <div className="colz">
          <div className="colz-icon">
            <a
              href={links && links.github ? links.github : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={links && links.linkedin ? links.linkedin : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={links && links.instagram ? links.instagram : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
