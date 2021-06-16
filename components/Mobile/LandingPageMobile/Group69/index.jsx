import React from "react";
import "./Group69.css";

function Group69(props) {
  const { number, text4, className } = props;

  return (
    <div className={`group-69 ${className || ""}`}>
      <h1 className="number valign-text-middle typographyheadlineh2-extrabold-40">{number}</h1>
      <div className="rs-sft valign-text-middle typographybody16-regular">{text4}</div>
    </div>
  );
}

export default Group69;
