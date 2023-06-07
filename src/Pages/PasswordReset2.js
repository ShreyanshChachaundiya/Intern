import React from "react";

const PasswordReset2 = () => {
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
      <div className="relative text-white block w-[45%]  left-[43%] top-[30vh] text-start">
        <span>
          Find Your <span className="text-[#F7AD21]">Signature</span> Account.
        </span>
      </div>

      <div className="w-[25%] h-[200px] flex justify-between absolute top-[20vh] left-[43%] my-[7%]">
        <img src="icons/man.png" alt="error" className="w-[15%] h-[25%]" />
        <div className="w-[30%] items-start align-middle justify-start flex flex-col left-[20%] absolute">
          <span>
            <span className="text-[#F7AD21] text-[13px]">Signature</span> User
          </span>
          <span className="text-[#F7AD21] text-[13px]">@realJeanBeniL</span>
        </div>
      </div>

      <div className="w-[55%] h-[20px] flex justify-between absolute top-[35vh] left-[42%] my-[6%] ">
        <span>Choose how to reset your Password</span>
      </div>

      <div className="w-[25%] h-[20px] flex justify-between absolute top-[40vh] left-[42%]  my-[7%] text-white flex-col justify-start items-start">
        <div className="flex gap-1 mb-5">
          <input type="checkbox" />
          <span className="text-xs text-[#FFFF5A]">
            Choose how to reset your Password
          </span>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" />
          <span className="text-xs text-[#FFFF5A]">
            Send a code via email mxxxxxxxxx@gxxxx.xxx
          </span>
        </div>
      </div>

      <div className="w-[25%] h-[20px] flex justify-between absolute top-[55vh] left-[40%]  my-[7%] text-white  justify-start items-start ">
        <span className="text-xs text-[#3E72E6]">
          You don’t have access to these?
        </span>

        <button className="bg-[#0FBEFF] px-2 text-black">Continue</button>
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

export default PasswordReset2;
