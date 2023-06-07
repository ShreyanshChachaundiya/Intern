import React, { useContext, useEffect, useState } from "react";
import "./Place.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Place = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const auth = useContext(AuthContext);
  const token =auth.token;


  const handleSubmit = async () => {
    //console.log(uid);
    const responce = await fetch("https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts", {
      method:"POST",
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body:JSON.stringify({
        user:auth.userId,
        description:value
      })
    });
    const res = await responce.json();

    if(!responce.ok){
      throw new Error(res.message)
    }
    // navigate(`/main/${uid}`);
    window.location.reload();
  };

  return (
    <div className="up">
      <div className="mplace">
        <div className="imgc">
          <img src="icons/man.png" className="mimg" />
        </div>
        <div className="placec">
          <input
            type="text"
            placeholder="Something New ?"
            className="minput"
            name="post"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="but">
        <div className="buticon">
          <div>
            <Link>
              <img src="icons/download.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/gif.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/gthree.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/wow.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/bild.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/location1.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/live1.png" />
            </Link>
          </div>
        </div>

        <div className="butbutd">
          <button className="butbut" onClick={handleSubmit}>
            publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Place;
