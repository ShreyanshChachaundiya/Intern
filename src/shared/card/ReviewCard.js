import React, { useEffect, useState } from "react";
import StarReview from "./StarReview";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useParams } from "react-router-dom";

const ReviewCard = ({review}) => {
 
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <div className="flex gap-5 justify-center align-middle">
          <img src="../icons/man.png" />
          <span className="text-lg font-semibold pt-1">{review?.name}</span>
        </div>
        <StarReview rating={review?.rating} handleRatingChange={()=>{}}/>
      </div>
      <div className="mt-5">
        <h1 className="text-lg font-semibold text-left mb-3">
          {review?.title}
        </h1>
        <span className="text-left inline-block text-gray-500 flex">
         {review?.review}
        </span>
      </div>
      <div className="flex justify-between mt-5">
        <div className="bg-gray-200 h-[140px] w-[140px]"></div>
        <div className="bg-gray-200 h-[140px] w-[140px]"></div>
        <div className="bg-gray-200 h-[140px] w-[140px]"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
