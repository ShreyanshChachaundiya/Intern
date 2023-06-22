import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useState } from "react";

const ShopCardSm = ({
  item,
  setIsOpen,
  setTitle,
  setCost,
  setId,
  setDescription,
  setCategory,
}) => {
  const  id  = item._id;
  const user = useContext(AuthContext);
  const userId = user.userId;
  const token=user.token;
  const [isLoading, setIsLoading] = useState(false)
  

  const handleEdit = () => {
    setTitle(item.title);
    setDescription(item.description);
    setCost(item.cost);
    setCategory(item.category);
    setId(id);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    const responce = await fetch(`https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/items/delete/${id}`, {
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
    window.location.reload("/shops/All");
  };

  return (
    <div className="max-w-[150px] rounded overflow-hidden  h-[15rem] bg-[#fcf9f9]">
      <img
        className="rounded-2xl"
        src="https://picsum.photos/150"
        alt="Error"
      />
      <div className="px-2 pb-1">
        <div className="font-semibold text-xl mb-1 text-left">{item.title}</div>
        <p className="text-gray-700 text-left text-xl font-semibold">
          ₹{item.cost}
        </p>
      </div>

      <div className="flex gap-5 justify-between ">
        <div>
          <Link to={`/shop/${item?._id}`}>View More</Link>
        </div>
        {item.user===userId&&<div className="flex justify-between gap-5">
          <span
            className="text-gray-500 cursor-pointer"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit{" "}
          </span>
          <span className="text-red-500 cursor-pointer" onClick={() => {handleDelete()}}>
            delete
          </span>
        </div>}
      </div>
    </div>
  );
};

export default ShopCardSm;
