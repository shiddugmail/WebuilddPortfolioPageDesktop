import React from "react";
import Group89 from "../Group89";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import Frame29 from "../Frame29";
import Frame292 from "../Frame292";
import Frame293 from "../Frame293";
import Group109 from "../Group109";
import Group104 from "../Group104";
import ProjectCard3 from "../ProjectCard3";
import Button22 from "../Button22";
import Group102 from "../Group102";
import PackageCard from "../PackageCard";
import Group111 from "../Group111";
import Group273 from "../Group273";
import Group129 from "../Group129";
import Group114 from "../Group114";
import EstimateNowButton from "../EstimateNowButton";
import Group117 from "../Group117";
import Group156 from "../Group156";
import Group1292 from "../Group1292";
import HeaderWithBackground9 from "../HeaderWithBackground9";
import Footer2 from "../Footer2";
import "./X01LandingPageDesktop.css";

function X01LandingPageDesktop(props) {
  const {
    rectangle2,
    spanText,
    spanText2,
    spanText3,
    text42,
    whyWebuild,
    text43,
    building,
    rectangle49,
    plan,
    rectangle48,
    blueprint,
    rectangle50,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
    frame51,
    frame52,
    frame53,
    frame54,
    frame55,
    frame56,
    frame57,
    frame58,
    frame59,
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
    frame66,
    frame67,
    frame68,
    frame69,
    frame70,
    frame71,
    frame72,
    frame73,
    frame74,
    frame75,
    frame76,
    frame77,
    frame78,
    frame79,
    frame80,
    frame81,
    costEstimatorBg,
    group89Props,
    getAQuoteButton2Props,
    frame29Props,
    frame292Props,
    frame293Props,
    group109Props,
    group104Props,
    projectCard3Props,
    projectCard32Props,
    projectCard33Props,
    projectCard34Props,
    projectCard35Props,
    projectCard36Props,
    projectCard37Props,
    projectCard38Props,
    projectCard39Props,
    button22Props,
    group1092Props,
    group102Props,
    packageCardProps,
    group111Props,
    group1112Props,
    group1113Props,
    group1093Props,
    group273Props,
    group2732Props,
    group114Props,
    estimateNowButtonProps,
    group117Props,
    group156Props,
    headerWithBackground9Props,
    footer2Props,
  } = props;

  return (
    <div className="lpd-container-center-horizontal">
      <div className="lpd-x01-landing-page-desktop screen">
        <div className="lpd-frame-1570">
          <div className="lpd-overlap-group">
            <Group89
              line4={group89Props.line4}
              line5={group89Props.line5}
              line6={group89Props.line6}
              line7={group89Props.line7}
              line8={group89Props.line8}
            />
            <div className="lpd-rectangle-65"></div>
            <div className="lpd-rectangle-66"></div>
            <div className="lpd-group-130">
              <div className="lpd-overlap-group1">
                <div className="lpd-group-37">
                  <div className="lpd-overlap-group2">
                    <img className="lpd-rectangle-2 animate-enter" src={rectangle2} />
                    <div className="lpd-frame-16">
                      <div className="lpd-text-1 valign-text-middle animate-enter1">
                        <span>
                          <span className="lpd-span0 overpass-semi-bold-white-32px">{spanText}</span>
                          <span className="lpd-span1 overpass-semi-bold-white-32px">{spanText2}</span>
                          <span className="lpd-span2 ">{spanText3}</span>
                        </span>
                      </div>
                      <p className="lpd-text-2 typographybody16-regular">{text42}</p>
                      <GetAQuoteButton22>{getAQuoteButton2Props.children}</GetAQuoteButton22>
                    </div>
                  </div>
                </div>
                <div className="lpd-header"></div>
              </div>
            </div>
            <div className="lpd-group-108">
              <h1 className="lpd-title valign-text-middle typographyheadlineh2-extrabold-40">{whyWebuild}</h1>
              <p className="lpd-text-3 typographybody16-regular">{text43}</p>
              <div className="lpd-group-107">
                <div className="lpd-flex-col">
                  <div className="lpd-frame-28">
                    <img className="lpd-building" src={building} />
                    <Frame29
                      text9={frame29Props.text9}
                      spanText={frame29Props.spanText}
                      spanText2={frame29Props.spanText2}
                      spanText3={frame29Props.spanText3}
                      spanText4={frame29Props.spanText4}
                      spanText5={frame29Props.spanText5}
                    />
                  </div>
                  <img className="lpd-rectangle-" src={rectangle49} />
                  <div className="lpd-frame-30">
                    <img className="lpd-plan" src={plan} />
                    <Frame292 text13={frame292Props.text13} text14={frame292Props.text14} />
                  </div>
                </div>
                <div className="lpd-flex-col">
                  <img className="lpd-rectangle-" src={rectangle48} />
                  <div className="lpd-frame-29">
                    <img className="blueprint" src={blueprint} />
                    <Frame293 text11={frame293Props.text11} text12={frame293Props.text12} />
                  </div>
                  <img className="lpd-rectangle-" src={rectangle50} />
                </div>
              </div>
            </div>
            {/* <Group109 ourProjects={group109Props.ourProjects} text21={group109Props.text21} /> */}
            <Group104
              apartments={group104Props.apartments}
              buildiings={group104Props.buildiings}
              place={group104Props.place}
              living={group104Props.living}
              group139Props={group104Props.group139Props}
            />
            {/* <ProjectCard3 rectangle62={projectCard3Props.rectangle62} group99Props={projectCard3Props.group99Props} /> */}
            <ProjectCard3
              rectangle62={projectCard32Props.rectangle62}
              group99Props={projectCard32Props.group99Props}
              className="lproject-card-5"
            />
            <ProjectCard3
              rectangle62={projectCard33Props.rectangle62}
              group99Props={projectCard33Props.group99Props}
              className="project-card-7"
            />
            <ProjectCard3
              rectangle62={projectCard34Props.rectangle62}
              group99Props={projectCard34Props.group99Props}
              className="project-card-6"
            />
            <ProjectCard3
              rectangle62={projectCard35Props.rectangle62}
              group99Props={projectCard35Props.group99Props}
              className="project-card-4"
            />
            <ProjectCard3
              rectangle62={projectCard36Props.rectangle62}
              group99Props={projectCard36Props.group99Props}
              className="project-card-2"
            />
            <ProjectCard3
              rectangle62={projectCard37Props.rectangle62}
              group99Props={projectCard37Props.group99Props}
              className="project-card-8"
            />
            <ProjectCard3
              rectangle62={projectCard38Props.rectangle62}
              group99Props={projectCard38Props.group99Props}
              className="project-card-1"
            />
            <ProjectCard3
              rectangle62={projectCard39Props.rectangle62}
              group99Props={projectCard39Props.group99Props}
              className="project-card-3"
            />
            <Button22>{button22Props.children}</Button22>
            <div className="lpd-frame-37">
              <img className="lpd-frame-36" src={frame36} />
              <img className="lpd-frame-" src={frame37} />
              <img className="lpd-frame-" src={frame38} />
              <img className="lpd-frame-" src={frame39} />
              <img className="lpd-frame-" src={frame40} />
              <img className="lpd-frame-" src={frame41} />
              <img className="lpd-frame-" src={frame42} />
              <img className="lpd-frame-" src={frame43} />
              <img className="lpd-frame-" src={frame44} />
              <img className="lpd-frame-" src={frame45} />
              <img className="lpd-frame-" src={frame46} />
              <img className="lpd-frame-" src={frame47} />
              <img className="lpd-frame-" src={frame48} />
              <img className="lpd-frame-" src={frame49} />
              <img className="lpd-frame-" src={frame50} />
              <img className="lpd-frame-" src={frame51} />
              <img className="lpd-frame-" src={frame52} />
              <img className="lpd-frame-" src={frame53} />
              <img className="lpd-frame-" src={frame54} />
              <img className="lpd-frame-" src={frame55} />
              <img className="lpd-frame-" src={frame56} />
              <img className="lpd-frame-" src={frame57} />
              <img className="lpd-frame-" src={frame58} />
              <img className="lpd-frame-" src={frame59} />
              <img className="lpd-frame-" src={frame60} />
              <img className="lpd-frame-" src={frame61} />
              <img className="lpd-frame-" src={frame62} />
              <img className="lpd-frame-" src={frame63} />
              <img className="lpd-frame-" src={frame64} />
              <img className="lpd-frame-" src={frame65} />
              <img className="lpd-frame-" src={frame66} />
              <img className="lpd-frame-" src={frame67} />
              <img className="lpd-frame-68" src={frame68} />
              <img className="lpd-frame--1" src={frame69} />
              <img className="lpd-frame--1" src={frame70} />
              <img className="lpd-frame--1" src={frame71} />
              <img className="lpd-frame--1" src={frame72} />
              <img className="lpd-frame--1" src={frame73} />
              <img className="lpd-frame--1" src={frame74} />
              <img className="lpd-frame--1" src={frame75} />
              <img className="lpd-frame--1" src={frame76} />
              <img className="lpd-frame--1" src={frame77} />
              <img className="lpd-frame--1" src={frame78} />
              <img className="lpd-frame--1" src={frame79} />
              <img className="lpd-frame--1" src={frame80} />
              <img className="lpd-frame--1" src={frame81} />
            </div>
            <Group109 ourProjects={group1092Props.ourProjects} text21={group1092Props.text21} className="lpd-group-110" />
            <div className="lpd-group-115">
              <Group102 construction={group102Props.construction} place={group102Props.place} />
              <div className="lpd-flex-row">
                <PackageCard
                  text64={packageCardProps.text64}
                  icons={packageCardProps.icons}
                  group69Props={packageCardProps.group69Props}
                  button8Props={packageCardProps.button8Props}
                />
                <Group111
                  basicI2601231166={group111Props.basicI2601231166}
                  icons={group111Props.icons}
                  group69Props={group111Props.group69Props}
                  button8Props={group111Props.button8Props}
                />
                <Group111
                  basicI2601231166={group1112Props.basicI2601231166}
                  icons={group1112Props.icons}
                  group69Props={group1112Props.group69Props}
                  button8Props={group1112Props.button8Props}
                />
                <Group111
                  basicI2601231166={group1113Props.basicI2601231166}
                  icons={group1113Props.icons}
                  group69Props={group1113Props.group69Props}
                  button8Props={group1113Props.button8Props}
                />
              </div>
            </div>
            <Group109 ourProjects={group1093Props.ourProjects} text21={group1093Props.text21} className="group-110-1" />
            <Group273
              text278={group273Props.text278}
              ellipse1={group273Props.ellipse1}
              name={group273Props.name}
              text279={group273Props.text279}
            />
            <Group273
              text278={group2732Props.text278}
              ellipse1={group2732Props.ellipse1}
              name={group2732Props.name}
              text279={group2732Props.text279}
              className="group-27"
            />
            <Group129 />
            <div className="lpd-cost-estimator-bg" style={{ backgroundImage: `url(${costEstimatorBg})` }}>
              <div className="lpd-rectangle-63"></div>
            </div>
            <Group114 costEstimator={group114Props.costEstimator} text69={group114Props.text69} />
            <EstimateNowButton>{estimateNowButtonProps.children}</EstimateNowButton>
            <Group117 frame1Props={group117Props.frame1Props} frame12Props={group117Props.frame12Props} />
            <Group156
              image2={group156Props.image2}
              image3={group156Props.image3}
              image4={group156Props.image4}
              image5={group156Props.image5}
              image6={group156Props.image6}
              image7={group156Props.image7}
            />
            <Group1292 />
            <HeaderWithBackground9 {...headerWithBackground9Props} />
          </div>
          <Footer2 {...footer2Props} />
        </div>
      </div>
    </div>
  );
}

export default X01LandingPageDesktop;
