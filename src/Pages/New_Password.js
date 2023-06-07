import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";

const New_Password = () => {
  const [readMore, setReadMore] = useState(true);
  const [readLess, setReadLess] = useState(false);
  const navigate=useNavigate();

  const initialValues = { password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [strong, setStrong] = useState(false);

  const {id , token}=useParams();
  

    const handleValid=async ()=>{
        const responce = await fetch(
            `https://backend-project-gof1ee915-shreyanshchachaundiya.vercel.app/api/users/reset-password/${id}/${token}`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
            }
          );
          const res = await responce.json();
          console.log(res);
          if(res.status===201){
            console.log("verified");
          }else{
            navigate("/error");
          }
    }

    useEffect(()=>{handleValid()},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password" && value.length > 8) {
      setStrong(true);
    } else if (name === "password") {
      setStrong(false);
    }
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setFormErrors(null)
    setFormErrors(validate(formValues));
    console.log(formErrors);
    if(formErrors.length===0){
       alert("error")
    }else{
      const responce = await fetch(
        "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/update-password",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            password: formValues.password,
          }),
        }
      );
  
      const res = await responce.json();
      if (!responce.ok) {
        console.log(res);
  
        if (res.status === 401 ||res.status === 500) {
          const errors = {};
          errors.password = "invalid credentials";
          setFormErrors(errors);
        }
  
        throw new Error(res.message); //default js object
      }
      console.log(res);
      navigate("/");
      alert("password set sucessfully");
      // auth.login(res.userId);
      setIsSubmit(true);
    }
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

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8 && !strong) {
      errors.password = "Week";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is Empty";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "doesn't matched";
    }
    return errors;
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleReadMore = () => {
    setReadMore(false);
    setReadLess(true);
  };

  const handleReadLess = () => {
    setReadMore(true);
    setReadLess(false);
  };

  let str =
    "A strong Password, is a safe Password. We recommend you to use at least 4 Letters with Punctuations and numbers combined";

  return (
    <div className="flex justify-between">
      <div className="w-44 h-[40%] flex justify-between">
        <img src="icons/curtain.png" alt="error" />
        <img
          src="icons/logotwo.png"
          alt="error"
          className="h-12 top-3 relative left-5"
        />
      </div>

      <div className="bg-[#F2E9F5] w-[50%] h-[100%] left-[25%] absolute">
        <div className="absolute inline top-[5%] w-[35%] h-24 left-[30%] text-[28px] text-center text-[#707070] ">
          New Password
        </div>
        <img
          src="icons/FinalLogo.png"
          className="absolute inline w-[6%] top-[15%] left-[42%] h-[13%] "
        />
        <div className=" absolute font-[20px] font-normal text-[#707070] w-[50%] text-start left-[24%] top-[32%]">
          {readMore ? (
            <span>
              {/* A strong Password, is a safe Password. We recommend you to use at
            least 4 Letters with Punctuations and numbers combined */}
              {truncateString(str, 70)}
            </span>
          ) : (
            <span>{str}</span>
          )}
          ...
          <span className="text-blue-400 cursor-pointer">
            {readMore ? (
              <span
                onClick={() => {
                  handleReadMore();
                }}
              >
                Read More
              </span>
            ) : (
              <span
                onClick={() => {
                  handleReadLess();
                }}
              >
                Read Less
              </span>
            )}
          </span>
        </div>

        <div className="flex flex-col w-[30%] align-start justify-center left-[24%] relative top-[45%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  align-start left-[0%] relative top-[52%]">
              <span className="block text-start my-4 text-[#707070] ">
                Enter a new Password
              </span>
              <input
                type="password"
                className="my-1 outline-none"
                onChange={handleChange}
                value={formValues.password}
                name="password"
              />
              <span>
                {strong && <span className="text-blue-400">strong</span>}
              </span>
              <span className="text-red-600">{formErrors.password}</span>
              <span className="block my-4 text-start text-[#707070]">
                Re-enter a new password
              </span>
              <input
                type="password"
                className="my-1 mb-3 outline-none"
                onChange={handleChange}
                value={formValues.confirmPassword}
                name="confirmPassword"
              />
              <span className="text-red-500">{formErrors.confirmPassword}</span>
              <button className="justify-start relative bg-[#0FBEFF] w-[40%] px-4 rounded-full my-4 text-[#707070] text-center py-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <img src="icons/rcurtain.png" className="w-44 h-[40%]" />

      <div className="absolute bottom-0 block text-center w-[100%]">
        JBLSignature © 2020 All rights reserved{" "}
      </div>
    </div>
  );
};

export default New_Password;
