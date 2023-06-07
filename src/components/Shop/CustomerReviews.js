import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "../../shared/card/ReviewCard";
import { AuthContext } from "../../shared/context/auth-context";

const CustomerReviews = ({id}) => {
  const [reviews,setReviews] = useState();
  const user = useContext(AuthContext);
  const token = user.token;

  const allReviews = async () => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/reviews/get/reviews/${id}`,
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
      const validationErrors = {};
      validationErrors.check = "invalid input passed check your inputs";
      throw new Error(res.message);
    }
    setReviews(res.reviews);
  };
 
  useEffect(()=>{
      allReviews();
  },[])

  return (
    <div>
      <h1 className="text-left font-semibold text-2xl pt-4 pb-5">
        Cutsomer Reviews
      </h1>
      <div className="flex flex-col gap-11">
        {reviews?.map((review)=>(
          <ReviewCard review={review}/>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
