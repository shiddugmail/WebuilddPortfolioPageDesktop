import React from "react";
import "./Group2722.css";

function Group2722(props) {
  const { text120, ellipse1, name, bangaloreIndia, className } = props;

  return (
    <div className={`group-27 ${className || ""}`}>
      <div className="overlap-group2-3">
        <p className="text-24 typographybodysmall-12-regular">{text120}</p>
        <div className="group-120">
          <img className="ellipse-1" src={ellipse1} />
          <div className="group-140">
            <div className="name valign-text-middle typographyheadlineh5-extrabold-20">{name}</div>
            <div className="bangalore-india valign-text-middle typographybodysmall-12-regular">{bangaloreIndia}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group2722;
