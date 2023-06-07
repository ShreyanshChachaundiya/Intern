import React from "react";
import NewsSlider from "./NewsSlider";
import NewsAll from "./NewsAll";

const NewsMid = () => {
  return (
    <div className="w-[38%] absolute left-[26%] top-16 h-[100vh]">
      <NewsAll/>
    </div>
  );
};

export default NewsMid;
