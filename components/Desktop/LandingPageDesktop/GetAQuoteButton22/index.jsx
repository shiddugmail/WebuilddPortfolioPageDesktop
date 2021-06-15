import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton22.css";

function GetAQuoteButton22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x2607547TimelineData);
  }, []);

  return (
    <div className="x2607547 animate-enter2 component component-wrapper not-ready">
      <div className="master-button-0sW4MC">
        <div className="button-i260754751-V82dLG valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2607547TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x2607547",
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

export default GetAQuoteButton22;
