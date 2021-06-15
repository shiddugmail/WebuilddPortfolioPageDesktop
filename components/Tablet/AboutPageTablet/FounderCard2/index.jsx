import React from "react";
import "./FounderCard2.css";

function FounderCard2(props) {
  const { rectangle90, name, designation } = props;

  return (
    <div className="founder-card-1">
      <img className="rectangle-90-1" src={rectangle90} />
      <div className="group-99-1">
        <div className="name-1 valign-text-middle typographyheadlineh4-extrabold-24">{name}</div>
        <div className="designation-1 typography-body-smalltext-14-regular">{designation}</div>
      </div>
    </div>
  );
}

export default FounderCard2;
