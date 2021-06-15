import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./EstimateNowButton.css";

function EstimateNowButton(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26012333TimelineData);
  }, []);

  return (
    <div className="x26012333 component component-wrapper not-ready">
      <div className="master-button-vdtmmz">
        <div className="button-i2601233351-k5Tboy valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26012333TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26012333",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default EstimateNowButton;
