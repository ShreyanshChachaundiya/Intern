import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import CustomerReviews from "./CustomerReviews";
import { AuthContext } from "../../shared/context/auth-context";
import ReviewForm from "./ReviewForm";

const ProductMid = () => {
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const token = auth.token;
  const [data, setData] = useState();
  
  const handleData=async()=>{
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/items/get/items/${id}`,
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
    setData(res.item);
  };

  

useEffect(() => {
  handleData();
});

  return (
    <div className="w-[38%] absolute left-[26%] top-16 h-[100vh]">
      <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
        Product Details
      </h2>
      <div className="w-[100%] justify-center  ">
        <Detail />
      </div>
      <div className="flex justify-between mt-2 align-middle px-2">
        <span className="text-2xl font-semibold h-full text-center py-1 ">
          {data?.title}
        </span>
        <span className="text-3xl text-purple-500 font-bold">₹{data?.cost}</span>
      </div>
      <div className="px-2 text-left mt-2">
        {data?.description}
      </div>
      <div className="px-2">
        <h1 className="text-left font-semibold text-2xl mt-4 mb-5">
          Select Color
        </h1>
        <ColorPicker />
      </div>
      <div className="px-2 my-9 flex justify-between">
        <Counter/>
        <button className="buy-button bg-red-500 py-4 px-16 hover:bg-red-600 text-white text-2xl  rounded-xl">
          Buy Now
        </button>
      </div>
      <div className="pt-2 px-2">
        <CustomerReviews id={id}/>
      </div>
      <ReviewForm item={data}/>
    </div>
  );
};

export default ProductMid;