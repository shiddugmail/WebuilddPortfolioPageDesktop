import React from "react";
import "./Group102.css";

function Group102(props) {
  const { construction, place } = props;

  return (
    <div className="group-102">
      <div className="group-103">
        <div className="overlap-group1-2">
          <div className="rectangle-46-1"></div>
          <div className="construction overpass-extra-bold-shark-14px">{construction}</div>
        </div>
      </div>
      <div className="place-1 typographybodycaption-14-semi-bold">{place}</div>
    </div>
  );
}

export default Group102;
