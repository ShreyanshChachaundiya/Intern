import React from "react";
import {format} from "timeago.js"

const MidComp = ({ own, item }) => {
  return (
    <div className="">
      <div className={` flex ${own ? "justify-end" : "justify-start"}`}>
        <img
          src="icons/man.png" // Replace with the path to the avatar image
          alt="Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex flex-col">
          <div
            className={`rounded-lg p-2 shadow ${
              own ? "justify-end bg-gray-200 " : "justify-end bg-blue-400"
            }`}
          >
            <p className="mb-1 w-[25rem] text-left">{item?.content}</p>
          </div>
          <span
            className={`text-xs text-gray-500 ${
              own ? "text-right" : "text-left"
            }`}
          >
            {format(item.timestamp)} {/* Display the time elapsed */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MidComp;
