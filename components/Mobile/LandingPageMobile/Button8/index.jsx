import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x2668602TimelineData);
  }, []);

  return (
    <div className={`x2668602 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-pOdK04">
        <div className="button-i266860251-RsTw5N valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2668602TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x2668602",
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
