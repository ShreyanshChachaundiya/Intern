import React, { useContext, useRef } from "react";
import MidComp from "./MidComp";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { AuthContext } from "../../shared/context/auth-context";

const MidBar = ({ chat }) => {
  //console.log("chat", chat?._id);
  const convId = chat?._id;
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState();
  const [toSend, setToSend] = useState();
  const scrollRef = useRef();
  const auth = useContext(AuthContext);
  const user = auth.userId;
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://backend-project-git-master-shreyanshchachaundiya.vercel.app");

    socket.current.on("getMessage", (data) => {
      console.log("message", data.message);
      setNewMessage({
        convId,
        sender: data.sender,
        content: data.message,
        timestamp: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user);

    socket.current.on("getUser", (users) => {
      console.log("Active users-->", users);
    });
  }, [auth]);

  useEffect(() => {
    console.log("new", newMessage);
    newMessage &&
      chat?.members?.includes(newMessage.sender) &&
      setMessage((prev) => [...prev, newMessage]);
  }, [newMessage]);

  const getMsg = async () => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/message/${convId}`,
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

    setMessage(res.messages);
    console.log(res.messages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("conv",conversation);

    const reciever = chat.members.find((member) => member !== user);

    console.log("reciever");

    socket.current.emit("sendMessage", {
      reciever: reciever,
      sender: user,
      message: toSend,
    });

    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/message/add`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          convId,
          sender: user,
          content: toSend,
        }),
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }
    //console.log(res.message);
    setToSend("");
    setMessage([...message, res.message]);
    //  window.location.reload("/keepers");
  };

  useEffect(() => {
    getMsg();
  }, [chat]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);

  return (
    <div className="absolute left-[20%] w-[48%] top-[8%]">
      {message && (
        <div className="flex absolute flex-col  bg-white w-full h-[30rem] overflow-y-scroll gap-10 p-3">
          {message?.map((item) => {
            return (
              <div ref={scrollRef}>
                <MidComp own={item.sender === user} item={item} />
              </div>
            );
          })}
        </div>
      )}

      {message && (
        <div className="relative top-[30rem]">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div class="flex justify-center items-center gap-3 bg-white">
              <input
                type="text"
                class="border border-gray-300 rounded-l h-[6rem] px-4 py-0 mt-1 focus:outline-none w-full"
                onChange={(e) => {
                  setToSend(e.target.value);
                }}
                value={toSend}
                placeholder="Type your message..."
              />
              <button
                class="bg-blue-500 w-[20%] hover:bg-blue-600 text-white font-bold rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MidBar;
