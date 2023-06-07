import React from "react";
import Header from "../components/Header";
import Left from "../components/Sign_Components/Left";
import Right from "../components/Sign_Components/Right";
import Mid from "../components/Sign_Components/Mid";
import Left_Footer from "../components/Left_Footer";
import { BrowserRouter } from "react-router-dom";

const Signature_Platform = () => {
  return (
      <div className="signature">
        <Header />
        <div>
          <Left />
        </div>
        <div>
          <Right />
        </div>
        <div>
          <Mid />
        </div>
        <Left_Footer />
      </div>
  );
};

export default Signature_Platform;
