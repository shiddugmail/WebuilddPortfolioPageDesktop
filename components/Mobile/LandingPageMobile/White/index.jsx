import React from "react";
import "./White.css";

function White(props) {
  const { src } = props;

  return (
    <div className="white-1">
      <img className="vector-13" src={src} />
    </div>
  );
}

export default White;
