import React from "react";

const Account_Delete = () => {
  return (
    <div className=" ">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen"
      />
      <img
        src="icons/Signature_Real_Logo.png"
        alt="error-logo"
        className="absolute z-10 w-[10%] inline left-2 top-[2%]"
      />
      <div className="absolute inline top-[2%] w-[20%] h-24 left-[40%] text-[28px] text-[#FA0808] ">
        Account deleted
      </div>
      <img
        src="icons/final_logo.png"
        className="absolute inline w-[5%] top-[10%] left-[46%] h-[20%] "
      />
      <div className="absolute text-white block w-[45%] left-[31%] top-[30%] text-start text-[120%]">
        <div>
          <span>Too bad you are leaving.</span>
        </div>
        <span>Please note that your Account will be permanently deleted.</span>
      </div>

      <div className="w-[25%] h-[200px] flex justify-between absolute top-[45%] left-[31%] ">
        <div>
          <button className="bg-[#0FBEFF] hover:bg-blue-700 text-black  py-3 px-3 shadow-md absolute w-[160px]">
            Delete Account
          </button>
        </div>
        <div>
          <button className="bg-white text-black hover:bg-white-700 text-black  py-3 px-3 shadow-md absolute w-[160px]">
            Cancel
          </button>
        </div>
      </div>
      <div className="absolute top-[55%] left-[38%] text-[#ADAFA8] text-[140%]">
        <div>Or you just need a break?</div>{" "}
        <div>You can deactivate your Account</div>{" "}
        <div>↓by clicking below↓</div>
      </div>
      <button className="bg-[#C3C0B5] absolute py-3 px-10 top-[75%] left-[39%]">
        Pause my Signature Account
      </button>

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

export default Account_Delete;
