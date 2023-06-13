import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { PostContext } from "../context/PostContextUtil";
import Loader from "../Loader";

const Card = ({ item }) => {
  const [user, setUser] = useState();
  const auth = useContext(AuthContext);
  const postData = useContext(PostContext);
  const [isLoading, setIsLoading] = useState(false);
  const token = auth.token;
  const userId = auth.userId;
  const [post, setPost] = useState();

  const handleLike = async () => {
    // console.log(data?._id);
    console.log(auth);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/${userId}/${item?._id}`,
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
    setPost(res.post);
  };

  const handleUser = async () => {
    // console.log(hashtag);
    setIsLoading(true);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/${item.user}`,
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
      return new Error(res.message);
    }
    setIsLoading(false);
    setUser(res.user);
  };

  const handlePost = async () => {
    console.log(item.id);
    setIsLoading(true)
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/get/post/${item.id}`,
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
      return new Error(res.message);
    }
    setIsLoading(false)
    setPost(res.posts);
  };

  useEffect(() => {
    handleUser();
    handlePost();
  }, []);
  return (
    <div className="w-[33rem] mb-0 border border-gray-300 px-5 py-5">
      <div>
        {" "}
        {isLoading && (
          <div className="absolute top-[-80%] left-[280%]">
            <Loader />
          </div>
        )}
      </div>
      
      <div className="stop flex flex-col">
        <div className="flex gap-2">
          <div>
            <img src="../../icons/man.png" />
          </div>
          <div className="flex flex-col ">
            <div>
              <span className="">
                {user?.name ? user.name : ""}{" "}
                <img src="../../icons/tick.png" className="inline" />
              </span>
            </div>
            <div className="flex justify-start">
              <span className="">
                {user?.userName ? "@" + user.userName : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="text-left h-fit">
          <span>{item.description}</span>
        </div>
        <div className="flex gap-12 mt-2">
          <Link className="">
            <div
              className="flex"
              onClick={() => {
                handleLike();
              }}
            >
              <img src="../icons/like.png" />
              <span>{post?.likes ? post.likes.length : "0"}</span>
            </div>
          </Link>

          <Link className="">
            <div className="flex">
              <img src="../icons/emoji.png" />
              <span>{item.comments ? item.comments.length : "81"}</span>
            </div>
          </Link>
          <Link className="">
            <div className="flex">
              <img src="../icons/Recommend.png" />
              <span>81</span>
            </div>
          </Link>
          <Link className="">
            <div className="flex">
              <img src="../icons/wow.png" />
              <span>81</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
