import React, { useState } from "react";

const VideoPicker = ({ setIsVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    setIsVideo(true);
  };

  return (
    <div>
      <input
        id="videoInput"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleVideoChange}
      />
      <div className="flex items-center justify-center w-full h-40 border-2 border-gray-300 rounded-md">
        {selectedVideo ? (
          <video
            className="w-full h-full object-cover"
            src={URL.createObjectURL(selectedVideo)}
            //controls
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
  );
};

export default VideoPicker;
