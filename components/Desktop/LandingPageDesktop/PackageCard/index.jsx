import React from "react";
import Group69 from "../Group69";
import Button8 from "../Button8";
import "./PackageCard.css";

function PackageCard(props) {
  const { text64, icons, group69Props, button8Props } = props;

  return (
    <div className="package-card">
      <div className="text-24 valign-text-middle typographyheadlineh4-extrabold-24">{text64}</div>
      <div className="icons" style={{ backgroundImage: `url(${icons})` }}></div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default PackageCard;
