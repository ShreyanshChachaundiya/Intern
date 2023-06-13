import React, { useContext, useEffect, useState } from "react";
import StarReview from "../../shared/card/StarReview";
import { AuthContext } from "../../shared/context/auth-context";

const ReviewForm = ({ item, setIsLoading }) => {
  const [title, setTitle] = useState();
  const [errors, setErrors] = useState();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const user = useContext(AuthContext);
  const token = user.token;
  const name = user.name;

  const handleReview = async () => {
    setIsLoading(true);
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/reviews/add",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          name: name,
          item: item._id,
          rating: rating,
          review: comment,
        }),
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      const validationErrors = {};
      validationErrors.check = "invalid input passed check your inputs";
      setIsLoading(false);
      setErrors(validationErrors);
      throw new Error(res.message);
    }
  };

  const handleRatingChange = (i) => {
    setRating(i + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    await handleReview();
    setIsLoading(false);
    window.location.reload(`/shop/${item._id}`);
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-3">
      <h1 className="text-left font-semibold text-xl mt-10 mb-3">
        Your Review
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <label htmlFor="rating" className="pt-1">
            Rating:
          </label>
          <StarReview rating={rating} handleRatingChange={handleRatingChange} />
        </div>
        <div className="flex align-middle gap-10">
          <label
            htmlFor="comment"
            className="inline-block text-left align-middle pt-3"
          >
            Title:
          </label>
          <input
            id="comment"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            className="w-full px-2"
          />
        </div>
        <div className="flex align-middle gap-5">
          <label
            htmlFor="comment"
            className="inline-block text-left align-middle pt-3"
          >
            Review:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
            className="w-full px-2 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <span>{errors && errors?.check}</span>
      </div>
    </form>
  );
};

export default ReviewForm;
