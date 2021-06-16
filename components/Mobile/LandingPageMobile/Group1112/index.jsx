import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./Group1112.css";

function Group1112(props) {
  const { place, overlapGroup4, group69Props, buttonProps } = props;

  return (
    <div className="packages-card-1">
      <div className="place-1 valign-text-middle typographyheadlineh4-extrabold-24">{place}</div>
      <div className="standard">
        <div className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-203@2x.svg"
          />
        </div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button8 className="x2668641">{buttonProps.children}</Button8>
    </div>
  );
}

export default Group1112;
