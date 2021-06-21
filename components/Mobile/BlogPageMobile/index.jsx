import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';
import "./BlogPage.css";
                                                    
function App() {
  return <X05GalleryPageMobile {...x05GalleryPageMobileData} />;
}

export default App;

function X05GalleryPageMobile(props) {
  const {
    ourProjects,
    overlapGroup,
    latestVideos,
    text170,
    address,
    text169,
    frame145Props,
    antDesignplayCircleOutlined2Props,
    frame1628Props,
    frame16282Props,
    frame16283Props,
    frame16284Props,
    button22Props,
    group2122Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x08-blogs-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{ourProjects}</h1>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="rectangle-77"></div>
          <div className="frame-1626">
            <div className="latest-videos valign-text-middle typographybodytiny-10-regular">{latestVideos}</div>
            <p className="text-4 valign-text-middle overpass-bold-white-16px">{text170}</p>
            <p className="address valign-text-middle typographybodytiny-10-regular">{address}</p>
          </div>
          <AntDesignplayCircleOutlined22 overlapGroup1={antDesignplayCircleOutlined2Props.overlapGroup1} />
        </div>
        <p className="text-3 typography-body-smalltext-14-regular">{text169}</p>
        <div className="frame-1627">
          <Frame1628
            youtubeCard2Props={frame1628Props.youtubeCard2Props}
            youtubeCard22Props={frame1628Props.youtubeCard22Props}
          />
          <Frame1628
            className={frame16282Props.className}
            youtubeCard2Props={frame16282Props.youtubeCard2Props}
            youtubeCard22Props={frame16282Props.youtubeCard22Props}
          />
          <Frame1628
            className={frame16283Props.className}
            youtubeCard2Props={frame16283Props.youtubeCard2Props}
            youtubeCard22Props={frame16283Props.youtubeCard22Props}
          />
          <Frame1628
            className={frame16284Props.className}
            youtubeCard2Props={frame16284Props.youtubeCard2Props}
            youtubeCard22Props={frame16284Props.youtubeCard22Props}
          />
          <Button22>{button22Props.children}</Button22>
        </div>
        <Group2122
          group862Props={group2122Props.group862Props}
          group872Props={group2122Props.group872Props}
          group322Props={group2122Props.group322Props}
          frame5Props={group2122Props.frame5Props}
        />
      </div>
    </div>
  );
}


function Frame145(props) {
  const { group86Props, iconMenuProps } = props;

  return (
    <div className="frame-145">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <IconMenu vector2={iconMenuProps.vector2} vector3={iconMenuProps.vector3} />
    </div>
  );
}


function Group86(props) {
  const { group85, whiteProps } = props;

  return (
    <div className="group-86">
      <White src={whiteProps.src} />
      <img className="group-85" src={group85} />
    </div>
  );
}


function White(props) {
  const { src } = props;

  return (
    <div className="white">
      <img className="vector" src={src} />
    </div>
  );
}


function IconMenu(props) {
  const { vector2, vector3 } = props;

  return (
    <div className="icon-menu">
      <img
        className="vector-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg"
      />
      <img className="vector-1" src={vector2} />
      <img className="vector-1" src={vector3} />
    </div>
  );
}


function AntDesignplayCircleOutlined22(props) {
  const { overlapGroup1 } = props;

  return (
    <div className="ant-designplay-circle-outlined">
      <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-248@2x.svg"
        />
      </div>
    </div>
  );
}


function Frame1628(props) {
  const { className, youtubeCard2Props, youtubeCard22Props } = props;

  return (
    <div className={`frame-1628 ${className || ""}`}>
      <YoutubeCard22
        text171={youtubeCard2Props.text171}
        address={youtubeCard2Props.address}
        youtubeThumbnail2Props={youtubeCard2Props.youtubeThumbnail2Props}
      />
      <YoutubeCard22
        text171={youtubeCard22Props.text171}
        address={youtubeCard22Props.address}
        className={youtubeCard22Props.className}
        youtubeThumbnail2Props={youtubeCard22Props.youtubeThumbnail2Props}
      />
    </div>
  );
}


function YoutubeCard22(props) {
  const { text171, address, className, youtubeThumbnail2Props } = props;

  return (
    <div className={`youtube-card ${className || ""}`}>
      <YoutubeThumbnail22
        youtubeThumbnail={youtubeThumbnail2Props.youtubeThumbnail}
        overlapGroup1={youtubeThumbnail2Props.overlapGroup1}
        className={youtubeThumbnail2Props.className}
      />
      <div className="group-162">
        <div className="overlap-group1-1">
          <div className="text valign-text-middle typographyheadlineh5-extrabold-20">{text171}</div>
          <p className="address-1 valign-text-middle typographybodysmall-12-regular">{address}</p>
        </div>
      </div>
    </div>
  );
}


function YoutubeThumbnail22(props) {
  const { youtubeThumbnail, overlapGroup1, className } = props;

  return (
    <div className={`youtube-thumbnail ${className || ""}`} style={{ backgroundImage: `url(${youtubeThumbnail})` }}>
      <div className="ant-designplay-circle-outlined-1">
        <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img
            className="vector-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-254@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}


function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27323835TimelineData);
  }, []);

  return (
    <div className="x27323835 component component-wrapper not-ready">
      <div className="master-button-yNBhMu">
        <div className="button-i2732383551-x47ShW valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27323835TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27323835",
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


function Group2122(props) {
  const { group862Props, group872Props, group322Props, frame5Props } = props;

  return (
    <div className="group-212">
      <div className="flex-row">
        <Group8622 group85={group862Props.group85} />
        <Group872
          overlapGroup={group872Props.overlapGroup}
          vector2={group872Props.vector2}
          facebookAppSymbolProps={group872Props.facebookAppSymbolProps}
          twitterProps={group872Props.twitterProps}
        />
      </div>
      <Group322 {...group322Props} />
      <Frame5
        quickLinks={frame5Props.quickLinks}
        frame140Props={frame5Props.frame140Props}
        frame1402Props={frame5Props.frame1402Props}
        frame1403Props={frame5Props.frame1403Props}
      />
    </div>
  );
}


function Group8622(props) {
  const { group85 } = props;

  return (
    <div className="group-86-1">
      <div className="white-1">
        <img
          className="vector-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-148@2x.svg"
        />
      </div>
      <img className="group-85-1" src={group85} />
    </div>
  );
}


function Group872(props) {
  const { overlapGroup, vector2, facebookAppSymbolProps, twitterProps } = props;

  return (
    <div className="group-87">
      <FacebookAppSymbol src={facebookAppSymbolProps.src} />
      <div className="instagram">
        <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img
            className="vector-6"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-18@2x.svg"
          />
          <img className="vector-7" src={vector2} />
        </div>
      </div>
      <Twitter src={twitterProps.src} />
    </div>
  );
}


function FacebookAppSymbol(props) {
  const { src } = props;

  return (
    <div className="facebook-app-symbol">
      <img className="f-1" src={src} />
    </div>
  );
}


function Twitter(props) {
  const { src } = props;

  return (
    <div className="twitter">
      <img className="vector-8" src={src} />
    </div>
  );
}


function Group322(props) {
  const { place, overlapGroup, phone, overlapGroup1, vector2, text165, text164, contactWebuildCom } = props;

  return (
    <div className="group-32">
      <div className="place valign-text-middle typographyheadlineh5-extrabold-20">{place}</div>
      <div className="flex-row-1">
        <div className="flex-col">
          <div className="map-pin-1">
            <div className="overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <img
                className="vector-9"
                src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-150@2x.svg"
              />
            </div>
          </div>
          <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
          <div className="mail">
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img className="vector-10" src={vector2} />
            </div>
          </div>
        </div>
        <div className="flex-col-1">
          <p className="text-2 typography-body-smalltext-14-regular">{text165}</p>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">{text164}</div>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">
            {contactWebuildCom}
          </div>
        </div>
      </div>
    </div>
  );
}


function Frame5(props) {
  const { quickLinks, frame140Props, frame1402Props, frame1403Props } = props;

  return (
    <div className="frame-5">
      <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
      <div className="frame-4">
        <Frame140 aboutUs={frame140Props.aboutUs} projects={frame140Props.projects} />
        <Frame140
          aboutUs={frame1402Props.aboutUs}
          projects={frame1402Props.projects}
          className={frame1402Props.className}
        />
        <Frame140
          aboutUs={frame1403Props.aboutUs}
          projects={frame1403Props.projects}
          className={frame1403Props.className}
        />
      </div>
    </div>
  );
}


function Frame140(props) {
  const { aboutUs, projects, className } = props;

  return (
    <div className={`frame-140 ${className || ""}`}>
      <div className="about-us valign-text-middle typographybody16-regular">{aboutUs}</div>
      <div className="projects valign-text-middle typographybody16-regular">{projects}</div>
    </div>
  );
}

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-23@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const antDesignplayCircleOutlined22Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg",
};

const youtubeThumbnail22Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-18@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "",
};

const youtubeCard22Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail22Data,
};

const youtubeThumbnail222Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-19@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard222Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail222Data,
};

const frame1628Data = {
    youtubeCard2Props: youtubeCard22Data,
    youtubeCard22Props: youtubeCard222Data,
};

const youtubeThumbnail223Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-20@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard223Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail223Data,
};

const youtubeThumbnail224Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-21@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard224Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail224Data,
};

const frame16282Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard223Data,
    youtubeCard22Props: youtubeCard224Data,
};

const youtubeThumbnail225Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-22@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard225Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail225Data,
};

const youtubeThumbnail226Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-23@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-253@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard226Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail226Data,
};

const frame16283Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard225Data,
    youtubeCard22Props: youtubeCard226Data,
};

const youtubeThumbnail227Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-24@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-265@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard227Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail227Data,
};

const youtubeThumbnail228Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-25@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-265@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard228Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail228Data,
};

const frame16284Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard227Data,
    youtubeCard22Props: youtubeCard228Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-26@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-11@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-218@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-215@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const group322Data = {
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-149@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-241@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-214@2x.svg",
    text165: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text164: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group2122Data = {
    group862Props: group8622Data,
    group872Props: group872Data,
    group322Props: group322Data,
    frame5Props: frame5Data,
};

const x05GalleryPageMobileData = {
    ourProjects: "Our Projects",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@2x.png",
    latestVideos: "LATEST VIDEOS",
    text170: "Lorem Ipsum passages of Lorem Ip...",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    text169: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    frame145Props: frame145Data,
    antDesignplayCircleOutlined2Props: antDesignplayCircleOutlined22Data,
    frame1628Props: frame1628Data,
    frame16282Props: frame16282Data,
    frame16283Props: frame16283Data,
    frame16284Props: frame16284Data,
    button22Props: button22Data,
    group2122Props: group2122Data,
};

