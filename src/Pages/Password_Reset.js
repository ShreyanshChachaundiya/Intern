import React from "react";
import { Link } from "react-router-dom";

const Password_Reset = () => {
  return (
    <div className="flex justify-between">
      <span className="absolute top-0 left-10 font-normal text-[18px] text-[#707070] ">
        signature noreply@identity.jblsignature.com
      </span>
      <div className="w-40 h-[10%] flex justify-between">
        <img src="icons/curtain.png" alt="error" className="h-32 " />
        <img
          src="icons/logotwo.png"
          alt="error"
          className="h-10 top-16 relative left-0"
        />
      </div>

      <div className="bg-[#ffff] w-[50%] h-[100%] left-[25%] absolute">
        <div className="absolute inline top-[5%] w-[35%] h-24 left-[30%] text-[22px] text-center text-[#707070] ">
          Password Reset
        </div>
        <img
          src="icons/FinalLogo.png"
          className="absolute inline w-[4%] top-[12%] left-[43%] h-[11%] "
        />
        <div className=" absolute font-[20px] font-normal text-[#707070] w-[50%] text-start left-[24%] top-[26%]">
          <span className="block mb-4">Hello Jean-Beni</span>
          <span className="px-5 text-start justify-start  h-9 block relative left-[-6%]">
            If you wished to reset your Password,
            <span className="block">please use this code: 758416</span>
            Or Click on this Link to
          </span>
          <button className="bg-[#0FBEFF] relative rounded-full left-[55%] mt-[5%] px-2 bottom-0">
            reset your password
          </button>
        </div>
        <span className="relative top-[50%] text-[#707070] ">
          You can be assured, this email was sent to you by{" "}
          <span className="text-[#F7AD21]">Signature</span>
        </span>

        <div className="absolute right-0 top-[60%] block w-[50%]">
          <Link>
            <span className="block text-start text-[#21A3E8]">
              I didn’t request the code?
            </span>
          </Link>

          <span className="text-left block text-[#707070]">
            If so, please consider this email as irrelevant,
          </span>
          <span className="text-left block text-[#707070]">
            Or
            <button className="bg-[#DDE2D2] px-3 m-1 rounded-full">
              click here
            </button>{" "}
            for Identity check
          </span>
        </div>
        <div className="relative top-[80%] left-[-17%] h-5 justify-between w-[80%] text-[#21A3E8]">
          <span className="font-[25px] font-semibold">
            Check ID / Help / Not me /
          </span>
        </div>
        <div>
          <span className="top-[85%] right-[10%] absolute text-[#707070] text-lg">
            This message is for
            <span className="text-[#F7AD21] ">@realjeanbenil</span>
          </span>
        </div>
      </div>

      <img src="icons/rcurtain.png" className="w-15 h-32 " />

      <div className="absolute bottom-0 block text-center pr-16 w-[100%]">
        JBLSignature © 2020 All rights reserved{" "}
      </div>
    </div>
  );
};

export default Password_Reset;
