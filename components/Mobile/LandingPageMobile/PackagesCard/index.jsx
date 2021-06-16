import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./PackagesCard.css";

function PackagesCard(props) {
  const { basic, group69Props, buttonProps } = props;

  return (
    <div className="packages-card">
      <div className="basic-1 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="basic">
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-201@2x.svg"
        />
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button8>{buttonProps.children}</Button8>
    </div>
  );
}

export default PackagesCard;
