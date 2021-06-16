import React from "react";
import Frame122 from "../Frame122";
import "./Group11722.css";

function Group11722(props) {
  const { frame12Props, frame122Props } = props;

  return (
    <div className="group-117">
      <Frame122>{frame12Props.children}</Frame122>
      <Frame122 className="frame-1">{frame122Props.children}</Frame122>
    </div>
  );
}

export default Group11722;
