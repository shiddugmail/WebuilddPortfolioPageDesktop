import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton2.css";

function GetAQuoteButton2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x2668579TimelineData);
  }, []);

  return (
    <div className="x2668579 component component-wrapper not-ready">
      <div className="master-button-OkO4H7">
        <div className="button-i266857951-MlNlfQ valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2668579TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x2668579",
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

export default GetAQuoteButton2;
