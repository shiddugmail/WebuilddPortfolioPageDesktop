import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./EstimateNowButton.css";

function EstimateNowButton(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26013220TimelineData);
  }, []);

  return (
    <div className="x26013220 component component-wrapper not-ready">
      <div className="master-button-8PZClG">
        <div className="button-i2601322051-Sid1RS valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26013220TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26013220",
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
