import React from "react";
import Group99 from "../Group99";
import "./ProjectCard3.css";

function ProjectCard3(props) {
  const { rectangle62, group99Props } = props;

  return (
    <div className="project-card">
      <img className="rectangle-62" src={rectangle62} />
      <Group99 text1={group99Props.text1} surname={group99Props.surname} />
    </div>
  );
}

export default ProjectCard3;
