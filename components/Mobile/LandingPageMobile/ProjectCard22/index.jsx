import React from "react";
import "./ProjectCard22.css";

function ProjectCard22(props) {
  const { rectangle62, text77, surname, className } = props;

  return (
    <div className={`project-card ${className || ""}`}>
      <img className="rectangle-62" src={rectangle62} />
      <div className="group-99">
        <div className="text-10 valign-text-middle typographyheadlineh4-extrabold-24">{text77}</div>
        <p className="surname typography-body-smalltext-14-regular">{surname}</p>
      </div>
    </div>
  );
}

export default ProjectCard22;
