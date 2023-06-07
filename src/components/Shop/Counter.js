import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count-1<=0?setCount(1):setCount(count - 1);
  };

  return (
    <div className="flex w-[30%] justify-between pt-3 ">
      <button
        onClick={handleDecrement}
        className="minus-button bg-white text-gray-500 border-4 border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center"
      >
        <span className="text-5xl font-semibold text-gray-500 text-center flex pb-[12px]">
          -
        </span>
      </button>
      <span className="text-3xl font-semibold">{count>=0&&count<10?"0"+count:count}</span>
      <button
        onClick={handleIncrement}
        className="minus-button bg-white text-red-500 border-4 border-red-500 rounded-full  w-10 h-10 flex items-center justify-center"
      >
        <span className="text-3xl font-semibold text-red-500 text-center flex pb-[6px]">
          +
        </span>
      </button>
    </div>
  );
};

export default Counter;
