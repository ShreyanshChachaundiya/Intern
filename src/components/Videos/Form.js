import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import VideoPicker from "../../shared/Video/VideoPicker";
import Loader from "../../shared/Loader";

const Form = ({ handleClose }) => {
  const auth = useContext(AuthContext);
  const userName = auth.name;
  const [name, setName] = useState(userName);
  const [caption, setCaption] = useState("");
  const [isVideo, setIsVideo] = useState(false);
  const [errors, setErrors] = useState({});
  const id = auth.userId;
  const token = auth.token;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    setIsVideo(true);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "name is required";
    }
    if (caption.trim() === "") {
      validationErrors.caption = "caption is required";
    }
    if (isVideo === false) {
      validationErrors.video = "video is required";
    }

    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any further actions
      await add();
      setIsLoading(false);
      handleClose();
      window.location.reload("/blogs/All");
    } else {
      setIsLoading(false)
      setErrors(validationErrors);
    }
  };
  

  const add = async () => {
    const formData = new FormData();
    formData.append("user", id);
    formData.append("name", name);
    formData.append("video", selectedVideo);
    formData.append("caption", caption);
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/videos/add",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      if (res.status == 422) {
        const validationErrors = {};
        validationErrors.category = "invalid input passed check your inputs";
        setErrors(validationErrors);
        console.log("helo");
      }
      console.log(res.message);
      throw new Error(res.message);
    }
    console.log("Success");
  };

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div>
        {isLoading && (
          <div className="h-1 absolute left-[48%] top-[-29%]">
            <Loader />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="name">
          name:
        </label>
        <input
          className={`w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="name"
          value={name}
          disabled
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-2 text-lg text-left">Video Upload:</label>
        <div>
          <input
            id="videoInput"
            type="file"
            accept="video/mp4,video/ogg"
            className="hidden"
            name="video"
            onChange={handleVideoChange}
          />
          <div className="flex items-center justify-center w-full h-40 border-2 border-gray-300 rounded-md">
            {selectedVideo ? (
              <video
                className="w-full h-full object-cover"
                src={URL.createObjectURL(selectedVideo)}
                controls
              />
            ) : (
              <label
                htmlFor="videoInput"
                className="flex items-center justify-center w-full h-full text-gray-500 cursor-pointer"
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="ml-2 text-lg">Upload a video</span>
              </label>
            )}
          </div>
        </div>
        {errors.video && <p className="text-red-500">{errors.video}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="caption">
          caption:
        </label>
        <textarea
          className={`w-full p-2 border ${
            errors.caption ? "border-red-500" : "border-gray-300"
          }`}
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        {errors.caption && <p className="text-red-500">{errors.caption}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
