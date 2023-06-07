import React from "react";

const Block = () => {
  return (
    <div className=" ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen"
      />
      <img
        src="icons/SignatureRealLogo.png"
        alt="error-logo"
        className="absolute z-10 w-[10%] inline left-2 top-[2%]"
      />
      <div className="absolute inline top-[12%] w-[20%] h-24 left-[40%] text-[28px] text-[#E5D9A9] ">
        Blocked Account
      </div>
      <img
        src="icons/finallogo.png"
        className="absolute inline w-[5%] top-[20%] left-[46%] h-[20%] "
      />
      <div className="absolute text-[#E5D9A9] block w-[40%] left-[31%] top-[40%] text-start text-[120%]">
        <span>
          You have no access to your Account, we have warned you before! Please
          try to follow our guidelines. You are blocked for two Weeks.
        </span>
      </div>

      <div className="w-[25%] h-[200px] flex justify-between absolute top-[55%] left-[31%] ">
        <div>
          <span className=" text-[#4F90F7]  py-3 px-3  absolute w-[160px]">
            I understood
          </span>
        </div>
        <div>
          <button className="bg-[#76B554] text-black hover:bg-white-700 text-black  py-2 px-3 shadow-md absolute w-[120px]">
            help
          </button>
        </div>
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

export default Block;
