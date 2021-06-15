import React from "react";
import Group139 from "../Group139";
import "./Group104.css";

function Group104(props) {
  const { apartments, buildiings, place, living, group139Props } = props;

  return (
    <div className="group-104">
      <Group139>{group139Props.children}</Group139>
      <div className="apartments typographybodycaption-14-semi-bold">{apartments}</div>
      <div className="buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
      <div className="lpd-place typographybodycaption-14-semi-bold">{place}</div>
      <div className="living typographybodycaption-14-semi-bold">{living}</div>
    </div>
  );
}

export default Group104;
