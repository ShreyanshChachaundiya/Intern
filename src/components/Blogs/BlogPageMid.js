import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const BlogPageMid = () => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const token = auth.token;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleData = async () => {
    setIsLoading(true);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/blogs/get/blogs/${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }
    setIsLoading(false);
    setData(res.blog);
  };

  useEffect(() => {
    handleData();
  },[]);

  return (
    <div className="w-[45%] absolute left-[21%] top-16  px-2">
      <div className="">
        {isLoading && (
          <div className="absolute left-[40%] top-[-20%]">
            <Loader />
          </div>
        )}
      </div>
      {!isLoading&&<div>
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          {data?.title}
        </h2>
        <div className="max-w-full rounded-lg overflow-hidden flex gap-1">
          <div className="relative">
            <img
              src="https://picsum.photos/200/"
              alt="Blog"
              className="w-[600px] h-[250px] inline-block"
            />
          </div>
        </div>
        <div className="p-1 w-[100%]">
          <p className="text-gray-600 text-left"> {data?.body}</p>
        </div>

        <div className="flex text-left flex-col">
          <span>-{data?.name} </span> <span>{data?.date}</span>
        </div>
      </div>}
    </div>
  );
};

export default BlogPageMid;
