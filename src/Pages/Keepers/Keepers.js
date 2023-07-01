import React from "react";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Keepers/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import MidBar from "../../components/Keepers/MidBar";
import Parent from "../../components/Keepers/Parent";

const Keepers = () => {
  return (
    <div class="overflow-hidden h-[100vh]">
      <Navbar />
      {/* <LeftBar /> */}
      {/* <MidBar />  */}
      <Parent/>
      {/* <div className="w-[50%]">
        <RightBar />
      </div> */}
    </div>
  );
};

export default Keepers;
