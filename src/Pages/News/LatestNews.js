import React from "react";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import Navbar from "../../components/Navbar";
import NewsMid from "../../components/News/NewsMid";

const LatestNews = () => {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <NewsMid/>
      <RightBar />
    </div>
  );
};

export default LatestNews;
