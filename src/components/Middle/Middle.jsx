import React, { useState } from "react";
import Place from "./Place";
import "./Middle.css";
import Sign from "./Sign";
import Loader from "../../shared/Loader";

const Middle = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="middle">
      <div className="">
        {isLoading && (
          <div className="absolute left-[40%] top-[-20%]">
            <Loader />
          </div>
        )}
      </div>

      <Place setIsLoading={setIsLoading} />
      <Sign />
    </div>
  );
};

export default Middle;
