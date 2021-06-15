import React from "react";
import Group8622 from "../Group8622";
import Group87 from "../Group87";
import Group32 from "../Group32";
import Frame5 from "../Frame5";
import "./Group212.css";

function Group212(props) {
  const { group862Props, group87Props, group862Props2, frame5Props } = props;

  return (
    <div className="group-212">
      <div className="flex-row">
        <Group8622 group85={group862Props.group85} />
        <Group87
          facebookAppSymbolProps={group87Props.facebookAppSymbolProps}
          facebookAppSymbolProps2={group87Props.facebookAppSymbolProps2}
          twitterProps={group87Props.twitterProps}
        />
      </div>
      <Group32 {...group862Props2} />
      <Frame5
        quickLinks={frame5Props.quickLinks}
        frame140Props={frame5Props.frame140Props}
        frame1402Props={frame5Props.frame1402Props}
        frame1403Props={frame5Props.frame1403Props}
      />
    </div>
  );
}

export default Group212;
