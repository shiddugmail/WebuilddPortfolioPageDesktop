import React from "react";
import "./Group324.css";

function Group324(props) {
  const { overlapGroup1, text7, vector2, text8, overlapGroup12, vector3, text9 } = props;

  return (
    <div className="group-32">
      <div className="group-189">
        <div className="map-pin-1">
          <div className="overlap-group1-6" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img
              className="vector-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-167@2x.svg"
            />
          </div>
        </div>
        <p className="text-26 typographybody16-regular">{text7}</p>
      </div>
      <div className="group-18">
        <div className="phone">
          <img className="vector-5" src={vector2} />
        </div>
        <div className="text-2-1 valign-text-middle typographybody16-regular">{text8}</div>
      </div>
      <div className="group-18">
        <div className="mail">
          <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup12})` }}>
            <img className="vector-4" src={vector3} />
          </div>
        </div>
        <div className="text-2-1 valign-text-middle typographybody16-regular">{text9}</div>
      </div>
    </div>
  );
}

export default Group324;
