import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({blog}) => {

  const string =blog.body;
  const newString=string.slice(0,100)+"...";
  const id=blog._id;
  return (
    <div className="max-w-[48.5%] overflow-hidden shadow-lg  mb-8">
      <img
        src="https://picsum.photos/200/"
        alt="Card"
        className="w-full h-[11rem] rounded-3xl"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-lg mb-2 text-left">
         {blog.title}
        </div>
        <p className="text-gray-700 text-left ">{blog.date}</p>
        <div className="font-normal text-md mb-3 mt-2 text-left text-gray-500">
          {newString}
        </div>
        <Link to={`/blog/${id}`}>
          <span className="text-left flex inline-block text-blue-600">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
