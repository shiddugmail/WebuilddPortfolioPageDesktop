import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x2607791TimelineData);
  }, []);

  return (
    <div className="x2607791 component component-wrapper not-ready">
      <div className="master-button-gAXIb9">
        <div className="button-i260779151-GqONSi valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2607791TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x2607791",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
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
        overrides: {},
      },
    },
  },
];

export default Button22;
