import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26013224TimelineData);
  }, []);

  return (
    <div className="x26013224 component component-wrapper not-ready">
      <div className="master-button-KTVw70">
        <div className="button-i2601322451-i3uVbP valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26013224TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x26013224",
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
