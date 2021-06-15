import React from "react";
import "./Group99.css";

function Group99(props) {
  const { text1, surname, className } = props;

  return (
    <div className={`group-99 ${className || ""}`}>
      <div className="text-11 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
      <p className="surname typography-body-smalltext-14-regular">{surname}</p>
    </div>
  );
}

export default Group99;
