import React from "react";
import "./Group89.css";

function Group89(props) {
  const { line4, line5, line6, line7, line8 } = props;

  return (
    <div className="group-89">
      <img className="line-4" src={line4} />
      <img className="line-" src={line5} />
      <img className="line-" src={line6} />
      <img className="line-" src={line7} />
      <img className="line-8" src={line8} />
    </div>
  );
}

export default Group89;
