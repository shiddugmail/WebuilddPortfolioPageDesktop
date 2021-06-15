import React from "react";
import "./White.css";

function White(props) {
  const { src } = props;

  return (
    <div className="white">
      <img className="vector-44" src={src} />
    </div>
  );
}

export default White;
