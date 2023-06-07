import React from "react";
import BlogPageMid from "../../components/Blogs/BlogPageMid";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";

const BlogPage = () => {
  return (
    <div >
      <Navbar />
      <LeftBar />
      <BlogPageMid />
      <RightBar />
    </div>
  );
};

export default BlogPage;
