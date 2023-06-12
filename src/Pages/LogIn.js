import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";

const LogIn = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const auth = useContext(AuthContext);
  const token = auth.token;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      console.log(res);

      if (res.status === 401) {
        const errors = {};
        errors.password = "invalid credentials";
        setFormErrors(errors);
      }

      throw new Error(res.message); //default js object
    }
    console.log(res);
    // navigate(`/main/${res.userId}`);
    navigate("/main");
    auth.login(res.userId, res.token, res.name, res.userName, res.isAdmin);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  return (
    <div className="h-[200px]">
      <div className="">
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
            <span>
              Log in to your <span className="text-orange-400">Signature</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col w-[30%] align-start justify-center left-[35%] absolute top-[40%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  align-start left-[10%] relative top-[52%]">
              <input
                type="text"
                className="my-5 px-[10%] outline-none w-[70%] h-7 rounded-full"
                name="email"
                placeholder="Email/Username/Mobile"
                onChange={handleChange}
                value={formValues.email}
              />
              <span className="justify-start left-[-18%] relative text-red-500">
                {formErrors.email}
              </span>
              <input
                type="password"
                className="my-5 px-[25%] mb-3 outline-none w-[70%] h-7 rounded-full justify-center"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={formValues.password}
              />
              <span className="left-[-18%] relative text-red-500">
                {formErrors.password}
              </span>

              <button
                className="justify-start relative bg-[#3E88F8] w-[70%] px-4 py-3 rounded-full my-4 text-[#707070] text-center py-1"
                onClick={handleSubmit}
              >
                Log In
              </button>

              <div className="w-[70%] flex justify-between">
                <span className="text-[#3E88F8] w-[44%]">
                  <Link to="/Forgot_Password">
                    <span className="block flex justify-between cursor-pointer">
                      forgot password <img src="icons/Question.png" />
                    </span>
                  </Link>
                </span>
                <button
                  className="bg-[#A0C347] px-4 text-white"
                  onClick={() => navigate("/main2")}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
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

export default LogIn;
