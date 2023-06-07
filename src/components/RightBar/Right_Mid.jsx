import React from "react";
import "./Right_Mid.css";

const Right_Mid = () => {
  return (
    <div className="rmid">
      <div className="rmidhead">
        <span>CookieS</span>
        <span>a</span>
        <span>Signature</span>
        <span>Money</span>
        <span>Transfer</span>
      </div>
      <div>
        <img src="../icons/cookies.png" className="cook" />
      </div>
      <div className="visa">
        <span>Verified By</span>
        <img src="../icons/VISA.png" />
      </div>
      <div className="talk">
        <span>Everyone talking about</span>
        <span>
          Kanye best runs for president #Apple #Covid19 #john button #Signature
          App #Keepers
        </span>
        <span>
          <img src="../icons/Canvas.png" className="can1" />
        </span>
        <span>
          Signature keeps you up with people
          <img src="../icons/Canvas.png" className="can" /> While you are away from
          home.
        </span>
      </div>
    </div>
  );
};

export default Right_Mid;
