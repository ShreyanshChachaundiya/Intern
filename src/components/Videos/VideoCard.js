import React, { useContext, useRef, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { AuthContext } from "../../shared/context/auth-context";
import DeleteConfirmation from "../../shared/modal/DeleteConfirmation";

const VideoCard = ({ video, setId, setCaption, setVideo, setIsOpen }) => {
  const [data, setData] = useState(video);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const date = new Date(data?.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const auth = useContext(AuthContext);
  const token = auth.token;
  const userId = auth.userId;
  const id = video?._id;

  const handleLike = async () => {
    // Handle like functionality
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/videos/${auth.userId}/${data?._id}`,
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
    setData(res.video);
  };

  const handleDislike = () => {
    // Handle dislike functionality
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    setCaption(data.caption);
    setVideo();
    setId(id);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/videos/delete/${id}`,
      {
        method: "DELETE",
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
    console.log("Success");
    setShowConfirmation(false);
    window.location.reload("/videos");
  };

  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-[100%] rounded overflow-hidden shadow-lg">
      <div className="flex flex-row gap-2">
        <img src="/icons/man.png" alt="Profile" className="p-2 pl-5 " />
        <div className="text-left flex flex-col py-1 text-xs font-normal">
          <div className="flex gap-5">
            <span className="text-lg font-semibold">{data?.name}</span>
            <span className="text-red-600 font-normal text-lg">Follow</span>
          </div>
          <span className="text-xs text-gray-500 font-semibold">
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div style={{ position: "relative" }}>
          <video
            ref={videoRef}
            // src={videoUrl}
            // src="/videos/testing.mp4"
            // publicId={data?.publicId}
            height="100%"
            width="100%"
            onClick={handlePlay}
            className="h-[24rem]"
            style={{ objectFit: "cover" }}
          >
            <source
              src={`https://res.cloudinary.com/dijd86cbs/video/upload/${data?.filename}`}
              type="video/mp4"
            />
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <FiPlayCircle size={48} color="gray" />
            </button>
          )}
        </div>
        <div className="flex justify-between mb-2 align-bottom ">
          <div className="text-gray-800 text-end justify-end align-bottom w-full h-[100%] flex">
            111m views
          </div>
        </div>
        <div className="flex justify-start mb-5">
          <span className="text-md font-semibold text-left">
            {data?.caption}
          </span>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleLike}
            className="bg-gray-200 text-black px-4 py-2 rounded flex gap-2 align-middle"
          >
            <img src="../icons/like.png" className="pt-[2px]" />
            {data?.likes.length}
          </button>
          <button
            onClick={handleDislike}
            className="bg-gray-200 text-black px-4 py-2 rounded flex gap-2 align-middle"
          >
            <img src="../icons/message1.png" className="pt-[2px]" />
            28k
          </button>

          <button
            onClick={handleDislike}
            className="bg-gray-200 text-black px-4 py-2 rounded flex gap-2 align-middle"
          >
            <img src="../icons/flag.png" />
            14k
          </button>
        </div>
        {showConfirmation && (
          <DeleteConfirmation onDelete={handleDelete} onCancel={handleCancel} />
        )}
      
        {video.user === userId && (
          <div className="flex justify-end gap-10 pt-3">
            <span
              className="text-gray-500 cursor-pointer"
              onClick={() => {
                handleEdit();
              }}
            >
              Edit{" "}
            </span>
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => {
                setShowConfirmation(true);
              }}
            >
              delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
