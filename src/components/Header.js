import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbarContainer">
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
      <div className="small_c">
        <div className="small">
          <span className="">
            {/* <img src="icons/v.png" className="vicon icon " /> */}
            <img src="icons/man.png" className="icon" />
          </span>
          <span>JeanBenil</span>
        </div>
        <div className="small">
            <span>
              <img src="icons/home.png" className="icon" />
            </span>
            <span>Home</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/vidur.png" className="icon" />
          </span>
          <span>Society</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/message.png" className="icon" />
          </span>
          <span>Post</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/bell.png" className="icon" />
          </span>
          <span>Pins</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/cookies.png" className="icon" />
          </span>
          <span>Transfer</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/Moments.png" className="icon" />
          </span>
          <span>Memories</span>
        </div>
        <div className="small">
          <span>
            <img src="icons/torch.png" className="icon" />
          </span>
          <span>Keepers</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
