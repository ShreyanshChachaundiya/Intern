import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const BlogsCard = ({ blog, setIsOpen, setTitle, setBody, setId }) => {
  const [isLoading, setIsLoading] = useState(false)
  const string = blog.body;
  const newString = string.slice(0, 100) + "...";
  const id = blog._id;
  const user = useContext(AuthContext);
  const userId = user.userId;
  const token = user.token;

  const handleDelete = async () => {
    const responce = await fetch(`https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/blogs/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await responce.json();
    if (!responce.ok) {
      setIsLoading(false)
      throw new Error(res.message);
    }
    console.log("Success");
    window.location.reload("/blogs/All");
  };

  const handleEdit = () => {
    setTitle(blog.title);
    setBody(blog.body);
    setId(id);
    setIsOpen(true);
  };

  return (
    <div className="max-w-[48.5%] overflow-hidden shadow-lg  mb-8">
      <img
        src="https://picsum.photos/200/"
        alt="Card"
        className="w-full h-[11rem] rounded-3xl"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-lg mb-2 text-left">{blog.title}</div>
        <p className="text-gray-700 text-left ">{blog.date}</p>
        <div className="font-normal text-md mb-3 mt-2 text-left text-gray-500">
          {newString}
        </div>
        <div className="flex justify-between bottom-1">
          <Link to={`/blog/${id}`}>
            <span className="text-left bottom-2 flex inline-block text-blue-600">
              Read More
            </span>
          </Link>
          {userId === blog.user && (
            <div className="flex gap-5 justify-end b">
              <span
                className="text-gray-500 cursor-pointer"
                onClick={() => {
                  handleEdit();
                }}
              >
                Edit{" "}
              </span>
              <span className="text-red-500 cursor-pointer" onClick={()=>{handleDelete()}}>delete</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
