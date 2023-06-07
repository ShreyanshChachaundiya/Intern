import React from "react";
import Left_Footer from "../Left_Footer";

const Leftkid = () => {
  return (
    <div className="z-10">
      <img
        src="icons/leftcrt1.png"
        className="z-10 top-12 absolute h-[70%] w-[33%]"
      />
      <div className="absolute bg-[rgb(232,12,12)] h-[110vh] w-[19%] top-16 z-0 left-1">
        <span className="text-[#D9ABAB]">Categories</span>
      </div>
      <div className="absolute  h-[80vh] w-[19%] top-24 z-10 left-1">
        <div className="flex gap-1 justify-center mb-2 ">
          <button className="bg-[#A4E1F4] text-[#0F77F0] px-1  ">Media</button>
          <button className="bg-[#E6BCBC] text-[#2D965E] px-1 ">Audio</button>
          <button className="bg-[#DEC0EB] text-[#805926] px-1">Learn</button>
          <button className="bg-[#EA6FDC] text-[#F4F405] px-1">Diverse</button>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="flex justify-center gap-2">
            <img src="icons/ilc1.png" alt="error" className="w-[43%]" />
            <img src="icons/ilc2.png" alt="error" className="w-[43%] h-[50%]" />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc3.png" alt="error" className="w-[43%]" />
            <img src="icons/ilc4.png" alt="error" className="w-[43%] h-[50%]" />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc5.png" alt="error" className="w-[43%]" />
            <img src="icons/ilc6.png" alt="error" className="w-[43%] h-[50%]" />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc7.png" alt="error" className="w-[43%]" />
            <img src="icons/ilc8.png" alt="error" className="w-[43%] h-[50%]" />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc9.png" alt="error" className="w-[43%]" />
            <img
              src="icons/ilc10.png"
              alt="error"
              className="w-[43%] h-[50%]"
            />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc11.png" alt="error" className="w-[43%]" />
            <img
              src="icons/ilc12.png"
              alt="error"
              className="w-[43%] h-[50%]"
            />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc13.png" alt="error" className="w-[43%]" />
            <img
              src="icons/ilc14.png"
              alt="error"
              className="w-[43%] h-[50%]"
            />
          </div>
          <div className="flex justify-center gap-2">
            <img src="icons/ilc15.png" alt="error" className="w-[43%]" />
            <img
              src="icons/ilc16.png"
              alt="error"
              className="w-[43%] h-[50%]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-[128vh] z-10 w-[400px] flex">
          <div className="flex w-[180px] gap-2 justify-start align-middle">
            <img src="icons/child.png" className="h-7" />
            <div
              className="border-red-500 border-2 rounded-full px-2 ">
              <span className="text-[#F7E93C]">@Ro-mat</span>
            </div>
          </div>

          <div className="flex gap-2 align-middle w-[120px] items-center">
            <div className="text-[#848372]"> Log out </div>
            <div>
              <img src="icons/red.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftkid;
