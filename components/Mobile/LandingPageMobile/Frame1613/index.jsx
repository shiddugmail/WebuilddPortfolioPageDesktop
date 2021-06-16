import React from "react";
import Group139 from "../Group139";
import Frame138 from "../Frame138";
import ProjectCard22 from "../ProjectCard22";
import Button22 from "../Button22";
import "./Frame1613.css";

function Frame1613(props) {
  const {
    apartments,
    buildiings,
    group139Props,
    frame138Props,
    projectCard22Props,
    projectCard222Props,
    projectCard223Props,
    projectCard224Props,
    projectCard225Props,
    projectCard226Props,
    projectCard227Props,
    projectCard228Props,
    projectCard229Props,
    button22Props,
  } = props;

  return (
    <div className="frame-1613">
      <div className="frame-1612">
        <div className="flex-row">
          <Group139>{group139Props.children}</Group139>
          <div className="apartments typographybodycaption-14-semi-bold">{apartments}</div>
          <div className="buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
        </div>
        <Frame138 place={frame138Props.place} living={frame138Props.living} />
      </div>
      <div className="frame-1611">
        <ProjectCard22
          rectangle62={projectCard22Props.rectangle62}
          text77={projectCard22Props.text77}
          surname={projectCard22Props.surname}
        />
        <ProjectCard22
          rectangle62={projectCard222Props.rectangle62}
          text77={projectCard222Props.text77}
          surname={projectCard222Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard223Props.rectangle62}
          text77={projectCard223Props.text77}
          surname={projectCard223Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard224Props.rectangle62}
          text77={projectCard224Props.text77}
          surname={projectCard224Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard225Props.rectangle62}
          text77={projectCard225Props.text77}
          surname={projectCard225Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard226Props.rectangle62}
          text77={projectCard226Props.text77}
          surname={projectCard226Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard227Props.rectangle62}
          text77={projectCard227Props.text77}
          surname={projectCard227Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard228Props.rectangle62}
          text77={projectCard228Props.text77}
          surname={projectCard228Props.surname}
          className="project-card-1"
        />
        <ProjectCard22
          rectangle62={projectCard229Props.rectangle62}
          text77={projectCard229Props.text77}
          surname={projectCard229Props.surname}
          className="project-card-1"
        />
      </div>
      <Button22>{button22Props.children}</Button22>
    </div>
  );
}

export default Frame1613;
