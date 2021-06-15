import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./Group111.css";

function Group111(props) {
  const { basicI2601231166, icons, group69Props, button8Props } = props;

  return (
    <div className="group-111">
      <div className="basic-i2601231166 valign-text-middle typographyheadlineh4-extrabold-24">{basicI2601231166}</div>
      <img className="icons-1" src={icons} />
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button8 className="i26012311-66600">{button8Props.children}</Button8>
    </div>
  );
}

export default Group111;
