import React from "react";
import "./Mid.css";

const Mid = () => {
  return (
    <div className="sign_mid">
      <img src="icons/earth.png" alt="error" className="mid_earth" />
      <img src="icons/ear.png" className="mid_ear" />

      <div className="sign_txt">
          <span>Welcome to Signature Platform.</span>
          <span>A place to make your Voice be heard</span>{" "}
          <span>and to spread the News for others Voices to be heard</span>
        </div>
    </div>
  );
};

export default Mid;
