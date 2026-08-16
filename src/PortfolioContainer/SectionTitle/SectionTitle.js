import React, { memo } from "react";
import "./SectionTitle.css";

function SectionTitle({ title, subtitle, headingId }) {
  return (
    <div className="title-text">
      <h2 id={headingId}>{title}</h2>
      {subtitle ? <span>{subtitle}</span> : null}
      <div className="title-accent">
        <span></span>
      </div>
    </div>
  );
}

export default memo(SectionTitle);
