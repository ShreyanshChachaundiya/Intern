import React from "react";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import AllMusic from "../../components/Music/AllMusic";

const Music = () => {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <AllMusic/>
      <RightBar />
    </div>
  );
};

export default Music;
