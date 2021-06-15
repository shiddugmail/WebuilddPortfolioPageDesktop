import React from "react";
import Frame1 from "../Frame1";
import "./Group117.css";

function Group117(props) {
  const { frame1Props, frame12Props } = props;

  return (
    <div className="group-117">
      <Frame1>{frame1Props.children}</Frame1>
      <Frame1 className="frame-1-1">{frame12Props.children}</Frame1>
    </div>
  );
}

export default Group117;
