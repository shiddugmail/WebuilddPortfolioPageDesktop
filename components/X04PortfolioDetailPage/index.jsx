import React from "react";
import HeaderWithBackground72 from "../HeaderWithBackground72";
import "./X04PortfolioDetailPage.css";

function X04PortfolioDetailPage(props) {
  const { x04_PortfolioDetailPage, headerWithBackgroundProps } = props;

  return (
    <div class="container-center-horizontal">
      <div
        className="x04-portfolio-detail-page-desktop screen"
        style={{ backgroundImage: `url(${x04_PortfolioDetailPage})` }}
      >
        <HeaderWithBackground72 {...headerWithBackgroundProps} />
      </div>
    </div>
  );
}

export default X04PortfolioDetailPage;
