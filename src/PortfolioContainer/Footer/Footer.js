import React from "react";
import "./Footer.css";

export default function Footer({ links }) {
  return (
    <div className="footer-container">
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../assets/profile/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
      <div className="footer-body">
        <span>Thank You for Visit </span>
        <div className="colz">
          <div className="colz-icon">
            <a
              href={links && links.github ? links.github : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-square"></i>
            </a>
            <a
              href={links && links.linkedin ? links.linkedin : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href={links && links.instagram ? links.instagram : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
