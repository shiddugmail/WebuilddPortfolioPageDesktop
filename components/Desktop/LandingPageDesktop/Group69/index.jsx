import React from "react";
import "./Group69.css";

function Group69(props) {
  const { number, text4, className } = props;

  return (
    <div className={`group-69 ${className || ""}`}>
      <div className="number valign-text-middle typographyheadlineh2-extrabold-40">{number}</div>
      <div className="text-25 valign-text-middle typographybody16-regular">{text4}</div>
    </div>
  );
}

export default Group69;
