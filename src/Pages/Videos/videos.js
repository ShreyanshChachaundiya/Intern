import React from "react";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import AllVideos from "../../components/Videos/AllVideos";

const videos = () => {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <AllVideos/>
      <RightBar />
    </div>
  );
};

export default videos;
