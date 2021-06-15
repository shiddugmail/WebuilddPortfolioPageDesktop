import React from "react";
import "./Frame29.css";

function Frame29(props) {
  const { text9, spanText, spanText2, spanText3, spanText4, spanText5 } = props;

  return (
    <div className="frame-29-1">
      <div className="text-4 valign-text-middle typographyheadlineh4-extrabold-24">{text9}</div>
      <p className="text-5 typography-body-smalltext-14-regular">
        <span className="span typography-body-smalltext-14-regular">{spanText}</span>
        <span className="span-1 typography-body-smalltext-14-regular">{spanText2}</span>
        <span className="span2-1 typographybodycaption-14-semi-bold">{spanText3}</span>
        <span className="span-1 typography-body-smalltext-14-regular">{spanText4}</span>
        <span className="span typography-body-smalltext-14-regular">{spanText5}</span>
      </p>
    </div>
  );
}

export default Frame29;
