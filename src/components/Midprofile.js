import React from "react";

const Midprofile = () => {
  return (
    <div className="relative left-[19%] top-[50px] w-[49%] bg-[#F5F5F5] h-[100vh]">
      <img src="icons/pfad.png" alt="error" className=" w-[100%]" />
     
      <img
        src="icons/man.png"
        alt="error"
        className="w-[17%] absolute left-7 top-[27%] border-4 border-orange-300 rounded-full"
      />

      <div className="w-[70%] left-[25%] relative flex align-middle justify-between">
        <div className="flex flex-col relative ">
          <div className="flex my-1 gap-2">
            <span>Jean-Beni Lauterfeld</span>
            <img src="icons/tick.png" className="w-4" />
          </div>
          <span className="text-[#655F65]">@realJeanBeniL</span>
        </div>
        <button className="rounded-full border-2 border-[#3E18BC] px-2 mt-2 text-[#3E18BC]">
          edit your profile
        </button>
      </div>

      <div className="relative w-[45%] left-[35%] top-[50px] gap-2 flex flex-col">
        <span className="text-left items-start ">
          Husband, Father, world citizen, hard worker
        </span>
        <span className="flex justify-start gap-4">
          <img src="icons/cake.png" /> january/07/95
        </span>
        <span className="flex justify-start gap-3 text-[#3E18BC]">
          <img src="icons/earth1.png" /> Instagram.com/realjeanbeni
        </span>
        <span className="flex justify-start gap-4 text-[#3E18BC]">
          <img src="icons/cake.png" />
          jeanbeni.com
        </span>
        <span className="flex justify-start gap-4">
          <img src="icons/location2.png" />
          Berlin
        </span>
      </div>

      <div className="relative w-[90%] left-[5%] top-[50px] gap-4 flex my-5">
        <div className="border-2 border-black-300 w-[40%] justify-around flex">
          {" "}
          <span>Keepers</span> <span className="text-[#DE931B]">200k</span>
        </div>
        <div className="border-2 border-black-300 w-[40%] justify-around gap-2 flex">
          {" "}
          <span>In touch</span> <span className="text-[#3E18BC]">512,18</span>
        </div>

        <div className="border-0 border-black-300 w-[20%] gap-2 flex">
          <span>
            <img src="icons/location2.png" />
          </span>{" "}
          <span className="text-[#3E18BC]">Berlin</span>
        </div>
        <div className="w-[30%]">here since 2021.</div>
      </div>
    </div>
  );
};

export default Midprofile;
