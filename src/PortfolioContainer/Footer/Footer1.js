import React from "react";
import "./Footer1.css";

export default function Footer1() {
  return (
    <div className="footer11-container">
      <div className="footer1-container">
        <div className="footer1-parent">
          <img
            src={require("../../assets/Home/shape-bg.png")}
            alt="no internet connection"
          />
        </div>
      </div>
      <div className="footer11-body">
        <span>Thank You for Visit </span>
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
      </div>
    </div>
  );
}
