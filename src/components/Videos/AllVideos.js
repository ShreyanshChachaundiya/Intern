import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoForm from "./VideoForm";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const AllVideos = () => {
  const [videos, setVideos] = useState();
  const user = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const token = user.token;

  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleVideos = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
    setVideos(res.videos);
    console.log(res.videos);
  };

  useEffect(() => {
    handleVideos();
  }, []);

  return (
    <div className="absolute left-[27%] top-16 w-[35%] ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          Videos
        </h2>
        <div>
          <VideoForm
            openModal={openModal}
            closeModal={closeModal}
            isOpen={isOpen}
            caption={caption}
            setIsOpen={setIsOpen}
            setCaption={setCaption}
            video={video}
            setVideo={setVideo}
            id={id}
          />
        </div>
      </div>
      <div className="">
        {isLoading && (
          <div className="absolute left-[40%] top-[-20%]">
            <Loader />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-10">
        {videos?.map((video) => {
          return (
            <VideoCard
              video={video}
              setId={setId}
              setCaption={setCaption}
              setVideo={setVideo}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllVideos;
