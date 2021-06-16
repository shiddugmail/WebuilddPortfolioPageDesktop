import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton2.css";

function GetAQuoteButton2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26013033TimelineData);
  }, []);

  return (
    <div className="x26013033 component component-wrapper not-ready">
      <div className="master-button-Y0gomr">
        <div className="button-i2601303351-0VL8Sj valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26013033TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26013033",
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

export default GetAQuoteButton2;
