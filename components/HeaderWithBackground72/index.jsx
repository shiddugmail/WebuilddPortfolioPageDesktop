import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./HeaderWithBackground72.css";

function HeaderWithBackground72(props) {
  const {
    unselectedI2601262,
    unselectedI26012622,
    text1,
    unselectedI26012623,
    unselectedI26012624,
    unselectedI26012625,
    unselectedI26012626,
    unselectedI26012627,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2601262-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601262}
          </div>
          <div className="unselected-i2601262-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012622}
          </div>
          <div className="selected">
            <div className="overlap-group">
              <div className="rectangle-61"></div>
              <div className="text-1 valign-text-middle">{text1}</div>
            </div>
          </div>
          <div className="unselected-i2601262-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012623}
          </div>
          <div className="unselected-i2601262-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012624}
          </div>
          <div className="unselected-i2601262 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012625}
          </div>
          <div className="unselected-i2601262-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012626}
          </div>
          <div className="unselected-i2601262-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012627}
          </div>
        </div>
        <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
      </div>
    </div>
  );
}

export default HeaderWithBackground72;
