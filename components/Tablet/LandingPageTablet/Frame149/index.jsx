import React from "react";
import Group139 from "../Group139";
import Frame138 from "../Frame138";
import Group13022 from "../Group13022";
import Group135 from "../Group135";
import Group137 from "../Group137";
import "./Frame149.css";

function Frame149(props) {
  const {
    apartments,
    buildiings,
    group139Props,
    frame138Props,
    group13022Props,
    group135Props,
    group1352Props,
    group135Props2,
    group137Props,
    group135Props3,
    group1352Props2,
    group1372Props,
  } = props;

  return (
    <div className="frame-149">
      <div className="frame-1609">
        <Group139>{group139Props.children}</Group139>
        <div className="apartments typographybodycaption-14-semi-bold">{apartments}</div>
        <div className="buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
        <Frame138 place={frame138Props.place} living={frame138Props.living} />
      </div>
      <div className="frame-15">
        <Group13022
          rectangle62={group13022Props.rectangle62}
          text107={group13022Props.text107}
          surname={group13022Props.surname}
        />
        <Group135
          rectangle62={group135Props.rectangle62}
          text108={group135Props.text108}
          surname={group135Props.surname}
        />
      </div>
      <div className="frame-15">
        <Group135
          rectangle62={group1352Props.rectangle62}
          text108={group1352Props.text108}
          surname={group1352Props.surname}
          className="group-13"
        />
        <Group135
          rectangle62={group135Props2.rectangle62}
          text108={group135Props2.text108}
          surname={group135Props2.surname}
          className="group-13-1"
        />
      </div>
      <div className="frame-15-1">
        <Group137
          rectangle62={group137Props.rectangle62}
          text111={group137Props.text111}
          surname={group137Props.surname}
        />
        <Group135
          rectangle62={group135Props3.rectangle62}
          text108={group135Props3.text108}
          surname={group135Props3.surname}
          className="group-13-1"
        />
      </div>
      <div className="frame-15-1">
        <Group135
          rectangle62={group1352Props2.rectangle62}
          text108={group1352Props2.text108}
          surname={group1352Props2.surname}
          className="group-13"
        />
        <Group137
          rectangle62={group1372Props.rectangle62}
          text111={group1372Props.text111}
          surname={group1372Props.surname}
          className="group-133"
        />
      </div>
    </div>
  );
}

export default Frame149;
