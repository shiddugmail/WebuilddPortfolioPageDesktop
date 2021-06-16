import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';
import './X01LandingPageDesktop.css'
// function App() {
//   return <X01LandingPageDesktop {...x01LandingPageDesktopData} />;
// }

// export default App;

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
                  <img className="lpd-rectangle" src={rectangle49} />
                  <div className="lpd-frame-30">
                    <img className="lpd-plan" src={plan} />
                    <Frame292 text13={frame292Props.text13} text14={frame292Props.text14} />
                  </div>
                </div>
                <div className="lpd-flex-col">
                  <img className="lpd-rectangle" src={rectangle48} />
                  <div className="lpd-frame-29">
                    <img className="lpd-blueprint" src={blueprint} />
                    <Frame293 text11={frame293Props.text11} text12={frame293Props.text12} />
                  </div>
                  <img className="lpd-rectangle" src={rectangle50} />
                </div>
              </div>
            </div>
            <Group109 ourProjects={group109Props.ourProjects} text21={group109Props.text21} />
            <Group104
              apartments={group104Props.apartments}
              buildiings={group104Props.buildiings}
              place={group104Props.place}
              living={group104Props.living}
              group139Props={group104Props.group139Props}
            />
            <ProjectCard3 rectangle62={projectCard3Props.rectangle62} group99Props={projectCard3Props.group99Props} />
            <ProjectCard3
              rectangle62={projectCard32Props.rectangle62}
              className= 'lpd-project-card-1' //{projectCard32Props.className}
              group99Props={projectCard32Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard33Props.rectangle62}
              className='lpd-project-card-2' //{projectCard33Props.className}
              group99Props={projectCard33Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard34Props.rectangle62}
              className='lpd-project-card-3'
              group99Props={projectCard34Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard35Props.rectangle62}
              className='lpd-project-card-4'
              group99Props={projectCard35Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard36Props.rectangle62}
              className='lpd-project-card-5'
              group99Props={projectCard36Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard37Props.rectangle62}
              className='lpd-project-card-6'
              group99Props={projectCard37Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard38Props.rectangle62}
              className='lpd-project-card-7'
              group99Props={projectCard38Props.group99Props}
            />
            <ProjectCard3
              rectangle62={projectCard39Props.rectangle62}
              className='lpd-project-card-8'
              group99Props={projectCard39Props.group99Props}
            />
            {/* <Button22>{button22Props.children}</Button22> */}
            <div className="lpd-frame-37">
              <img className="lpd-frame-36" src={frame36} />
              <img className="lpd-frame" src={frame37} />
              <img className="lpd-frame" src={frame38} />
              <img className="lpd-frame" src={frame39} />
              <img className="lpd-frame" src={frame40} />
              <img className="lpd-frame" src={frame41} />
              <img className="lpd-frame" src={frame42} />
              <img className="lpd-frame" src={frame43} />
              <img className="lpd-frame" src={frame44} />
              <img className="lpd-frame" src={frame45} />
              <img className="lpd-frame" src={frame46} />
              <img className="lpd-frame" src={frame47} />
              <img className="lpd-frame" src={frame48} />
              <img className="lpd-frame" src={frame49} />
              <img className="lpd-frame" src={frame50} />
              <img className="lpd-frame" src={frame51} />
              <img className="lpd-frame" src={frame52} />
              <img className="lpd-frame" src={frame53} />
              <img className="lpd-frame" src={frame54} />
              <img className="lpd-frame" src={frame55} />
              <img className="lpd-frame" src={frame56} />
              <img className="lpd-frame" src={frame57} />
              <img className="lpd-frame" src={frame58} />
              <img className="lpd-frame" src={frame59} />
              <img className="lpd-frame" src={frame60} />
              <img className="lpd-frame" src={frame61} />
              <img className="lpd-frame" src={frame62} />
              <img className="lpd-frame" src={frame63} />
              <img className="lpd-frame" src={frame64} />
              <img className="lpd-frame" src={frame65} />
              <img className="lpd-frame" src={frame66} />
              <img className="lpd-frame" src={frame67} />
              <img className="lpd-frame-68" src={frame68} />
              <img className="lpd-frame-1" src={frame69} />
              <img className="lpd-frame-1" src={frame70} />
              <img className="lpd-frame-1" src={frame71} />
              <img className="lpd-frame-1" src={frame72} />
              <img className="lpd-frame-1" src={frame73} />
              <img className="lpd-frame-1" src={frame74} />
              <img className="lpd-frame-1" src={frame75} />
              <img className="lpd-frame-1" src={frame76} />
              <img className="lpd-frame-1" src={frame77} />
              <img className="lpd-frame-1" src={frame78} />
              <img className="lpd-frame-1" src={frame79} />
              <img className="lpd-frame-1" src={frame80} />
              <img className="lpd-frame-1" src={frame81} />
            </div>
            <Group109
              ourProjects={group1092Props.ourProjects}
              text21={group1092Props.text21}
              className= 'lpd-group-110' //{group1092Props.className}
            />
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
            <Group109
              ourProjects={group1093Props.ourProjects}
              text21={group1093Props.text21}
              className='lpd-group-110-1'
            />
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
              className={group2732Props.className}
            />
            <Group129 />
            <div className="lpd-cost-estimator-bg" style={{ backgroundImage: `url(${costEstimatorBg})` }}>
              <div className="lpd-rectangle-63"></div>
            </div>
            <Group114 costEstimator={group114Props.costEstimator} text69={group114Props.text69} />
            {/* <EstimateNowButton>{estimateNowButtonProps.children}</EstimateNowButton> */}
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

function Group89(props) {
  const { line4, line5, line6, line7, line8 } = props;

  return (
    <div className="lpd-group-89">
      <img className="lpd-line-4" src={line4} />
      <img className="lpd-line" src={line5} />
      <img className="lpd-line-1" src={line6} />
      <img className="lpd-line-1" src={line7} />
      <img className="lpd-line" src={line8} />
    </div>
  );
}


function GetAQuoteButton22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x2607547TimelineData);
  }, []);

  return (
    <div className="lpd-x2607547 animate-enter2 component component-wrapper not-ready">
      <div className="lpd-master-button-0sW4MC">
        <div className="lpd-button-i260754751-V82dLG valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x2607547TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x2607547",
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


function Frame29(props) {
  const { text9, spanText, spanText2, spanText3, spanText4, spanText5 } = props;

  return (
    <div className="lpd-frame-29-1">
      <div className="lpd-text-4 valign-text-middle typographyheadlineh4-extrabold-24">{text9}</div>
      <p className="lpd-text-5 typography-body-smalltext-14-regular">
        <span className="lpd-span typography-body-smalltext-14-regular">{spanText}</span>
        <span className="lpd-span-1 typography-body-smalltext-14-regular">{spanText2}</span>
        <span className="lpd-span2-1 typographybodycaption-14-semi-bold">{spanText3}</span>
        <span className="lpd-span-1 typography-body-smalltext-14-regular">{spanText4}</span>
        <span className="lpd-span typography-body-smalltext-14-regular">{spanText5}</span>
      </p>
    </div>
  );
}


function Frame292(props) {
  const { text13, text14 } = props;

  return (
    <div className="lpd-frame-29-2">
      <div className="lpd-text-8 valign-text-middle typographyheadlineh4-extrabold-24">{text13}</div>
      <p className="lpd-text-9 typography-body-smalltext-14-regular">{text14}</p>
    </div>
  );
}


function Frame293(props) {
  const { text11, text12 } = props;

  return (
    <div className="lpd-frame-29-3">
      <div className="lpd-text-6 valign-text-middle typographyheadlineh4-extrabold-24">{text11}</div>
      <p className="lpd-text-7 typography-body-smalltext-14-regular">{text12}</p>
    </div>
  );
}


function Group109(props) {
  const { ourProjects, text21, className } = props;

  return (
    <div className={`lpd-group-109 ${className || ""}`}>
      <div className="lpd-our-projects valign-text-middle typographyheadlineh2-extrabold-40">{ourProjects}</div>
      <p className="lpd-text valign-text-middle typographybody16-regular">{text21}</p>
    </div>
  );
}


function Group104(props) {
  const { apartments, buildiings, place, living, group139Props } = props;

  return (
    <div className="lpd-group-104">
      <Group139>{group139Props.children}</Group139>
      <div className="lpd-apartments typographybodycaption-14-semi-bold">{apartments}</div>
      <div className="lpd-buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
      <div className="lpd-place typographybodycaption-14-semi-bold">{place}</div>
      <div className="lpd-living typographybodycaption-14-semi-bold">{living}</div>
    </div>
  );
}


function Group139(props) {
  const { children } = props;

  return (
    <div className="lpd-group-139">
      <div className="lpd-overlap-group1-1">
        <div className="lpd-rectangle-46"></div>
        <div className="lpd-price overpass-extra-bold-shark-14px">{children}</div>
      </div>
    </div>
  );
}


function ProjectCard3(props) {
  const { rectangle62, className, group99Props } = props;

  return (
    <div className={`lpd-project-card ${className || ""}`}>
      <img className="lpd-rectangle-62" src={rectangle62} />
      <Group99 text1={group99Props.text1} surname={group99Props.surname} />
    </div>
  );
}


function Group99(props) {
  const { text1, surname } = props;

  return (
    <div className="lpd-group-99">
      <div className="lpd-text-1-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
      <p className="lpd-surname typography-body-smalltext-14-regular">{surname}</p>
    </div>
  );
}


// function Button22(props) {
//   const { children } = props;

//   useEffect(() => {
//     loadTimelineData(x2607791TimelineData);
//   }, []);

//   return (
//     <div className="lpd-x2607791 component component-wrapper not-ready">
//       <div className="lpd-master-button-gAXIb9">
//         <div className="lpd-button-i260779151-GqONSi valign-text-middle">{children}</div>
//       </div>
//     </div>
//   );
// }

const x2607791TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x2607791",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Group102(props) {
  const { construction, place } = props;

  return (
    <div className="lpd-group-102">
      <div className="lpd-group-103">
        <div className="lpd-overlap-group1-2">
          <div className="lpd-rectangle-46-1"></div>
          <div className="lpd-construction overpass-extra-bold-shark-14px">{construction}</div>
        </div>
      </div>
      <div className="lpd-place-1 typographybodycaption-14-semi-bold">{place}</div>
    </div>
  );
}


function PackageCard(props) {
  const { text64, icons, group69Props, button8Props } = props;

  return (
    <div className="lpd-package-card">
      <div className="lpd-text-24 valign-text-middle typographyheadlineh4-extrabold-24">{text64}</div>
      <div className="lpd-icons" style={{ backgroundImage: `url(${icons})` }}></div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}


function Group69(props) {
  const { number, text4 } = props;

  return (
    <div className="lpd-group-69">
      <div className="lpd-number valign-text-middle typographyheadlineh2-extrabold-40">{number}</div>
      <div className="lpd-text-2-1 valign-text-middle typographybody16-regular">{text4}</div>
    </div>
  );
}


function Button8(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601231466600TimelineData);
  }, []);

  return (
    <div className="lpd-i26012314-66600 component component-wrapper not-ready">
      <div className="lpd-master-button-4KxvdI">
        <div className="lpd-button-i2601231466-hdozzc valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601231466600TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012314-66600",
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


function Group111(props) {
  const { basicI2601231166, icons, group69Props, button8Props } = props;

  return (
    <div className="lpd-group-11">
      <div className="lpd-basic-i2601231 valign-text-middle typographyheadlineh4-extrabold-24">{basicI2601231166}</div>
      <img className="lpd-icons-1" src={icons} />
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}


function Group273(props) {
  const { text278, ellipse1, name, text279, className } = props;

  return (
    <div className={`lpd-group-27 ${className || ""}`}>
      <div className="lpd-overlap-group-1">
        <p className="lpd-text-5-1 typographybodycaption-14-semi-bold">{text278}</p>
        <div className="lpd-group-120">
          <img className="lpd-ellipse-1" src={ellipse1} />
          <div className="lpd-flex-col-1">
            <div className="lpd-name valign-text-middle typographyheadlineh3-extrabold-30">{name}</div>
            <div className="lpd-text-5-2 valign-text-middle typographybody16-regular">{text279}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Group129() {
  return (
    <div className="lpd-group-129">
      <div className="lpd-ellipse-99"></div>
      <div className="lpd-ellipse-10"></div>
      <div className="lpd-ellipse-10"></div>
    </div>
  );
}


function Group114(props) {
  const { costEstimator, text69 } = props;

  return (
    <div className="lpd-group-114">
      <div className="lpd-cost-estimator valign-text-middle typographyheadlineh2-extrabold-40">{costEstimator}</div>
      <p className="lpd-text-58 valign-text-middle typographybody16-regular">{text69}</p>
    </div>
  );
}


function EstimateNowButton(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26012333TimelineData);
  }, []);

  return (
    <div className="lpd-x26012333 component component-wrapper not-ready">
      <div className="lpd-master-button-vdtmmz">
        <div className="lpd-button-i2601233351-k5Tboy valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26012333TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26012333",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];


function Group117(props) {
  const { frame1Props, frame12Props } = props;

  return (
    <div className="lpd-group-117">
      <Frame1>{frame1Props.children}</Frame1>
      <Frame1 className={frame12Props.className}>{frame12Props.children}</Frame1>
    </div>
  );
}


function Frame1(props) {
  const { children, className } = props;

  return (
    <div className={`lpd-frame-1-1 border-1px-white ${className || ""}`}>
      <div className="lpd-text-59 inter-normal-white-14px">{children}</div>
    </div>
  );
}


function Group156(props) {
  const { image2, image3, image4, image5, image6, image7 } = props;

  return (
    <div className="lpd-group-156">
      <img className="lpd-image-2" src={image2} />
      <img className="lpd-image" src={image3} />
      <img className="lpd-image-4" src={image4} />
      <img className="lpd-image" src={image5} />
      <img className="lpd-image-6" src={image6} />
      <img className="lpd-image" src={image7} />
    </div>
  );
}


function Group1292() {
  return (
    <div className="lpd-group-129-1">
      <div className="lpd-ellipse-99-1"></div>
      <div className="lpd-ellipse-100"></div>
    </div>
  );
}


function HeaderWithBackground9(props) {
  const {
    place,
    unselectedI2601234,
    projects,
    unselectedI26012342,
    unselectedI26012343,
    unselectedI26012344,
    unselectedI26012345,
    unselectedI26012346,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="lpd-header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="lpd-frame-34">
        <div className="lpd-frame-27">
          <div className="lpd-selected">
            <div className="lpd-overlap-group1-3">
              <div className="lpd-rectangle-61"></div>
              <div className="lpd-place-2 valign-text-middle overpass-bold-shark-14px">{place}</div>
            </div>
          </div>
          <div className="lpd-unselected-i2601234 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601234}
          </div>
          <img className="lpd-projects" src={projects} />
          <div className="lpd-unselected-i2601234-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012342}
          </div>
          <div className="lpd-unselected-i2601234-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012343}
          </div>
          <div className="lpd-unselected-i2601234-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012344}
          </div>
          <div className="lpd-unselected-i2601234-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012345}
          </div>
          <div className="lpd-unselected-i2601234-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012346}
          </div>
        </div>
        <GetAQuoteButton222>{getAQuoteButton22Props.children}</GetAQuoteButton222>
      </div>
    </div>
  );
}


function Group86(props) {
  const { group85, whiteProps } = props;

  return (
    <div className="lpd-group-86">
      <White src={whiteProps.src} />
      <img className="lpd-group-85" src={group85} />
    </div>
  );
}


function White(props) {
  const { src } = props;

  return (
    <div className="lpd-white">
      <img className="lpd-vector" src={src} />
    </div>
  );
}


function GetAQuoteButton222(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601234964120TimelineData);
  }, []);

  return (
    <div className="lpd-i26012349-64120 component component-wrapper not-ready">
      <div className="lpd-master-button-FifxVR">
        <div className="lpd-button-i2601234964-yyNXsM valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601234964120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012349-64120",
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


function Footer2(props) {
  const {
    overlapGroup,
    vector2,
    group8622Props,
    group32Props,
    facebookAppSymbol3Props,
    twitter3Props,
    frame53Props,
    frame6Props,
    frame7Props,
  } = props;

  return (
    <div className="lpd-footer">
      <div className="lpd-frame-1585">
        <div className="lpd-frame-1578">
          <Group86222 group85={group8622Props.group85} whiteProps={group8622Props.whiteProps} />
          <div className="lpd-frame-1584">
            <Group324
              overlapGroup1={group32Props.overlapGroup1}
              text7={group32Props.text7}
              vector2={group32Props.vector2}
              text8={group32Props.text8}
              overlapGroup12={group32Props.overlapGroup12}
              vector3={group32Props.vector3}
              text9={group32Props.text9}
            />
            <div className="lpd-frame-1583">
              <FacebookAppSymbol3 src={facebookAppSymbol3Props.src} />
              <div className="lpd-instagram">
                <div className="lpd-overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img
                    className="lpd-vector-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-56@2x.svg"
                  />
                  <img className="lpd-vector-2" src={vector2} />
                </div>
              </div>
              <Twitter3 src={twitter3Props.src} />
            </div>
          </div>
        </div>
        <Frame53 text40={frame53Props.text40} frame4Props={frame53Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}


function Group86222(props) {
  const { group85, whiteProps } = props;

  return (
    <div className="lpd-group-86-1">
      <White src={whiteProps.src} />
      <img className="lpd-group-85-1" src={group85} />
    </div>
  );
}


function Group324(props) {
  const { overlapGroup1, text7, vector2, text8, overlapGroup12, vector3, text9 } = props;

  return (
    <div className="lpd-group-32">
      <div className="lpd-group-189">
        <div className="lpd-map-pin-1">
          <div className="lpd-overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img
              className="lpd-vector-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-167@2x.svg"
            />
          </div>
        </div>
        <p className="lpd-text-26 typographybody16-regular">{text7}</p>
      </div>
      <div className="lpd-group-18">
        <div className="lpd-phone">
          <img className="lpd-vector-4" src={vector2} />
        </div>
        <div className="lpd-text-2-2 valign-text-middle typographybody16-regular">{text8}</div>
      </div>
      <div className="lpd-group-18">
        <div className="lpd-mail">
          <div className="lpd-overlap-group1-6" style={{ backgroundImage: `url(${overlapGroup12})` }}>
            <img className="lpd-vector-5" src={vector3} />
          </div>
        </div>
        <div className="lpd-text-2-2 valign-text-middle typographybody16-regular">{text9}</div>
      </div>
    </div>
  );
}


function FacebookAppSymbol3(props) {
  const { src } = props;

  return (
    <div className="lpd-facebook-app-symbol">
      <img className="lpd-f-1" src={src} />
    </div>
  );
}


function Twitter3(props) {
  const { src } = props;

  return (
    <div className="lpd-twitter">
      <img className="lpd-vector-6" src={src} />
    </div>
  );
}


function Frame53(props) {
  const { text40, frame4Props } = props;

  return (
    <div className="lpd-frame-5">
      <div className="lpd-text-29 valign-text-middle typographyheadlineh5-extrabold-20">{text40}</div>
      <Frame4
        text41={frame4Props.text41}
        text42={frame4Props.text42}
        text43={frame4Props.text43}
        text44={frame4Props.text44}
        text45={frame4Props.text45}
        text46={frame4Props.text46}
        text47={frame4Props.text47}
      />
    </div>
  );
}


function Frame4(props) {
  const { text41, text42, text43, text44, text45, text46, text47 } = props;

  return (
    <div className="lpd-frame-4">
      <div className="lpd-text-10 valign-text-middle typographybody16-regular">{text41}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text42}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text43}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text44}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text45}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text46}</div>
      <div className="lpd-text-11 valign-text-middle typographybody16-regular">{text47}</div>
    </div>
  );
}


function Frame6(props) {
  const { text48, frame42Props, frame422Props } = props;

  return (
    <div className="lpd-frame-6">
      <div className="lpd-text-37 valign-text-middle typographyheadlineh5-extrabold-20">{text48}</div>
      <div className="lpd-frame-1577">
        <Frame42
          text49={frame42Props.text49}
          text50={frame42Props.text50}
          place={frame42Props.place}
          text51={frame42Props.text51}
          text52={frame42Props.text52}
        />
        <Frame42
          text49={frame422Props.text49}
          text50={frame422Props.text50}
          place={frame422Props.place}
          text51={frame422Props.text51}
          text52={frame422Props.text52}
          className={frame422Props.className}
        />
      </div>
    </div>
  );
}


function Frame42(props) {
  const { text49, text50, place, text51, text52, className } = props;

  return (
    <div className={`lpd-frame-4-1 ${className || ""}`}>
      <div className="lpd-text-38 valign-text-middle overpass-extra-bold-white-16px">{text49}</div>
      <div className="lpd-frame-1580">
        <div className="lpd-text-12 valign-text-middle typographybody16-regular">{text50}</div>
        <div className="lpd-place-3 valign-text-middle typographybody16-regular">{place}</div>
        <div className="lpd-text-40 valign-text-middle typographybody16-regular">{text51}</div>
        <div className="lpd-text-41 valign-text-middle typographybody16-regular">{text52}</div>
      </div>
    </div>
  );
}


function Frame7(props) {
  const { text56, frame4Props } = props;

  return (
    <div className="lpd-frame-7">
      <div className="lpd-text-45 valign-text-middle typographyheadlineh5-extrabold-20">{text56}</div>
      <Frame4
        text41={frame4Props.text41}
        text42={frame4Props.text42}
        text43={frame4Props.text43}
        text44={frame4Props.text44}
        text45={frame4Props.text45}
        text46={frame4Props.text46}
        text47={frame4Props.text47}
      />
    </div>
  );
}

const group89Data = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const frame29Data = {
    text9: "The Webuildd Difference",
    spanText: "What makes us stand miles apart from other firms? We call it “Webuildd Difference”: from the very first time you meet us, to the interaction with our team, the hassle-free engagement and finally the day we hand you the keys to your new home/building, the only standard we accept for ourselves (and our customers) is “Consistent Excellence”. We are never satisfied with our laurels, and our service to you goes far beyond simply putting one brick on top of another. We not only ensure that get quality, but also blend it with creativity, engineering, management, quality and multiple other disciplines to deliver the perfect output for your residential or commercial needs. We have even created our very own",
    spanText2: " ",
    spanText3: "cost estimator",
    spanText4: " ",
    spanText5: "that helps you calculate your probable capital outgo for your upcoming building. We really like to make things easy for our clients",
};

const frame292Data = {
    text13: "Our Customer Value Propositions",
    text14: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
};

const frame293Data = {
    text11: <>Why Choose Us? Minimum Hassles. <br />Maximum Value</>,
    text12: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
};

const group109Data = {
    ourProjects: "Our Projects",
    text21: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
};

const group139Data = {
    children: "ALL",
};

const group104Data = {
    apartments: "APARTMENTS",
    buildiings: "BUILDIINGS",
    place: "INTERIOR",
    living: "LIVING",
    group139Props: group139Data,
};

const group99Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard3Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62@2x.png",
    group99Props: group99Data,
};

const group992Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard32Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-1@2x.png",
    className: "lpd-lpd-project-card-1",
    group99Props: group992Data,
};

const group993Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard33Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-2@2x.png",
    className: "lpd-lpd-project-card-2",
    group99Props: group993Data,
};

const group994Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard34Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-3@2x.png",
    className: "lpd-lpd-project-card-3",
    group99Props: group994Data,
};

const group995Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard35Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-4@2x.png",
    className: "lpd-lpd-project-card-4",
    group99Props: group995Data,
};

const group996Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard36Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-5@2x.png",
    className: "lpd-lpd-project-card-5",
    group99Props: group996Data,
};

const group997Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard37Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-6@2x.png",
    className: "lpd-lpd-project-card-6",
    group99Props: group997Data,
};

const group998Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard38Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-7@2x.png",
    className: "lpd-lpd-project-card-7",
    group99Props: group998Data,
};

const group999Data = {
    text1: "Project Name",
    surname: "Small description about the project",
};

const projectCard39Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-8@2x.png",
    className: "lpd-lpd-project-card-8",
    group99Props: group999Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const group1092Data = {
    ourProjects: "Packages",
    text21: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
    className: "lpd-group-110",
};

const group102Data = {
    construction: "CONSTRUCTION",
    place: "INTERIOR",
};

const group69Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button8Data = {
    children: "VIEW DETAILS",
};

const packageCardData = {
    text64: "Basic",
    icons: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/basic-1@2x.svg",
    group69Props: group69Data,
    button8Props: button8Data,
};

const group692Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button82Data = {
    children: "VIEW DETAILS",
};

const group111Data = {
    basicI2601231166: "Standard",
    icons: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/icons@2x.svg",
    group69Props: group692Data,
    button8Props: button82Data,
};

const group693Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button83Data = {
    children: "VIEW DETAILS",
};

const group1112Data = {
    basicI2601231166: "Premium",
    icons: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/icons-1@2x.svg",
    group69Props: group693Data,
    button8Props: button83Data,
};

const group694Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button84Data = {
    children: "VIEW DETAILS",
};

const group1113Data = {
    basicI2601231166: "Luxury",
    icons: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/icons-2@2x.svg",
    group69Props: group694Data,
    button8Props: button84Data,
};

const group1093Data = {
    ourProjects: "Testimonials",
    text21: "Listen to what our customers say about us. They are the beating heart of our business",
    className: "lpd-group-110-1",
};

const group273Data = {
    text278: "The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Webuild !",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/ellipse-1@2x.svg",
    name: "Robert Fox",
    text279: "Bangalore, India",
};

const group2732Data = {
    text278: "The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Webuild !",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/ellipse-1-1@2x.svg",
    name: "Annette Black",
    text279: "Bangalore, India",
    className: "lpd-group-27-1",
};

const group114Data = {
    costEstimator: "Cost Estimator",
    text69: "Our very own software infused with years of experience. Use it to find a probable cost estimation to help you make a better choice",
};

const estimateNowButtonData = {
    children: "ESTIMATE NOW",
};

const frame1Data = {
    children: "City",
};

const frame12Data = {
    children: "Area of Construction (Sq.ft)",
    className: "lpd-frame-1-2",
};

const group117Data = {
    frame1Props: frame1Data,
    frame12Props: frame12Data,
};

const group156Data = {
    image2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-2@2x.png",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5@2x.png",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-6@2x.png",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-7@2x.png",
};

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
    whiteProps: whiteData,
};

const getAQuoteButton222Data = {
    children: "GET A QUOTE",
};

const headerWithBackground9Data = {
    place: "HOME",
    unselectedI2601234: "ABOUT US",
    projects: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/projects@2x.png",
    unselectedI26012342: "VIDEOS",
    unselectedI26012343: "INSIGHTS",
    unselectedI26012344: "BLOGS",
    unselectedI26012345: "FAQ’S",
    unselectedI26012346: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton222Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-12@2x.svg",
    whiteProps: white2Data,
};

const group324Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-166@2x.svg",
    text7: "#8, 105, Vishal Park Word, 3rd Cross, Cambridge Road Ulsoor, Bangalore, Bengaluru, Karnataka 560008",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-168@2x.svg",
    text8: "+91 8976535221, +91 8755645342",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-169@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-170@2x.svg",
    text9: "contact@webuild.com",
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-5@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg",
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "lpd-frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer2Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-202@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-173@2x.svg",
    group8622Props: group86222Data,
    group32Props: group324Data,
    facebookAppSymbol3Props: facebookAppSymbol3Data,
    twitter3Props: twitter3Data,
    frame53Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const x01LandingPageDesktopData = {
    rectangle2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-2-1@2x.png",
    spanText: <>Gain the Power of “Unified C2C” <br />Unburden yourself while</>,
    spanText2: <> <br /></>,
    spanText3: "we build your future.",
    text42: <>At Webuilld we offer you a completely<br />“Unified Conception to Construction” value proposition.  <br />No more dealing with a dozen sub-contractors or labour hassles when constructing your home or commercial building</>,
    whyWebuild: "Why Webuild?",
    text43: <>Because we bring to the table XX years of comprehensive experience, XX happy customers blended with <br />trust, reliability and transparency</>,
    building: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/building@2x.png",
    rectangle49: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-49-2@2x.png",
    plan: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/plan@2x.png",
    rectangle48: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-48-10@2x.png",
    blueprint: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/blueprint-1@2x.png",
    rectangle50: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-50-10@2x.png",
    frame36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame43: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame44: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame45: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame46: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame47: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame48: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame49: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame50: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame51: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame52: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame53: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame54: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame56: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame57: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame58: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame59: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame60: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame61: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame63: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame64: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame65: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame66: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame67: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-36-2@1x.svg",
    frame68: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame69: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame70: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame71: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame72: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame73: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame74: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame75: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame78: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame79: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame80: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    frame81: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/frame-68@1x.png",
    costEstimatorBg: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/mask-group@1x.svg",
    group89Props: group89Data,
    getAQuoteButton2Props: getAQuoteButton22Data,
    frame29Props: frame29Data,
    frame292Props: frame292Data,
    frame293Props: frame293Data,
    group109Props: group109Data,
    group104Props: group104Data,
    projectCard3Props: projectCard3Data,
    projectCard32Props: projectCard32Data,
    projectCard33Props: projectCard33Data,
    projectCard34Props: projectCard34Data,
    projectCard35Props: projectCard35Data,
    projectCard36Props: projectCard36Data,
    projectCard37Props: projectCard37Data,
    projectCard38Props: projectCard38Data,
    projectCard39Props: projectCard39Data,
    button22Props: button22Data,
    group1092Props: group1092Data,
    group102Props: group102Data,
    packageCardProps: packageCardData,
    group111Props: group111Data,
    group1112Props: group1112Data,
    group1113Props: group1113Data,
    group1093Props: group1093Data,
    group273Props: group273Data,
    group2732Props: group2732Data,
    group114Props: group114Data,
    estimateNowButtonProps: estimateNowButtonData,
    group117Props: group117Data,
    group156Props: group156Data,
    headerWithBackground9Props: headerWithBackground9Data,
    footer2Props: footer2Data,
};

