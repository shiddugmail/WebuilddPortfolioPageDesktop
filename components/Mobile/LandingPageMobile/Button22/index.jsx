import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x27320746TimelineData);
  }, []);

  return (
    <div className={`x27320746 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-37nz0S">
        <div className="button-i2732074651-Mmab5X valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27320746TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27320746",
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
