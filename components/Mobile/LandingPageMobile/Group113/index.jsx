import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./Group113.css";

function Group113(props) {
  const { basic, group69Props, buttonProps } = props;

  return (
    <div className="packages-card-3">
      <div className="basic-2 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="luxury">
        <img
          className="vector-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-210@2x.svg"
        />
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button8 className="x2668719">{buttonProps.children}</Button8>
    </div>
  );
}

export default Group113;
