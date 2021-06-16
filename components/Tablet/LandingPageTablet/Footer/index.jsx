import React from "react";
import Group87 from "../Group87";
import "./Footer.css";

function Footer(props) {
  const {
    group85,
    place,
    overlapGroup,
    vector2,
    phone,
    overlapGroup1,
    vector3,
    text42,
    text3,
    contactWebuildCom,
    quickLinks,
    aboutUs,
    projects,
    gallery,
    knowledgeTransfer,
    blogs,
    faqs,
    group87Props,
  } = props;

  return (
    <div className="footer">
      <div className="flex-row-2">
        <img
          className="vector-11"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-148@2x.svg"
        />
        <img className="group-85-1" src={group85} />
        <Group87
          facebookAppSymbolProps={group87Props.facebookAppSymbolProps}
          facebookAppSymbolProps2={group87Props.facebookAppSymbolProps2}
          twitterProps={group87Props.twitterProps}
        />
      </div>
      <div className="flex-row">
        <div className="group-32">
          <div className="place-2 valign-text-middle typographyheadlineh5-extrabold-20">{place}</div>
          <div className="flex-row-4">
            <div className="flex-col-1">
              <div className="map-pin-1">
                <div className="overlap-group2-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img className="vector-12" src={vector2} />
                </div>
              </div>
              <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
              <div className="mail">
                <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <img className="vector-10" src={vector3} />
                </div>
              </div>
            </div>
            <div className="flex-col">
              <p className="text-23 typography-body-smalltext-14-regular">{text42}</p>
              <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">{text3}</div>
              <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">
                {contactWebuildCom}
              </div>
            </div>
          </div>
        </div>
        <div className="group-147">
          <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
          <div className="flex-row-3">
            <div className="about-us valign-text-middle typographybody16-regular">{aboutUs}</div>
            <div className="projects valign-text-middle typographybody16-regular">{projects}</div>
          </div>
          <div className="flex-row-1">
            <div className="gallery valign-text-middle typographybody16-regular">{gallery}</div>
            <div className="knowledge-transfer valign-text-middle typographybody16-regular">{knowledgeTransfer}</div>
          </div>
          <div className="flex-row-1">
            <div className="blogs valign-text-middle typographybody16-regular">{blogs}</div>
            <div className="fa-qs valign-text-middle typographybody16-regular">{faqs}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
