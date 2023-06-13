import React, { useContext, useEffect, useState } from "react";
import BlogsCard from "../../shared/card/BlogsCard";
import MyComponent from "./MyComponent";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const BlogMid = () => {
  const [blogs, setBlogs] = useState();
  const auth = useContext(AuthContext);
  const token = auth.token;
  const [isLoading, setIsLoading] = useState(false);

  const res = async () => {
    setIsLoading(true)
    const responce = await fetch("https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/blogs/get/blogs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res=await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }
    setIsLoading(false);
    setBlogs(res.blogs);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div className="w-[42%] absolute left-[24%] top-16 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          Trending Blogs
        </h2>
        <MyComponent />
      </div>
      <div className="flex flex-wrap justify-between">
      <div className="">{isLoading&&<div className="absolute left-[40%] top-[-20%]"><Loader/></div>}</div>
      
       {blogs?.map((blog)=>(
        <BlogsCard blog={blog}/>
       ))}

      </div>
    </div>
  );
};

export default BlogMid;