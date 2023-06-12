import React, { useContext, useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import MusicForm from "./MusicForm";
import { AuthContext } from "../../shared/context/auth-context";

const AllMusics = () => {
  const [musics, setMusics] = useState();
  const user = useContext(AuthContext);
  const token = user.token;

  const handleMusics = async () => {
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

    setMusics(res.musics);
    console.log(res.musics);
  };

  useEffect(()=>{
    handleMusics();
  },[]);


  return (
    <div className="absolute left-[27%] top-16 w-[35%] ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
          Musics
        </h2>
        <div>
          <MusicForm />
        </div>
      </div>
      <div className="flex flex-col gap-10">
       {musics?.map((music)=>{
        return <MusicCard music={music}/>
       })}
       {/* <MusicCard/> */}
      </div>
    </div>
  );
};

export default AllMusics;
