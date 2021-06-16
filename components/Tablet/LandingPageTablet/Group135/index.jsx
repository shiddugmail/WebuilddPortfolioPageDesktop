import React from "react";
import "./Group135.css";

function Group135(props) {
  const { rectangle62, text108, surname, className } = props;

  return (
    <div className={`group-135 ${className || ""}`}>
      <img className="rectangle-62-1" src={rectangle62} />
      <div className="group-99-1">
        <div className="text-12 valign-text-middle typographyheadlineh4-extrabold-24">{text108}</div>
        <p className="surname-1 typography-body-smalltext-14-regular">{surname}</p>
      </div>
    </div>
  );
}

export default Group135;
