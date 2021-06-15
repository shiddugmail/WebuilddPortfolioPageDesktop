import React from "react";
import "./Instagram.css";

function Instagram(props) {
  const { instagram, vector2 } = props;

  return (
    <div className="instagram" style={{ backgroundImage: `url(${instagram})` }}>
      <div className="overlap-group-1">
        <img
          className="vector-49"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg"
        />
        <img className="vector-48" src={vector2} />
      </div>
    </div>
  );
}

export default Instagram;
