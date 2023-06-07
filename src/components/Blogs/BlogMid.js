import React, { useContext, useEffect, useState } from "react";
import BlogsCard from "../../shared/card/BlogsCard";
import MyComponent from "./MyComponent";
import { AuthContext } from "../../shared/context/auth-context";

const BlogMid = () => {
  const [blogs, setBlogs] = useState();
  const auth = useContext(AuthContext);
  const token = auth.token;

  const res = async () => {
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
    console.log("Success");
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

       {blogs?.map((blog)=>(
        <BlogsCard blog={blog}/>
       ))}

      </div>
    </div>
  );
};

export default BlogMid;