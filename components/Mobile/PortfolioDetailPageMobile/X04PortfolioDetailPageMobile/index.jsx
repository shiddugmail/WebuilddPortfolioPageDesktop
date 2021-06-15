import React from "react";
import Frame145 from "../Frame145";
import Button22 from "../Button22";
import Group212 from "../Group212";
import "./X04PortfolioDetailPageMobile.css";

function X04PortfolioDetailPageMobile(props) {
  const {
    title,
    rectangle76,
    text1,
    rectangle91,
    rectangle92,
    rectangle93,
    rectangle94,
    rectangle95,
    rectangle96,
    biGrid3X2Gap,
    previous,
    projectName,
    next,
    projectName2,
    frame145Props,
    button22Props,
    group212Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x04-portfolio-detail-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="title-pdpm valign-text-middle typographyheadlineh4-extrabold-24">{title}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <p className="projdetails typography-body-smalltext-14-regular">{text1}</p>
        <div className="frame-1615">
          <img className="rectangle-91" src={rectangle91} />
          <img className="rectangle-9" src={rectangle92} />
          <img className="rectangle-9" src={rectangle93} />
          <img className="rectangle-9" src={rectangle94} />
          <img className="rectangle-9" src={rectangle95} />
          <img className="rectangle-9" src={rectangle96} />
          <div className="frame-1623">
            <Button22>{button22Props.children}</Button22>
            <div className="frame-1622">
              <img className="bigrid-3x2-gap" src={biGrid3X2Gap} />
              <div className="frame-18">
                <div className="previous valign-text-bottom typographyheadlineh5-extrabold-20">{previous}</div>
                <div className="project-name valign-text-bottom typographyheadlineh5-extrabold-20">{projectName}</div>
              </div>
              <div className="frame-18">
                <div className="next valign-text-bottom typographyheadlineh5-extrabold-20">{next}</div>
                <div className="project-name valign-text-bottom typographyheadlineh5-extrabold-20">{projectName2}</div>
              </div>
            </div>
          </div>
        </div>
        <Group212
          group862Props={group212Props.group862Props}
          group87Props={group212Props.group87Props}
          group862Props2={group212Props.group862Props2}
          frame5Props={group212Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X04PortfolioDetailPageMobile;
