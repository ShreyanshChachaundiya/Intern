import React from "react";
import Header from "../components/Header";
import Left from "../components/Sign_Components/Left";
import LeftBar from "../components/Leftbar/LeftBar";
import RightProfile from "../components/RightProfile";
import Midprofile from "../components/Midprofile";
import Left_Footer from "../components/Left_Footer";

const Profile = () => {
  return (
    <div>
      <Header />
      <LeftBar />
      <Midprofile />
      
      <RightProfile />
      
      <Left_Footer />
     
      
      <div className="my-[100px]">
      <div className="fixed bottom-[3%] w-[40%] right-0 text-[14px] text-start my-0">
        <span className="text-black-300">
        cookies/developer/search/about/Terms/Groups/Marketing/Shop/Import
          /
        </span>
        Jobs/Languages/Press/Location
      </div>

      <div className="fixed bottom-0 right-0 text-start text-[14px] flex justify-between w-[400px]">
        <div className="">JBLSignature © 2020 All rights reserved</div>
        <div className="text-white flex align-middle ">
          English
          <img src="icons/america.png" className="h-[20px]" />
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Profile;
