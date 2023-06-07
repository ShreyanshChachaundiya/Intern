import React from "react";

const PasswordReset = () => {
  return (
    <div className=" flex flex-col align-middle ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen"
      />

      <div className="absolute inline top-[6%] w-[20%] h-24 left-[40%] text-[25px] text-[#21C6F7] ">
        Password Reset
      </div>
      <img
        src="icons/finalLogo.png"
        className="absolute inline w-[3%] top-[14%] left-[48%] h-[10%] "
      />
      <div className="relative text-white block w-[50%]  left-[42%] top-[30vh] text-start">
        <span>
          Find Your <span className="text-[#F7AD21]">Signature</span> Account.
        </span>
      </div>

      <div className="w-[25%] h-[200px] flex justify-between absolute top-[20vh] left-[40%] my-[7%]">
        <div className="">
          <img
            src="icons/ecllipse.png"
            className="h-[23%] items-center justify-center align-middle"
          />
          <div className="w-[200px] top-2 left-4 text-[#E31F1F] text-xs  absolute items-center align-middle">
            There is no results to this informations, please try again
          </div>
        </div>

        <span className="text-[#151514] w-[150%] left-[-30%] top-[30%] absolute">
          Enter your username, phone number, email
        </span>
      </div>

      <div className="w-[55%] h-[20px] flex justify-between relative top-[-30vh] left-[42%] my-[7%]">
        <input type="text" className="w-[40%] relative left-[-5%] " />
      </div>

      <div className="w-[25%] h-[20px] flex justify-between absolute top-[40vh] left-[38%]  my-[7%] text-white">
        <button className="bg-[#CD3FE0] px-1 text-black pb-3 h-7">
          Get Help
        </button>
        <button className="bg-[#8EC612] px-1 pb-3 h-7">New Account</button>
        <button className="bg-[#0FBEFF] px-1 pb-3 h-7">Search</button>
        <button className="bg-[#DDE2D2] px-1 pb-3 h-7 text-black">
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

export default PasswordReset;
