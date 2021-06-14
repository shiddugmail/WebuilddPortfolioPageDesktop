import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X04PortfolioDetailPage from "./components/X04PortfolioDetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|04-portfolio-detail-page-desktop)">
          <X04PortfolioDetailPage
            x04_PortfolioDetailPage="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/04-portfolio-detail-page-1@1x.png"
            headerWithBackgroundProps={x04PortfolioDetailPageData.headerWithBackgroundProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
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

