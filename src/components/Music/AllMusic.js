import React, { useContext, useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import MusicForm from "./MusicForm";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const AllMusics = () => {
  const [musics, setMusics] = useState();
  const user = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const token = user.token;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMusics = async () => {
    setIsLoading(true);
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/musics/get/musics",
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
    setMusics(res.musics);
    console.log(res.musics);
  };

  useEffect(() => {
    handleMusics();
  }, []);

  return (
    <div className="absolute left-[27%] top-16 w-[35%] ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          Musics
        </h2>

        <div>
          <MusicForm
            openModal={openModal}
            closeModal={closeModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            id={id}
            title={title}
            artist={artist}
            setTitle={setTitle}
            setArtist={setArtist}
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
        {musics?.map((music) => {
          return (
            <MusicCard
              music={music}
              setId={setId}
              setTitle={setTitle}
              setArtist={setArtist}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllMusics;
