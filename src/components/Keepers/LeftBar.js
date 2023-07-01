import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftUtil from "./LeftUtil";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const LeftBar = ({ setChat, conversation, setConversation }) => {
  const auth = useContext(AuthContext);
  const user = auth.userId;

  const getConv = async () => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/conversation/${user}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }

    setConversation(res.conversation);
  };

  useEffect(() => {
    getConv();
  }, [user]);

  return (
    <div className="flex flex-col top-[50px] absolute">
      <img src="../icons/leftcrt.png" className="crt z-0" />
      <ul className="relative">
        <div className="list_item z-20 cursor-pointer flex justify-start align-middle pl-[10%] text-[20px] text-black font-semibold mb-4 mt-2">
          <li>Conversations</li>
        </div>
      </ul>

      {conversation?.map((conv) => {
        return (
          <div
            onClick={() => {
              setChat(conv);
            }}
          >
            <LeftUtil conv={conv} user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default LeftBar;
