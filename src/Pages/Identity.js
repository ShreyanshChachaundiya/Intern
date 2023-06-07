import React from "react";

const Identity = () => {
  return (
    <div className=" flex flex-col align-middle ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen"
      />

      <div className="absolute inline top-[15%] w-[25%] h-[10vh] left-[40%] text-[25px] text-[#21C6F7] ">
      Welcome back to  <span className="text-[#F7AD21]">Signature</span> 
      </div>
      <img
        src="icons/finalLogo.png"
        className="absolute inline w-[5%] top-[24%] left-[48%] h-[15%] "
      />

      <div className="w-[32%] h-[20px] bg-white h-[8vh]  justify-between absolute top-[29vh] px-2 left-[35%] my-[6%] ">
        <div className="text-[12px] text-start">
          There have been unusual Login attempts lately. For your own safety, We
          highly recommend you to reset your Password
        </div>
      </div>

      <div className="w-[32%] h-[20px] flex justify-between absolute top-[40vh] left-[35%]  my-[7%] text-white">
        <button className="bg-[#8EC612] px-4 pb-3 h-7">Choose a step</button>
        <button className="bg-[#0FBEFF] px-4 pb-3 h-7 text-black">
          Get help
        </button>
        <button className="bg-[#DDE2D2] px-4 pb-3 h-7 text-black">
          Cancel
        </button>
      </div>

      <div className="absolute bottom-[5%] w-[55%] right-0 text-[10px] text-start">
        <span className="text-blue-300">
          Log in / Sign up / #Hashtags / Videos / Music / Podcast / Stream /
          Chat / News / Messaging / Platform / Blog / Games / Signature for Kids
          /
        </span>
        Search / About / Ads / Groups / Marketing / Shop / Privacy / Help /
        Terms / Cookies / Developers / Jobs / Languages / Press / Location /
        Features / Imprint
      </div>

      <div className="absolute bottom-0 right-0 text-start text-[10px] flex justify-between w-[400px]">
        <div className="">JBLSignature © 2020 All rights reserved</div>
        <div className="text-white flex align-middle ">
          English
          <img src="icons/america.png" className="h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Identity;
