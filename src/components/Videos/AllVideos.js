import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoForm from "./VideoForm";
import { AuthContext } from "../../shared/context/auth-context";

const AllVideos = () => {
  const [videos, setVideos] = useState();
  const user = useContext(AuthContext);
  const token = user.token;

  const handleVideos = async () => {
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/videos/get/videos",
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
    setVideos(res.videos);
    console.log(res.videos);
  };


  useEffect(()=>{
    handleVideos();
  },[]);


  return (
    <div className="absolute left-[27%] top-16 w-[35%] ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          Videos
        </h2>
        <div>
          <VideoForm />
        </div>
      </div>
      <div className="flex flex-col gap-10">
       {videos?.map((video)=>{
          return <VideoCard video={video}/>
       })}
      </div>
    </div>
  );
};

export default AllVideos;
