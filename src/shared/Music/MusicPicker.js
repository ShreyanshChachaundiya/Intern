import React, { useState } from "react";

const MusicPicker = ({ setIsMusic }) => {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicChange = (event) => {
    const file = event.target.files[0];
    setSelectedMusic(file);
    setIsMusic(true);
  };

  return (
    <div>
      <input
        id="MusicInput"
        type="file"
        accept="Music/*"
        className="hidden"
        onChange={handleMusicChange}
      />
      <div className="flex items-center justify-center w-full h-40 border-2 border-gray-300 rounded-md">
        {selectedMusic ? (
          <audio
            className="w-full h-full object-cover"
            src={URL.createObjectURL(selectedMusic)}
            //controls
          />
        ) : (
          <label
            htmlFor="MusicInput"
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
            <span className="ml-2 text-lg">Upload a Music</span>
          </label>
        )}
      </div>
    </div>
  );
};

export default MusicPicker;
