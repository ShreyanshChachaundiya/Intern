import React from "react";

const Account_Paused = () => {
  return (
    <div className=" flex flex-col align-middle ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen"
      />

      <div className="absolute inline top-[6%] w-[20%] h-24 left-[40%] text-[25px] text-[#21C6F7] ">
        Account Paused
      </div>
      <img
        src="icons/finalLogo.png"
        className="absolute inline w-[3%] top-[14%] left-[48%] h-[10%] "
      />
      <div className="absolute text-white block w-[45%] px-32 left-[30%] top-[30%] text-start text-[100%]">
        <span>
          You have chosen to pause your Account, you can reactivate your Account
          at anytime using your Login data.
        </span>
        <div className="my-[3%] text-center px-10 text-[35px] w-[90%] relative left-[-6%] ">
          <span>So Long!</span>
        </div>
      </div>

      <div className="w-[25%] h-[200px] flex justify-between absolute top-[48%] left-[33%] my-[7%]">
        <div>
          <button className="bg-[#0FBEFF] hover:bg-blue-700 text-white  py-2 px-2 shadow-md absolute w-[35%]">
            Log in
          </button>
        </div>
        <div>
          <button className="bg-[#71CB24] text-white hover:bg-white-700  py-2 px-2 shadow-md absolute w-[35%]">
            Sign Up
          </button>
        </div>
        <div>
          <button className="bg-white text-black hover:bg-white-700  py-2 px-2 shadow-md absolute w-[35%]">
            Cancel
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

export default Account_Paused;