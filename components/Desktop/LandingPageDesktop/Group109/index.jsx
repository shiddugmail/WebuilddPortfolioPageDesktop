import React from "react";
import "./Group109.css";

function Group109(props) {
  const { ourProjects, text21, className } = props;

  return (
    <div className={`group-109 ${className || ""}`}>
      <div className="our-projects valign-text-middle typographyheadlineh2-extrabold-40">{ourProjects}</div>
      <p className="text-10 valign-text-middle typographybody16-regular">{text21}</p>
    </div>
  );
}

export default Group109;
