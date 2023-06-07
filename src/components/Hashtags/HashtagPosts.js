import React, { useEffect, useState } from "react";
import Card from "../../shared/card/Card";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import PostContextUtil from "../../shared/context/PostContextUtil";

const HashtagPosts = ({ hashtag }) => {
  const [posts, setPosts] = useState();
  const user = useContext(AuthContext);

  const token = user.token;

  const handlePost = async () => {
    // console.log(hashtag);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/get/${hashtag}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      return new Error(res.message);
    }
    setPosts(res.posts);
    console.log(posts);
  };

  useEffect(() => {
    handlePost();
  }, []);

  return (
    <div className="top-16 absolute left-[23%]">
      <h2 className="text-2xl font-bold mb-5 text-left text-[#b122d3]">
        Explore
      </h2>
      <div className="flex flex-col absolute  gap-5 ">
        {posts?.map((item, index) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default HashtagPosts;
