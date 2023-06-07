import React from "react";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import BlogMid from "../../components/Blogs/BlogMid";

const AllBlogs = () => {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <BlogMid/>
      <RightBar />
    </div>
  );
};

export default AllBlogs;
