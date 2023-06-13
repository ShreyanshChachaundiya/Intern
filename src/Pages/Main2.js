import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import Loader from "../shared/Loader";

const Main2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [audio, SetAudio] = useState("");
  const [formerrors, setFormErrors] = useState("");
  const [formerrors1, setFormErrors1] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    date: "",
    month: "",
    year: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const auth = useContext(AuthContext);
  const initial = {
    name: "",
    password: "",
  };
  const [formValues1, setFormValues1] = useState(initial);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormValues1({ ...formValues1, [name]: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const Playit = () => {
    new Audio("icons/audio.mpeg").play();
    // audio.play();
  };
  const Stopit = () => {
    audio.pause();
  };
  useEffect(() => {
    Playit();
  }, []);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/signup",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.firstName + " " + formValues.lastName,
          userName: formValues.userName,
          email: formValues.email,
          password: formValues.password,
          dob: formValues.date + "-" + formValues.month + "-" + formValues.year,
          gender: formValues.gender,
        }),
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      console.log(res);
      setIsLoading(false)

      if (res.status === 422) {
        const errors = {};
        errors.validation = "invalid credentials passed";
        setFormErrors(errors);
      }
      // if (res.status === 500) {
      //   const errors = {};
      //   // navigate(`/main/${res.userId}`);
      //   navigate("/main");
      // }
      throw new Error(res.message); //default js object
    }
    console.log(res);
    // navigate(`/main/${res.userId}`);
    setIsLoading(false);
    navigate("/main");
    auth.login(res.userId,res.token,res.name,res.userName,res.role);
  };

  const handleLog = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/loginByName",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formValues1.name,
          password: formValues1.password,
        }),
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      console.log(res);

      if (res.status === 401) {
        const errors = {};
        errors.validation = "invalid credentials passed";
        setFormErrors1(errors);
      }
      throw new Error(res.message); //default js object
    }
    console.log(res);
    auth.login(res.userId,res.token,res.name,res.userName);
    // navigate(`/main/${res.userId}`);
    setIsLoading(false)
    navigate("/main");
  };

  return (
    <div className=" flex flex-col align-middle overflow-y-hidden">
      <img
        src="icons/background.png"
        className="object-fill absolute w-[100%] h-screen z-0"
      />
      <img src="icons/mainlogo.png" className="absolute left-3" />
      <img
        src="icons/phone.png"
        className="h-[20vh] w-[5%] bottom-0 absolute z-10 left-4"
      />
      <img
        src="icons/app.png"
        className="h-[6vh] w-[6%] bottom-2 absolute z-10 left-[10%]"
      />
      <img
        src="icons/play.png"
        className="h-[6vh] w-[6%] bottom-2 absolute z-10 left-[20%]"
      />
      <div className="w-[5%] bottom-4 left-4 absolute z-10 text-xs">
        Find <span className="text-[#D6A078] ">signature</span> in your app
        store
      </div>
      <img
        src="icons/make.png"
        alt="logo_error"
        className="absolute right-[8.5%] top-[0.7vh]"
      />

      <div className="relative inline top-[7vh] w-[55%] h-24 left-[23%] text-[25px] text-[#D6A078] ">
        WELCOME TO SIGNATURE, A WORLD OF YOUR OWN
      </div>
      <img
        src="icons/finalLogo.png"
        className="absolute inline w-[5%] top-[14%] left-[48%] h-[15%] "
      />

      <div className="relative right-[-76%] w-[17%] top-[-13vh]">
        <div className="flex">
          <img src="icons/earthr.gif" alt="error" className="z-30" />
          <img
            src="icons/megaphone.png"
            alt="error"
            className="h-[25%] w-[40%] relative right-[10%] top-14"
          />
        </div>
        <div className="relative top-[-15vh] ">
          <img
            src="icons/bubble.png"
            alt="error"
            className="w-[400px] h-[50%] z-0"
          />
          <span className="relative top-[-120px] text-[10px] text-[#ffff] p-6 items-center">
            <span className="text-[#D6A078]"> Signature </span>means being Home
            meet Friends, Family. Strangers, share News, Stories, send a
            Message, Videos, Photos, Money and more, with whom you wish!
          </span>
         
        </div>
        
      </div>

      <div className="z-20 w-[20%] relative left-[39%] top-[-50vh]">
        <img src="icons/brick.png" alt="error" />
      </div>
      {/* <Loader/> */}

      <div className="absolute left-[10%] top-[-30%]">
        {isLoading&&<Loader/>}
      </div>
     

      <div className="top-[-100vh] left-[-35%] z-10 relative flex flex-col gap-5">
        <form onSubmit={handleLog}>
          <div className="gap-3 relative">
            <div className="left-0 relative ">
              <span className="mr-[200px] text-white">Name</span>{" "}
              <span className="relative left-[-5%] text-white">password</span>{" "}
            </div>
            <input
              type="text"
              className="m-4 rounded-full"
              name="name"
              value={formValues1.name}
              onChange={handleChange1}
            />
            <input
              type="password"
              className="rounded-full"
              name="password"
              value={formValues1.password}
              onChange={handleChange1}
            />
          </div>
          <div className="relative top-[0vh]">
            <button
              className="mr-28 text-[#ffff] bg-[#387BD5] rounded-full px-5 py-1"
              type="submit"
            >
              Sign in
            </button>
            <span className="text-white">
              forgot password <img src="icons/Question.png" />
            </span>
            <span className="absolute text-red-500 top-7">
              {formerrors1.validation}
            </span>
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <div className=" relative flex flex-col justify-start w-[35%] left-[36%] top-[0vh]">
            <div className="flex gap-3">
              <input
                className="w-[30%] rounded-full px-1"
                placeholder="first name"
                name="firstName"
                formValues={formValues.firstName}
                onChange={handleChange}
              />
              <input
                className="w-[30%] rounded-full px-1"
                placeholder="last name"
                name="lastName"
                formValues={formValues.lastName}
                onChange={handleChange}
              />
              <input
                className="w-[30%] rounded-full px-1"
                placeholder="userName"
                name="userName"
                value={formValues.userName}
                onChange={handleChange}
              />
            </div>
            <div className="my-2 relative items-start w-[80%] px-1 flex gap-7">
              <input
                type="email"
                placeholder="Email"
                className="rounded-full"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="text-white">Your Birthday</span>
            </div>
            <div className="my-2 relative items-start flex justify-start align-middle  gap-2">
              <input
                type="password"
                className="rounded-full items-start px-2 mr-4"
                placeholder="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <input
                type="number"
                className="w-[12%]  rounded-full px-1"
                placeholder="dd"
                name="date"
                value={formValues.date}
                onChange={handleChange}
              />
              <input
                type="number"
                className="w-[12%]  rounded-full px-2 "
                placeholder="mm"
                name="month"
                value={formValues.month}
                onChange={handleChange}
              />
              <input
                type="number"
                className="w-[18%]  rounded-full px-2 "
                placeholder="yyyy"
                name="year"
                value={formValues.year}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start gap-36">
              <button
                className="bg-[#A0C347] text-[#ffff] rounded-full px-2 w-[30%] py-1"
                type="submit"
              >
                Sign up
              </button>
              <span>
                <input
                  type="text"
                  placeholder="gender"
                  className="w-[40%] px-2 rounded-full "
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                />
                <span className="text-[#12A0D5]">*optional</span>
              </span>
            </div>
          </div>
          <span className="text-red-600">{formerrors.validation}</span>
        </form>
      </div>

      <div className="absolute bottom-[5%] w-[55%] right-0 text-[10px] text-start">
        <span className="text-blue-300">
          Log in / Sign up / #Hashtags / Videos / Music / Podcast / Stream /
          Chat / News / Messaging / Platform / Blog / Games / Signature for Kids
          /
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
  );
};

export default Main2;
