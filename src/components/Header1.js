import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="navbarContainer1 ">
      <div>
        <img src="icons/Signature.png" />
      </div>
      <div className="search_nav">
        <img src="icons/Search.png" />
        <input
          type="text"
          className="input"
          placeholder="Search Signature..."
        />
      </div>
      <div className="flex-[1.2]">
        <div className="small_c">
          <div className="small">
            <span className="mx-1 text-[#F7E93C]">Profile</span>
            <span className="">
              <img src="icons/man.png" className="icon" />
            </span>
          </div>

          <div className="flex gap-14 justify-end flex-[0.8]">
            <div className="small">
              <span className="text-[#6BC5F5]">Mail box</span>
              <span>
                <img src="icons/message.png" className="icon" />
              </span>
            </div>

            <div className="small">
              <span>
                <img src="icons/liveblack.png" className="icon" />
              </span>
            </div>

            <div className="small">
              <span className="text-[#F7E93C]">buddies</span>
              <span>
                <img src="icons/torch.png" className="icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
