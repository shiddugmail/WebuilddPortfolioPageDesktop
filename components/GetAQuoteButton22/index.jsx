import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton22.css";

function GetAQuoteButton22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601262064120TimelineData);
  }, []);

  return (
    <div className="i26012620-64120 component component-wrapper not-ready">
      <div className="master-button-wjSZMx">
        <div className="button-i2601262064-j1nusJ valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601262064120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012620-64120",
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
