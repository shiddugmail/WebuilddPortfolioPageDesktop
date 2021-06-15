import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(i2601231466600TimelineData);
  }, []);

  return (
    <div className={`i26012314-66600 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-4KxvdI">
        <div className="button-i2601231466-hdozzc valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601231466600TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012314-66600",
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

export default Button8;
