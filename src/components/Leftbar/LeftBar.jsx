import React from "react";
import "./LeftBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LeftBar = () => {
  const navigate = useNavigate();
  return (
    <div className="leftbar1 absolute">
      <img src="../icons/leftcrt.png" className="crt z-0" />
      <ul className="relative">
        <Link to="/main">
          <div className="list_item z-20 cursor-pointer flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4 mt-2">
            <img
              src="../icons/home1.png"
              alt="error"
              className="h-[25px] mr-[5px]"
            />
            <li>Home</li>
          </div>
        </Link>
        {/* <Link to="">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="icons/Platform.png" className="h-[25px] mr-[5px]" />
            <li>Platform</li>
          </div>
        </Link> */}
        <Link to="/ALL/Hashtags">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/Hashtag.png" className="h-[25px] mr-[5px]" />
            <li>#Hastag</li>
          </div>
        </Link>
        <div
          className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4"
          onClick={() => window.open("https://yummeweb.000webhostapp.com")}
        >
          <img src="../icons/games.png" className="h-[25px] mr-[5px]" />
          <li>Games</li>
        </div>
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../../icons/kids.png" className="h-[25px] mr-[5px]" />
          <li>Signature For Kids</li>
        </div>
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/Stream.png" className="h-[25px] mr-[5px]" />
          <li>Stream</li>
        </div>
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/podcast.png" className="h-[25px] mr-[5px]" />
          <li>Podcasts</li>
        </div>
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/events.png" className="h-[25px] mr-[5px]" />
          <li>Live Events</li>
        </div>
        <Link to="/music">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/music.png" className="h-[25px] mr-[5px]" />
            <li>Music</li>
          </div>
        </Link>
        <Link to="/videos">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/videos.png" className="h-[25px] mr-[5px]" />
            <li>Videos</li>
          </div>
        </Link>
        <Link to="/news/latestNews">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/news.png" className="h-[25px] mr-[5px]" />
            <li>News</li>
          </div>
        </Link>

        {/* <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/Market.png" className="h-[25px] mr-[5px]" />
          <li>Marketing</li>
        </div> */}
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/find.png" className="h-[25px] mr-[5px]" />
          <li>Find More</li>
        </div>
        <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/trends.png" className="h-[25px] mr-[5px]" />
          <li>Trends</li>
        </div>
        {/* <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/location.png" className="h-[25px] mr-[5px]" />
          <li>Locations</li>
        </div> */}
        {/* <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/Features.png" className="h-[25px] mr-[5px]" />
          <li>Features</li>
        </div> */}
        <Link to="/shops/All">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/shop.png" className="h-[25px] mr-[5px]" />
            <li>shop</li>
          </div>
        </Link>
        {/* <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/Ads.png" className="h-[25px] mr-[5px]" />
          <li>Ads</li>
        </div> */}
        <Link to="/blogs/All">
          <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
            <img src="../icons/Blog.png" className="h-[25px] mr-[5px]" />
            <li>Blog</li>
          </div>
        </Link>
        {/* <div className="list_item flex justify-start align-middle pl-[10%] text-[15px] text-[#707070] mb-4">
          <img src="../icons/groups.png" className="h-[25px] mr-[5px]" />
          <li>Groups</li>
        </div> */}
      </ul>
    </div>
  );
};

export default LeftBar;
