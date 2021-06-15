import React from "react";
import "./FounderCard4.css";

function FounderCard4(props) {
  const { rectangle90, name, designation } = props;

  return (
    <div className="founder-card-3">
      <img className="rectangle-90-3" src={rectangle90} />
      <div className="group-99-3">
        <div className="name-3 valign-text-middle typographyheadlineh4-extrabold-24">{name}</div>
        <div className="designation-3 typography-body-smalltext-14-regular">{designation}</div>
      </div>
    </div>
  );
}

export default FounderCard4;
