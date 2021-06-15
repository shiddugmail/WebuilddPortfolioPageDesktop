import React from "react";
import "./FounderCard32.css";

function FounderCard32(props) {
  const { rectangle90, name, designation } = props;

  return (
    <div className="founder-card-2">
      <img className="rectangle-90-2" src={rectangle90} />
      <div className="group-99-2">
        <div className="name-2 valign-text-middle typographyheadlineh4-extrabold-24">{name}</div>
        <div className="designation-2 typography-body-smalltext-14-regular">{designation}</div>
      </div>
    </div>
  );
}

export default FounderCard32;
