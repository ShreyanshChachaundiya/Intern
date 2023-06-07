import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useParams } from "react-router-dom";

const ShopCard = () => {
  return (
    <div>
      <div className="max-w-[220px] rounded overflow-hidden  h-[19rem] bg-[#fcf9f9]">
        <img
          className=" rounded-2xl"
          src="https://picsum.photos/230"
          alt="Error"
        />
        <div className="px-2 py-0">
          <div className="font-bold text-xl mb-1 text-left">A rolex</div>
          <p className="text-gray-700 text-base text-left">22</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
