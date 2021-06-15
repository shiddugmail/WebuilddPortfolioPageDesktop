import React from "react";
import "./Frame138.css";

function Frame138(props) {
  const { place, living } = props;

  return (
    <div className="frame-138">
      <div className="place typographybodycaption-14-semi-bold">{place}</div>
      <div className="living typographybodycaption-14-semi-bold">{living}</div>
    </div>
  );
}

export default Frame138;
