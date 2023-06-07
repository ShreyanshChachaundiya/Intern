import React from "react";
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import ProductMid from "../../components/Shop/ProductMid";

const Product = () => {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <ProductMid />
      <RightBar />
    </div>
  );
};

export default Product;
