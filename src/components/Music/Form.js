import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const Form = ({ handleClose }) => {
  const auth = useContext(AuthContext);
  const userName = auth.name;
  const [name, setName] = useState(userName);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [isMusic, setIsMusic] = useState(false);
  const [errors, setErrors] = useState({});
  const id = auth.userId;
  const token = auth.token;
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicChange = (event) => {
    const file = event.target.files[0];
    setSelectedMusic(file);
    setIsMusic(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
  
    if (title.trim() === "") {
      validationErrors.title = "title is required";
    }
    if (isMusic === false) {
      validationErrors.Music = "Music is required";
    }
    if (artist.trim() === false) {
      validationErrors.Artist = "Artist is required";
    }
  
    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any further actions
      await add();
      handleClose();
      window.location.reload("/blogs/All");
    } else {
      setErrors(validationErrors);
    }
  };

  const add = async () => {
    const formData = new FormData();
    formData.append("music", selectedMusic);
    formData.append("title",title);
    formData.append("artist",artist);
    const responce = await fetch("https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/musics/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
     body:formData,
    });
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
        <label className="block mb-2 text-lg text-left">Music Upload:</label>
        <div>
      <input
        id="MusicInput"
        type="file"
        accept=".mp3,.mpeg"
        className="hidden"
        name="Music"
        onChange={handleMusicChange}
      />
      <div className="flex items-center justify-center w-full h-10 border-2 border-gray-300 rounded-md">
        {selectedMusic ? (
          <audio
            className="w-full h-full object-cover"
            src={URL.createObjectURL(selectedMusic)}
            controls
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
        {errors.Music && <p className="text-red-500">{errors.Music}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="title">
          title:
        </label>
        <textarea
          className={`w-full p-2 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="artist">
          artist:
        </label>
        <textarea
          className={`w-full p-2 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        ></textarea>
        {errors.artist && <p className="text-red-500">{errors.artist}</p>}
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

