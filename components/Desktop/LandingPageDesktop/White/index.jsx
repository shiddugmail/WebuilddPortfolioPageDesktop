import React from "react";
import "./White.css";

function White(props) {
  const { src, className } = props;

  return (
    <div className={`white ${className || ""}`}>
      <img className="vector" src={src} />
    </div>
  );
}

export default White;
