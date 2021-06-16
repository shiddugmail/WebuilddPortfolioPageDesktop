import React from "react";
import "./Group137.css";

function Group137(props) {
  const { rectangle62, text111, surname, className } = props;

  return (
    <div className={`group-137 ${className || ""}`}>
      <img className="rectangle-62-2" src={rectangle62} />
      <div className="group-99-2">
        <div className="text-15 valign-text-middle typographyheadlineh4-extrabold-24">{text111}</div>
        <p className="surname-2 typography-body-smalltext-14-regular">{surname}</p>
      </div>
    </div>
  );
}

export default Group137;
