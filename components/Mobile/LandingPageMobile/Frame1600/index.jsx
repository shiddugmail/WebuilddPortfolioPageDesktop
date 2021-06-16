import React from "react";
import Group129 from "../Group129";
import GetAQuoteButton2 from "../GetAQuoteButton2";
import Frame1613 from "../Frame1613";
import Button22 from "../Button22";
import PackagesCard from "../PackagesCard";
import Group1112 from "../Group1112";
import Group112 from "../Group112";
import Group113 from "../Group113";
import Group11422 from "../Group11422";
import EstimateNowButton from "../EstimateNowButton";
import Group11722 from "../Group11722";
import Group8622 from "../Group8622";
import Group32 from "../Group32";
import Frame5 from "../Frame5";
import Group87 from "../Group87";
import Frame145 from "../Frame145";
import "./Frame1600.css";

function Frame1600(props) {
  const {
    line4,
    line5,
    line6,
    line7,
    line8,
    rectangle72,
    text1,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    rectangle73,
    text3,
    text4,
    rectangle70,
    text5,
    text6,
    text7,
    whyWebuild,
    rectangle69,
    spanText6,
    spanText7,
    spanText8,
    text9,
    ourProjects,
    text22,
    text23,
    packages,
    costEstimatorBg,
    testimonials,
    text24,
    text19,
    ellipse1,
    name,
    bangaloreIndia,
    image3,
    image4,
    image5,
    getAQuoteButton2Props,
    frame1613Props,
    button22Props,
    packagesCardProps,
    group1112Props,
    group112Props,
    group113Props,
    group11422Props,
    estimateNowButtonProps,
    group11722Props,
    group8622Props,
    group32Props,
    frame5Props,
    group87Props,
    frame145Props,
  } = props;

  return (
    <div className="frame-1600">
      <div className="overlap-group">
        <div className="group-89">
          <img className="line-4" src={line4} />
          <img className="line-" src={line5} />
          <img className="line-" src={line6} />
          <img className="line-" src={line7} />
          <img className="line-" src={line8} />
        </div>
        <img className="rectangle-72" src={rectangle72} />
        <div className="text-1 valign-text-middle typographyheadlineh5-extrabold-20">{text1}</div>
        <p className="text-2 typographybodysmall-12-regular">
          <span className="span typographybodysmall-12-regular">{spanText}</span>
          <span className="span-1 typographybodysmall-12-regular">{spanText2}</span>
          <span className="span2-1 overpass-semi-bold-mahogany-12px">{spanText3}</span>
          <span className="span-1 typographybodysmall-12-regular">{spanText4}</span>
          <span className="span typographybodysmall-12-regular">{spanText5}</span>
        </p>
        <img className="rectangle-73" src={rectangle73} />
        <div className="text-3 valign-text-middle typographyheadlineh4-extrabold-24">{text3}</div>
        <p className="text-4 typographybodysmall-12-regular">{text4}</p>
        <img className="rectangle-70" src={rectangle70} />
        <div className="text-5 valign-text-middle typographyheadlineh4-extrabold-24">{text5}</div>
        <p className="text-6 typographybodysmall-12-regular">{text6}</p>
        <p className="text-7 typography-body-smalltext-14-regular">{text7}</p>
        <div className="why-webuild valign-text-middle typographyheadlineh4-extrabold-24">{whyWebuild}</div>
        <img className="rectangle-69" src={rectangle69} />
        <Group129 />
        <p className="text-8 valign-text-middle overpass-semi-bold-white-16px2">
          <span>
            <span className="span0 overpass-semi-bold-white-16px-22">{spanText6}</span>
            <span className="span1 overpass-semi-bold-white-32px">{spanText7}</span>
            <span className="span2 overpass-extra-bold-mahogany-40px">{spanText8}</span>
          </span>
        </p>
        <p className="text-9 typography-body-smalltext-14-regular">{text9}</p>
        <GetAQuoteButton2>{getAQuoteButton2Props.children}</GetAQuoteButton2>
        <div className="group-210">
          <div className="our-projects valign-text-middle typographyheadlineh4-extrabold-24">{ourProjects}</div>
          <p className="text-22 typography-body-smalltext-14-regular">{text22}</p>
          <Frame1613 {...frame1613Props} />
          <div className="overlap-group1">
            <Button22 className="x2668590">{button22Props.children}</Button22>
            <div className="rectangle-71"></div>
            <PackagesCard
              basic={packagesCardProps.basic}
              group69Props={packagesCardProps.group69Props}
              buttonProps={packagesCardProps.buttonProps}
            />
            <Group1112
              place={group1112Props.place}
              overlapGroup4={group1112Props.overlapGroup4}
              group69Props={group1112Props.group69Props}
              buttonProps={group1112Props.buttonProps}
            />
            <Group112 {...group112Props} />
            <Group113
              basic={group113Props.basic}
              group69Props={group113Props.group69Props}
              buttonProps={group113Props.buttonProps}
            />
            <p className="text-23 typographybody16-regular">{text23}</p>
            <div className="packages valign-text-middle typographyheadlineh4-extrabold-24">{packages}</div>
            <img className="cost-estimator-bg" src={costEstimatorBg} />
            <Group11422 costEstimator={group11422Props.costEstimator} text93={group11422Props.text93} />
            <EstimateNowButton>{estimateNowButtonProps.children}</EstimateNowButton>
            <Group11722 frame12Props={group11722Props.frame12Props} frame122Props={group11722Props.frame122Props} />
          </div>
          <div className="testimonials valign-text-middle typographyheadlineh4-extrabold-24">{testimonials}</div>
          <p className="text-24 typographybody16-regular">{text24}</p>
          <div className="group-27">
            <div className="overlap-group4">
              <p className="text-19 typographybodysmall-12-regular">{text19}</p>
              <div className="group-120">
                <img className="ellipse-1" src={ellipse1} />
                <div className="group-140">
                  <div className="name valign-text-middle typographyheadlineh5-extrabold-20">{name}</div>
                  <div className="bangalore-india valign-text-middle typographybodysmall-12-regular">
                    {bangaloreIndia}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Group129 className="group-141" />
          <div className="overlap-group2">
            <div className="rectangle-74"></div>
            <img className="image-3" src={image3} />
            <img className="image-4" src={image4} />
            <img className="image-5" src={image5} />
            <div className="rectangle-67"></div>
            <Group8622 group85={group8622Props.group85} />
            <Group32 {...group32Props} />
            <Frame5
              quickLinks={frame5Props.quickLinks}
              frame140Props={frame5Props.frame140Props}
              frame1402Props={frame5Props.frame1402Props}
              frame1403Props={frame5Props.frame1403Props}
            />
            <Group87
              facebookAppSymbolProps={group87Props.facebookAppSymbolProps}
              facebookAppSymbolProps2={group87Props.facebookAppSymbolProps2}
              twitterProps={group87Props.twitterProps}
            />
          </div>
        </div>
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
      </div>
    </div>
  );
}

export default Frame1600;
