import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarReview = ({ rating, onClick, handleRatingChange}) => {
  
  return (
    <div className="flex pt-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleRatingChange(i)}>
          {rating > i ? (
            <AiFillStar fontSize="27px" className="text-yellow-400"/>
          ) : (
            <AiOutlineStar fontSize="27px" className="text-gray-400"/>
          )}
        </span>
      ))}
    </div>
  );
};

export default StarReview;