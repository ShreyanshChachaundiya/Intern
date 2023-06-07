import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Signature_Platform from "./Pages/Signature_Platform";
import Account_Delete from "./Pages/Account_Delete";
import New_Password from "./Pages/New_Password";
import LogIn from "./Pages/LogIn";
import Main from "./Pages/Main";
import Password_Reset from "./Pages/Password_Reset";
import Account_Paused from "./Pages/Account_Paused";
import Profile from "./Pages/Profile";
import Main2 from "./Pages/Main2";
import Block from "./Pages/Block";
import Kids from "./Pages/Kids";
import PasswordReset from "./Pages/PasswordReset";
import PasswordReset2 from "./Pages/PasswordReset2";
import PwordReset from "./Pages/PwordReset";
import Identity from "./Pages/Identity";
import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useEffect, useState } from "react";
import Email_Reset from "./Pages/Email_Reset";
import Error from "./Pages/Error";
import Hastag from "./Pages/Hashtags/Hastag";
import Hastag2 from "./Pages/Hashtags/Hastag2";
import { PostContext } from "./shared/context/PostContextUtil";
import LatestNews from "./Pages/News/LatestNews";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import BlogPage from "./Pages/Blogs/BlogPage";
import ShopAll from "./Pages/Shop/ShopAll";
import Product from "./Pages/Shop/Product";
import Videos from "./Pages/Videos/videos";
import VideoPicker from "./shared/Video/VideoPicker";


function App() {
  const [token, setToken] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [post, setPost] = useState();
  const [name, setName] = useState(null);
  const [userName, setUserName] = useState();
  const [role, setRole] = useState(null);

  const login = useCallback((uid, token, name, userName, role) => {
    setToken(token);
    setUserId(uid);
    setName(name);
    setUserName(userName);
    setRole(role);
    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: uid, token: token, name:name, userName:userName, role:role })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      // setUserId(storedData.userId);
      login(storedData.userId, storedData.token, storedData.name, storedData.userName, storedData.role);
    }
  }, [login]);

  const handleLike = async ({ auth, data }) => {
    // console.log(data?._id);
    console.log(auth);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/${auth}/${data?._id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }
    setPost(res.post);
  };

  let routes;
  if (!!token) {
    routes = (
      <Routes>
        <Route path="/" element={<LogIn />} exact />
        <Route path="/hashtags/:hashtag" element={<Hastag2/>} />
        <Route path="/news/latestNews" element={<LatestNews/>} />
        <Route path="/reset-Password/:id/:token" element={<New_Password/>}/>
        <Route path="/Forgot_Password" element={<Email_Reset/>}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/ALL/Hashtags" element={<Hastag/>} />
        <Route path="/blogs/All" element={<AllBlogs/>} />
        <Route path="/blog/:id" element={<BlogPage/>} />
        <Route path="/shops/All" element={<ShopAll/>} />
        <Route path="/shop/:id" element={<Product/>} />
        <Route path="/videos" element={<Videos/>} />


        <Route path="/main2" element={<Main2/>}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/reset-Password/:id/:token" element={<New_Password />} />
        <Route path="/Forgot_Password" element={<Email_Reset />} />
        {/* <Main /> */}
        {/* <Password_Reset/> */}
        {/* <Account_Paused /> */}
        {/* <Profile/> */}
        <Route path="/main2" element={<Main2 />} />
        <Route path="/error" element={<Error />} />
        {/* <Main2 /> */}
        {/* <Block/> */}
        {/* <Kids/> */}
        {/* <Route path="/" element={<PasswordReset2/> } /> */}
        {/* <PasswordReset/> */}
        {/* <PasswordReset2/> */}
        {/* <PwordReset/> */}
        {/* <Identity/> */}
      </Routes>
    );
  }

  return (
    <div className="App bg-[#fcf9f9] h-[300vh]">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          name:name,
          role:role,
          login: login,
          logout: logout,
        }}
      >
        {/* <PostContext.Provider
          value={{
            post: post,
            likes: post?.likes ? post.likes.length : "0",
            handleLike: handleLike,
          }}
        > */}
        <BrowserRouter>{routes}</BrowserRouter>
        {/* </PostContext.Provider> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
