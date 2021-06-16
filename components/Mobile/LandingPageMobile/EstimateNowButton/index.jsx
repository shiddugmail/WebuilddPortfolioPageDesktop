import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./EstimateNowButton.css";

function EstimateNowButton(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x2668831TimelineData);
  }, []);

  return (
    <div className="x2668831 component component-wrapper not-ready">
      <div className="master-button-KRtkKN">
        <div className="button-i266883151-zXi8Hy valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2668831TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x2668831",
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
