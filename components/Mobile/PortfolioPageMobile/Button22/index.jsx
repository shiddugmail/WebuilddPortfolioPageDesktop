import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27320769TimelineData);
  }, []);

  return (
    <div className="x27320769 component component-wrapper not-ready">
      <div className="master-button-A5N4Z6">
        <div className="button-i2732076951-Zn9NwL valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27320769TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27320769",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
