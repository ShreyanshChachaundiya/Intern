import React from "react";

const PwordReset = () => {
  return (
    <div className=" flex flex-col align-middle ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%]  h-screen"
      />

      <div className="absolute inline top-[6%] w-[20%] h-24 left-[42%] text-[25px] text-[#21C6F7] ">
        Password Reset
      </div>
      <img
        src="icons/finalLogo.png"
        className="absolute inline w-[3%] top-[14%] left-[50%] h-[10%] "
      />
      <div className="relative text-white w-[45%]  left-[29%] top-[30vh] ">
        <span>
          Find Your <span className="text-[#F7AD21]">Signature</span> Account.
        </span>
      </div>

      <div className="w-[25%] h-[20px]  justify-between absolute top-[25vh] left-[40%] my-[6%] ">
        <div>Enter your username, phone number, email</div>
      </div>

      <div className="w-[27%]  flex justify-between absolute top-[30vh] left-[42%] my-[7%]">
        <input className="w-[70%]"/>
      </div>

      <div className="w-[18%] h-[20px] flex justify-between absolute top-[40vh] left-[42.5%]  my-[7%] text-white">
        
        <button className="bg-[#0FBEFF] px-4 pb-3 h-7">Search</button>
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

export default PwordReset;
