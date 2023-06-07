import React from "react";

const NewsCard = (props) => {
  return (
    <div className="flex mt-4 justify-between w-full">
      <div>
        <img src="https://picsum.photos/120" className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-around w-[70%] ">
        <div>
          <span className="text-left inline-block  font-semibold font-medium">
           {props.item.review}
          </span>
        </div>
        <div className="text-left flex flex-start gap-5">
          <span className="text-red-500 font-semibold">{props.item.type}</span>
          <span>• 8 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
