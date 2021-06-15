import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X01LandingPageDesktop from "./components/Desktop/LandingPageDesktop/X01LandingPageDesktop";
import Frame173 from "./components/Desktop/AboutPageDesktop/Frame173";
import X02AboutPageMobile from "./components/Mobile/AboutPageMobile/X02AboutPageMobile";
import X02AboutPageTablet from "./components/Tablet/AboutPageTablet/X02AboutPageTablet"
import X03PortfolioPageMobile from "./components/Mobile/PortfolioPageMobile/X03PortfolioPageMobile";
import X04PortfolioDetailPage from "./components/Desktop/PortfolioDetailPageDesktop/X04PortfolioDetailPage";
import X04PortfolioDetailPageMobile from "./components/Mobile/PortfolioDetailPageMobile/X04PortfolioDetailPageMobile"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <div className="desktop-only">
            <X01LandingPageDesktop {...x01LandingPageDesktopData} />
          </div>
        </Route>
        <Route path="/:path(|about)">
          <div className="desktop-only">
            <Frame173 {...frame173Data} />
          </div>
          <div className="mobile-only">
            <X02AboutPageMobile {...x02AboutPageMobileData} />
          </div>
        </Route> 
        <Route path="/:path(|portfolio-detail)">
          <div className="desktop-only">
            <X04PortfolioDetailPage
              x04_PortfolioDetailPage="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/04-portfolio-detail-page-1@1x.png"
              headerWithBackgroundProps={x04PortfolioDetailPageData.headerWithBackgroundProps}
              />
          </div>
          <div className="mobile-only">
            <X04PortfolioDetailPageMobile {...x04PortfolioDetailPageMobileData} />
          </div>
          <div className="tablet-only">
            <X02AboutPageTablet {...x02AboutPageTabletData} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const whiteData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
  group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
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

const button22Data = {
  children: "VIEW MORE",
};

const group8622Data = {
  group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-18@2x.svg",
};

const facebookAppSymbolData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
  instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-379@2x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
};

const twitterData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group87Data = {
  facebookAppSymbolProps: facebookAppSymbolData,
  facebookAppSymbolProps2: instagramData,
  twitterProps: twitterData,
};

const group32Data = {
  place: "Contact",
  overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-374@2x.svg",
  phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
  overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-9@2x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
  text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  text20: "+91 8976535221, +91 8755645342",
  contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
  aboutUs: "About Us",
  projects: "Projects",
};

const frame1402Data = {
  aboutUs: "Gallery",
  projects: "Knowledge Transfer",
};

const frame1403Data = {
  aboutUs: "Blogs",
  projects: "FAQ’s",
};

const frame5Data = {
  quickLinks: "Quick Links",
  frame140Props: frame140Data,
  frame1402Props: frame1402Data,
  frame1403Props: frame1403Data,
};

const group212Data = {
  group862Props: group8622Data,
  group87Props: group87Data,
  group862Props2: group32Data,
  frame5Props: frame5Data,
};

const x04PortfolioDetailPageMobileData = {
  title: "Project Name",
  rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76@2x.png",
  text1: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
  rectangle91: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-91@2x.png",
  rectangle92: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-92@2x.png",
  rectangle93: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-93@2x.png",
  rectangle94: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-94@2x.png",
  rectangle95: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-95@2x.png",
  rectangle96: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-96@2x.png",
  biGrid3X2Gap: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/bi-grid-3x2-gap-1@2x.png",
  previous: "Previous",
  projectName: "Project Name",
  next: "Next",
  projectName2: "Project Name",
  frame145Props: frame145Data,
  button22Props: button22Data,
  group212Props: group212Data,
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const headerWithBackground72Data = {
    unselectedI2601262: "HOME",
    unselectedI26012622: "ABOUT US",
    text1: "PROJECTS",
    unselectedI26012623: "VIDEOS",
    unselectedI26012624: "INSIGHTS",
    unselectedI26012625: "BLOGS",
    unselectedI26012626: "FAQ’S",
    unselectedI26012627: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton22Data,
};

const x04PortfolioDetailPageData = {
    headerWithBackgroundProps: headerWithBackground72Data,
};


// /* data for Landing Page Desktop version */


const group89Data = {
  line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
  line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
  line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
  line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
  line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-5@1x.svg",
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
  group99Props: group992Data,
};

const group993Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard33Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-2@2x.png",
  group99Props: group993Data,
};

const group994Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard34Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-3@2x.png",
  group99Props: group994Data,
};

const group995Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard35Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-4@2x.png",
  group99Props: group995Data,
};

const group996Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard36Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-5@2x.png",
  group99Props: group996Data,
};

const group997Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard37Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-6@2x.png",
  group99Props: group997Data,
};

const group998Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard38Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-7@2x.png",
  group99Props: group998Data,
};

const group999Data = {
  text1: "Project Name",
  surname: "Small description about the project",
};

const projectCard39Data = {
  rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-62-8@2x.png",
  group99Props: group999Data,
};

// const button22Data = {
//   children: "VIEW MORE",
// };

const group1092Data = {
  ourProjects: "Packages",
  text21: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
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

// const whiteData = {
//   src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
// };

// const group86Data = {
//   group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
//   whiteProps: whiteData,
// };

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

// const group89Data = {
//   line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
//   line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
//   line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
//   line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
//   line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4@1x.svg",
// };

const founderCardData = {
  rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90@2x.png",
  name: "Jenny Wilson",
  designation: "Designation",
};

const founderCard2Data = {
  rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-1@2x.png",
  name: "Brooklyn Simmons",
  designation: "Designation",
};

const founderCard32Data = {
  rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-2@2x.png",
  name: "Esther Howard",
  designation: "Designation",
};

const founderCard4Data = {
  rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-3@2x.png",
  name: "Jane Cooper",
  designation: "Designation",
};

const frame173Data = {
  text1: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
  rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76@1x.png",
  title: "About Us",
  whyChooseUs: "Why Choose Us?",
  founders: "Founders",
  line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55@1x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-177@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-178@2x.svg",
  place: "Quality",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-7@2x.svg",
  vector5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-182@2x.svg",
  vector6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-9@2x.svg",
  vector7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-184@2x.svg",
  vector8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-11@2x.svg",
  vector9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-12@2x.svg",
  vector10: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-187@2x.svg",
  vector11: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-14@2x.svg",
  vector12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-189@2x.svg",
  vector13: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-190@2x.svg",
  vector14: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-17@2x.svg",
  vector15: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-192@2x.svg",
  vector16: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-193@2x.svg",
  vector17: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
  vector18: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-195@2x.svg",
  vector19: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-196@2x.svg",
  vector20: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-23@2x.svg",
  vector21: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-198@2x.svg",
  vector22: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-25@2x.svg",
  vector23: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-26@2x.svg",
  vector24: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-201@2x.svg",
  vector25: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-202@2x.svg",
  vector26: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-203@2x.svg",
  vector27: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-30@2x.svg",
  vector28: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-205@2x.svg",
  group: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-32@2x.svg",
  vector29: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-207@2x.svg",
  vector30: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-34@2x.svg",
  vector31: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-35@2x.svg",
  vector32: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-34@2x.svg",
  vector33: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-211@2x.svg",
  vector34: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
  vector35: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-35@2x.svg",
  vector36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-35@2x.svg",
  vector37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-215@2x.svg",
  vector38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-216@2x.svg",
  vector39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-217@2x.svg",
  vector40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-44@2x.svg",
  vector41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-219@2x.svg",
  transparency: "Transparency",
  vector42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-179@2x.svg",
  vector43: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-6@2x.svg",
  cost: "Cost",
  rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77@1x.png",
  howItWorks: "How it Works?",
  text2: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
  rectangle48: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-48-6@1x.png",
  rectangle49: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-49-6@1x.png",
  rectangle50: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-50-6@1x.png",
  place2: "Quality",
  text3: <>Quality for us is not just using expensive brands of raw materials, it mainly involves three key points, <br />Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.  <br />Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance.<br />Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.</>,
  transparenccy: "Transparenccy",
  text4: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
  cost2: "Cost",
  text5: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
  group89Props: group89Data,
  founderCardProps: founderCardData,
  founderCard2Props: founderCard2Data,
  founderCard32Props: founderCard32Data,
  founderCard4Props: founderCard4Data,
};

// const whiteData = {
//   src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
// };

// const group86Data = {
//   group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
//   whiteProps: whiteData,
// };

// const iconMenuData = {
//   vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
//   vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
// };

// const frame145Data = {
//   group86Props: group86Data,
//   iconMenuProps: iconMenuData,
// };

// const founderCardData = {
//   rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90@2x.png",
//   name: "Jenny Wilson",
//   designation: "Designation",
// };

// const founderCard32Data = {
//   rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-2@2x.png",
//   name: "Esther Howard",
//   designation: "Designation",
// };

// const founderCard2Data = {
//   rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-1@2x.png",
//   name: "Brooklyn Simmons",
//   designation: "Designation",
// };

// const founderCard4Data = {
//   rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-3@2x.png",
//   name: "Jane Cooper",
//   designation: "Designation",
// };

// const group8622Data = {
//   group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-4@2x.svg",
// };

// const facebookAppSymbolData = {
//   src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
// };

// const instagramData = {
//   instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-223@2x.svg",
//   vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-409@2x.svg",
// };

// const twitterData = {
//   src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-347@2x.svg",
// };

// const group87Data = {
//   facebookAppSymbolProps: facebookAppSymbolData,
//   facebookAppSymbolProps2: instagramData,
//   twitterProps: twitterData,
// };

// const group32Data = {
//   place: "Contact",
//   overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-374@2x.svg",
//   phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
//   overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-318@2x.svg",
//   vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg",
//   text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//   text20: "+91 8976535221, +91 8755645342",
//   contactWebuildCom: "contact@webuild.com",
// };

// const frame140Data = {
//   aboutUs: "About Us",
//   projects: "Projects",
// };

// const frame1402Data = {
//   aboutUs: "Gallery",
//   projects: "Knowledge Transfer",
// };

// const frame1403Data = {
//   aboutUs: "Blogs",
//   projects: "FAQ’s",
// };

// const frame5Data = {
//   quickLinks: "Quick Links",
//   frame140Props: frame140Data,
//   frame1402Props: frame1402Data,
//   frame1403Props: frame1403Data,
// };

const x02AboutPageMobileData = {
  aboutUs: "About Us",
  rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-7@2x.png",
  text1: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
  whyChooseUs: "Why Choose Us?",
  line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55-2@2x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-114@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-286@2x.svg",
  place: "Quality",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-116@2x.svg",
  vector5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-117@2x.svg",
  vector6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-118@2x.svg",
  vector7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
  vector8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-120@2x.svg",
  vector9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-278@2x.svg",
  vector10: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-279@2x.svg",
  vector11: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-280@2x.svg",
  vector12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-281@2x.svg",
  vector13: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-282@2x.svg",
  vector14: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-283@2x.svg",
  vector15: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-127@2x.svg",
  vector16: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-285@2x.svg",
  vector17: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-286@2x.svg",
  vector18: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-287@2x.svg",
  vector19: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-288@2x.svg",
  vector20: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-289@2x.svg",
  vector21: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-133@2x.svg",
  vector22: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-291@2x.svg",
  vector23: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-292@2x.svg",
  vector24: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-293@2x.svg",
  vector25: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-294@2x.svg",
  vector26: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-295@2x.svg",
  vector27: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-296@2x.svg",
  vector28: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-297@2x.svg",
  vector29: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-298@2x.svg",
  vector30: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-299@2x.svg",
  vector31: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-307@2x.svg",
  vector32: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-308@2x.svg",
  vector33: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-309@2x.svg",
  vector34: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-310@2x.svg",
  vector35: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-311@2x.svg",
  vector36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-300@2x.svg",
  vector37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-301@2x.svg",
  vector38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-302@2x.svg",
  vector39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-303@2x.svg",
  vector40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-147@2x.svg",
  vector41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-305@2x.svg",
  vector42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-306@2x.svg",
  transparency: "Transparency",
  vector43: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg",
  vector44: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
  cost: "Cost",
  rectangle72: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-72@2x.png",
  place2: "Quality",
  text3: "Quality for us is not just using expensive brands of raw materials, it mainly involves three key points,  Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.   Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance. Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.",
  rectangle73: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-73@2x.png",
  transparenccy: "Transparenccy",
  text4: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
  rectangle70: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-70@2x.png",
  cost2: "Cost",
  text5: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
  rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77-2@2x.png",
  whyWebuild: "Why Webuild?",
  text2: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
  whyWebuild2: "Why Webuild?",
  image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
  image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
  frame145Props: frame145Data,
  founderCardProps: founderCardData,
  founderCard32Props: founderCard32Data,
  founderCard2Props: founderCard2Data,
  founderCard4Props: founderCard4Data,
  group8622Props: group8622Data,
  group87Props: group87Data,
  group32Props: group32Data,
  frame5Props: frame5Data,
};

const footerData = {
  group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
  place: "Contact",
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-275@2x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-108@2x.svg",
  phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-110@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg",
  text42: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  text3: "+91 8976535221, +91 8755645342",
  contactWebuildCom: "contact@webuild.com",
  quickLinks: "Quick Links",
  aboutUs: "About Us",
  projects: "Projects",
  gallery: "Gallery",
  knowledgeTransfer: "Knowledge Transfer",
  blogs: "Blogs",
  faqs: "FAQ’s",
  group87Props: group87Data,
};

const x02AboutPageTabletData = {
  aboutUs: "About Us",
  rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@1x.png",
  text8: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
  whyChooseUs: "Why Choose Us?",
  line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55@1x.svg",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-60@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-61@2x.svg",
  place: "Quality",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-62@2x.svg",
  vector5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-63@2x.svg",
  cost: "Cost",
  vector6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-64@2x.svg",
  vector7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-65@2x.svg",
  vector8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-66@2x.svg",
  vector9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-67@2x.svg",
  vector10: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-68@2x.svg",
  vector11: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-72@2x.svg",
  vector12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-73@2x.svg",
  vector13: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-74@2x.svg",
  vector14: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-75@2x.svg",
  vector15: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-76@2x.svg",
  vector16: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-77@2x.svg",
  vector17: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-75@2x.svg",
  vector18: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-79@2x.svg",
  vector19: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-80@2x.svg",
  vector20: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-81@2x.svg",
  vector21: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-82@2x.svg",
  vector22: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-83@2x.svg",
  vector23: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-81@2x.svg",
  overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-85@2x.svg",
  vector24: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-86@2x.svg",
  vector25: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-87@2x.svg",
  vector26: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
  vector27: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-89@2x.svg",
  vector28: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-90@2x.svg",
  vector29: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-91@2x.svg",
  vector30: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-92@2x.svg",
  vector31: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-93@2x.svg",
  vector32: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-101@2x.svg",
  group: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-102@2x.svg",
  vector33: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-103@2x.svg",
  vector34: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-104@2x.svg",
  vector35: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-105@2x.svg",
  vector36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-94@2x.svg",
  vector37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
  vector38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
  vector39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
  vector40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
  vector41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-99@2x.svg",
  vector42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-100@2x.svg",
  transparency: "Transparency",
  rectangle72: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-72-1@1x.png",
  place2: "Quality",
  text10: <>Quality for us is not just using expensive brands of raw materials, it mainly involves three key points, <br />Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.  <br />Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance.<br />Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.</>,
  rectangle73: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-73-1@1x.png",
  transparenccy: "Transparenccy",
  text11: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
  rectangle70: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-70-1@1x.png",
  cost2: "Cost",
  text12: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
  rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77@1x.png",
  title: "How it Works?",
  text9: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
  founders: "Founders",
  frame144Props: frame144Data,
  founderCardProps: founderCardData,
  founderCard2Props: founderCard2Data,
  founderCardProps2: founderCard32Data,
  founderCard2Props2: founderCard4Data,
  frame165Props: frame165Data,
  footerProps: footerData,
};

const frame144Data = {
  group86Props: group86Data,
  iconMenuProps: iconMenuData,
};

const frame165Data = {
  image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
  image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
  image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
  image6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
  image8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
  image7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
};