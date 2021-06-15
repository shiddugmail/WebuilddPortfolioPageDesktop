import React from "react";
import "./FounderCard.css";

function FounderCard(props) {
  const { rectangle90, name, designation } = props;

  return (
    <div className="founder-card">
      <img className="rectangle-90" src={rectangle90} />
      <div className="group-99">
        <div className="name valign-text-middle typographyheadlineh4-extrabold-24">{name}</div>
        <div className="designation typography-body-smalltext-14-regular">{designation}</div>
      </div>
    </div>
  );
}

export default FounderCard;
