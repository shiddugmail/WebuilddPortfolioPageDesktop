import React from "react";
import Frame145 from "../Frame145";
import Frame1613 from "../Frame1613";
import Group2122 from "../Group2122";
import "./X03PortfolioPageMobile.css";

function X03PortfolioPageMobile(props) {
  const { ourProjects, rectangle76, text166, frame145Props, frame1613Props, frame1613Props2 } = props;

  return (
    <div className="container-center-horizontal" >
      <div className="x03-portfolio-page-mobile screen">
        <div className="frame-1656">
          <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
          <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{ourProjects}</h1>
          <img className="rectangle-76" src={rectangle76} />
          <p className="text-12 typography-body-smalltext-14-regular">{text166}</p>
          <Frame1613 {...frame1613Props} />
          <Group2122
            group862Props={frame1613Props2.group862Props}
            group872Props={frame1613Props2.group872Props}
            group322Props={frame1613Props2.group322Props}
            frame5Props={frame1613Props2.frame5Props}
          />
        </div>
      </div>
    </div>
  );
}

export default X03PortfolioPageMobile;
