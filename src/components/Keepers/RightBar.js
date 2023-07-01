import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RightUtil from "./RightUtil";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const RightBar = ({ conversation, setChat, setConversation }) => {
  const [data, setData] = useState();
  const [conv, setConv] = useState(conversation);
  const auth = useContext(AuthContext);
  const token = auth.token;
  const user = auth.userId;

  const handleAllUsers = async () => {
    const responce = await fetch(`https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/all`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }

    setData(res.users);
    console.log("hello", conversation);
  };

  const handle = async (item) => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/conversation/check/${user}/${item._id}`,
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

    if (res.conversation[0]) {
      console.log("conv", res.conversation[0]._id);
      setChat(res.conversation[0]);
    } else {
      console.log("adding conv");
      const responce = await fetch(
        "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/conversation/add",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            sender: user,
            reciever: item._id,
          }),
        }
      );

      const res = await responce.json();
      if (!responce.ok) {
        console.log(res);
      }

      setConversation([...conversation, res.conversation]);
    }
  };

  useEffect(() => {
    handleAllUsers();
  }, [conv]);
  return (
    <div className="flex flex-col top-[50px] absolute right-[130px]">
      <ul className="relative">
        <div className="list_item z-20 cursor-pointer flex justify-start align-middle pl-[10%] text-[20px] text-black font-semibold mb-4 mt-2">
          <li>Followers</li>
        </div>
      </ul>
      {data?.map((item) => {
        return (
          <div
            onClick={() => {
              handle(item);
            }}
          >
            <RightUtil data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RightBar;
