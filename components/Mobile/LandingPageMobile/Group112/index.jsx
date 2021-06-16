import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./Group112.css";

function Group112(props) {
  const { premium, group, vector2, vector3, vector4, group2, group69Props, buttonProps } = props;

  return (
    <div className="packages-card-2">
      <div className="premium-1 valign-text-middle typographyheadlineh4-extrabold-24">{premium}</div>
      <div className="premium">
        <div className="overlap-group3-2">
          <div className="group" style={{ backgroundImage: `url(${group})` }}></div>
          <img
            className="vector-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-81@2x.svg"
          />
          <img className="vector-3" src={vector2} />
          <img className="vector-2" src={vector3} />
          <img className="vector-4" src={vector4} />
          <div className="group-1" style={{ backgroundImage: `url(${group2})` }}></div>
        </div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button8 className="x2668680">{buttonProps.children}</Button8>
    </div>
  );
}

export default Group112;
