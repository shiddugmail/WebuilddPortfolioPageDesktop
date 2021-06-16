import React from "react";
import "./Frame122.css";

function Frame122(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1-1 border-1px-white ${className || ""}`}>
      <div className="text-26 inter-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame122;
