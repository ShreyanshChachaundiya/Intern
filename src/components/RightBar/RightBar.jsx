import React from "react";
import "./RightBar.css";
import Image_Card from "./Image_Card";
import Right_Mid from "./Right_Mid";
import Keepers from "./Keepers";

const RightBar = () => {
  return (
    <div className="rightbar">
      <img src="../icons/rightcrt.png" className="crt1" />
      <div className="live">
        <img src="../icons/live.png" />
        <span>activity</span>
      </div>
      <Image_Card />
      <div className="rmid">
        <Right_Mid />
      </div>
      <Keepers />
    </div>
  );
};

export default RightBar;
