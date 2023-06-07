import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Email_Reset = () => {
  const [formErrors, setFormErrors] = useState({});
  const [value, setValue] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/forgot-password",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: value,
        }),
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      console.log(res);

      if (res.status === 401||res.status==500) {
        const errors = {};
        errors.password = "invalid credentials";
        setFormErrors(errors);
      }

      throw new Error(res.message); //default js object
    }
    console.log(res);
    alert(res.message);
  };

  return (
    <div>
      <div className=" ">
        <img
          src="icons/background.png"
          className="object-fill absolute w-[100%] h-screen"
        />
        <img
          src="icons/squareLogo.png"
          alt="error-logo"
          className="absolute z-10 w-[10%] inline left-2 top-[2%]"
        />

        <img
          src="icons/final_logo.png"
          className="absolute inline w-[5%] top-[10%] left-[46%] h-[20%] "
        />
        <div className="absolute text-white block w-[45%] left-[25%] top-[30%] text-center text-[120%]">
          <div>
            <span className="text-[30px]">
              Forgot
              <span className="text-orange-400 text-[30px]"> Password </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col w-[30%] align-start justify-center left-[35%] absolute top-[40%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  align-start left-[10%] relative top-[52%] ">
              <input
                type="text"
                className="my-5 px-[10%] outline-none w-[70%] h-10 rounded-full"
                name="email"
                placeholder="Enter Email"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />

              <button
                className="justify-start relative bg-[#3E88F8] w-[70%] px-4 py-2 rounded-full my-4 text-white text-center py-1"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <span>{formErrors.password}</span>
        </div>

        <div className="absolute bottom-[4%] w-[55%] right-0 text-[10px] text-start">
          <span className="text-blue-300">
            Log in / Sign up / #Hashtags / Videos / Music / Podcast / Stream /
            Chat / News / Messaging / Platform / Blog / Games / Signature for
            Kids /
          </span>
          Search / About / Ads / Groups / Marketing / Shop / Privacy / Help /
          Terms / Cookies / Developers / Jobs / Languages / Press / Location /
          Features / Imprint
        </div>

        <div className="absolute bottom-0 right-0 text-start text-[10px] flex justify-between w-[400px]">
          <div className="">JBLSignature © 2020 All rights reserved</div>
          <div className="text-white flex align-middle ">
            English
            <img src="icons/america.png" className="h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Email_Reset;
