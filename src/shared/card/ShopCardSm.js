import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShopCardSm = ({item}) => {
  const {id} =useParams();

  return (
    <div className="max-w-[150px] rounded overflow-hidden  h-[15rem] bg-[#fcf9f9]">
    <img
      className="rounded-2xl"
      src="https://picsum.photos/150"
      alt="Error"
    />
    <div className="px-2 py-0">
      <div className="font-bold text-xl mb-1 text-left">{item.title}</div>
      <p className="text-gray-700 text-left text-xl font-bold">₹{item.cost}</p>
    </div>
  </div>
  )
}

export default ShopCardSm
