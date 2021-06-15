import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1 border-1px-white ${className || ""}`}>
      <div className="text-59 inter-regular-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame1;
