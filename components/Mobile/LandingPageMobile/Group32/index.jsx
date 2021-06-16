import React from "react";
import "./Group32.css";

function Group32(props) {
  const { place, overlapGroup42, phone, overlapGroup5, vector2, text21, text20, contactWebuildCom } = props;

  return (
    <div className="group-32">
      <div className="place-2 valign-text-middle typographyheadlineh5-extrabold-20">{place}</div>
      <div className="flex-row-1">
        <div className="flex-col-1">
          <div className="map-pin-1">
            <div className="overlap-group3-3" style={{ backgroundImage: `url(${overlapGroup42})` }}>
              <img
                className="vector-9"
                src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-213@2x.svg"
              />
            </div>
          </div>
          <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
          <div className="mail">
            <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
              <img className="vector-8" src={vector2} />
            </div>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-21 typography-body-smalltext-14-regular">{text21}</p>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">{text20}</div>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">
            {contactWebuildCom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group32;
