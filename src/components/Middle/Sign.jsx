import React, { useContext, useEffect, useState } from "react";
import "./Sign.css";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const Sign = () => {
  const [data, setData] = useState({});
  const { uid } = useParams();
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({});
  const token = auth.token;
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    console.log(data?._id);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/${auth.userId}/${data?._id}`,
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
    setData(res.post);
  };

  const res = async () => {
    setIsLoading(true);
    const responce1 = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/${auth.userId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res1 = await responce1.json();
    if (!responce1.ok) {
      throw new Error(res.message);
    }
    setUser(res1.user);

    console.log(auth.userId);
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/${auth.userId}`,
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
      setIsLoading(false);
      throw new Error(res.message);
    }

    setIsLoading(false);
    setData(res.posts[res.posts.length - 1]);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div className="sign">
      <div className="">
        {isLoading && (
          <div className="absolute left-[40%] top-[-100%]">
            <Loader />
          </div>
        )}
      </div>
      {!isLoading&&<div>
        <span className="justify-start flex">Your Signature</span>
        <div className="stop">
          <div>
            <img src="icons/man.png" />
          </div>
          <div>
            <div>
              <span className="stxt">
                {user.name ? user.name : "Jean-Beni Lauterfield"}{" "}
                <img src="icons/tick.png" />
              </span>
            </div>
            <div>
              <span className="stextt">
                {user.userName ? "@" + user.userName : "@realJeanBenil"}
              </span>
            </div>
          </div>
        </div>
        <div className="smid">
          <span>
            {data.description
              ? data.description
              : "My mum just visited us today, the kids are on the moon"}
          </span>
        </div>
        <div className="sbot">
          <Link className="sbd" onClick={handleLike}>
            <div className="sbd">
              <img src="icons/like.png" />
              <span>{data.likes ? data.likes.length : 81}</span>
            </div>
          </Link>

          <Link className="sbd">
            <div className="sbd">
              <img src="icons/emoji.png" />
              <span>{data.comments ? data.comments.length : 81}</span>
            </div>
          </Link>
          <Link className="sbd">
            <div className="sbd">
              <img src="icons/Recommend.png" />
              <span>81</span>
            </div>
          </Link>
          <Link className="sbd">
            <div className="sbd">
              <img src="icons/wow.png" />
              <span>81</span>
            </div>
          </Link>
        </div>
      </div>}
      <span>Keepers Stories</span>
      <div className="stop">
        <div>
          <img src="icons/girl.png" />
        </div>
        <div>
          <div>
            <span className="stxt">
              Justin M. Loved <img src="icons/tick.png" />
            </span>
          </div>
          <div>
            <span className="stextt">@justinLoved</span>
          </div>
        </div>
      </div>
      <div className="smid">
        <span>My mum just visited us today, the kids are on the moon</span>
      </div>
      <div className="sbot1">
        <Link className="sbd">
          <div className="sbd">
            <img src="icons/like.png" />
            <span>811</span>
          </div>
        </Link>

        <Link className="sbd">
          <div className="sbd">
            <img src="icons/emoji.png" />
            <span>700</span>
          </div>
        </Link>
        <Link className="sbd">
          <div className="sbd">
            <img src="icons/Recommend.png" />
            <span>122</span>
          </div>
        </Link>
        <Link className="sbd">
          <div className="sbd">
            <img src="icons/bild.png" />
            <span>82</span>
          </div>
        </Link>
        <Link className="sbd">
          <div className="sbd">
            <img src="icons/message1.png" />
            <span>44</span>
          </div>
        </Link>
        <Link className="sbd">
          <div className="sbd">
            <img src="icons/wow.png" />
            <span>81</span>
          </div>
        </Link>
      </div>
      <div className="sbdiv">
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/like.png" />
          </div>
        </Link>

        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/thumb2.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/thumb3.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/heart.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/bild.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/emoji.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/anger.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/recommend.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/message1.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/wow.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/flag.png" />
          </div>
        </Link>
      </div>
      <div className="stop">
        <div>
          <img src="icons/lie.png" />
        </div>
        <div>
          <div>
            <span className="stxt">Danny Gloves</span>
          </div>
          <div>
            <span className="stextt">@NightShift</span>
          </div>
        </div>
      </div>
      <div className="smid">
        <div>
          Oh my dear <span className="atthe">@JustineLoved</span> I hope you
          will find some sleep tonight! Life and Health are everything.
          Sometimes in life we all must … <Link>Read More</Link>
        </div>
      </div>

      <div className="hello">
        <img src="icons/message1.png" />{" "}
        <span>
          <Link>View More Reactions</Link>
        </span>
      </div>

      <div className="adv">
        <div>
          <div>
            promotion <img src="icons/down.png" />
          </div>
          <img src="icons/mili.png" className="advt" />
          <div className="below">
            <div>
              <img src="icons/thumb2.png" /> 3
            </div>
            <div>
              <img src="icons/message1.png" /> 10
            </div>
            <div>
              <img src="icons/wow.png" /> 5
            </div>
          </div>
        </div>
        <div>
          <div>
            promotion <img src="icons/down.png" />
          </div>
          <img src="icons/advtwo.png" className="advt" />
        </div>
        <div>
          <div>
            promotional <img src="icons/down.png" />
          </div>
          <img src="icons/advthree.png" className="advt" />
          <div className="below">
            <div>
              <img src="icons/like.png" /> 554
            </div>
            <div>
              <img src="icons/heart.png" /> 785
            </div>
            <div>
              <img src="icons/recommend.png" /> 906
            </div>
          </div>
        </div>
        <div>
          <div>
            promotional <img src="icons/down.png" />
          </div>
          <img src="icons/advfour.png" className="advt" />
        </div>
      </div>

      <div className="stop1">
        <div>
          <img src="icons/fff.png" />
        </div>
        <div>
          <div>
            <span className="stxt">Micky Mouse</span>
          </div>
          <div>
            <span className="stextt">@NightShift</span>
          </div>
        </div>
      </div>
      <div className="smid1">
        <span>Signatur is better than any other platform available there.</span>
      </div>
      <div className="sbdiv new">
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/like.png" />
          </div>
        </Link>

        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/thumb2.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/thumb3.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/heart.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/bild.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/emoji.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/anger.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/recommend.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/message1.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/wow.png" />
          </div>
        </Link>
        <Link className="sbd1">
          <div className="sbd1">
            <img src="icons/flag.png" />
          </div>
        </Link>
      </div>
      <div className="space">h</div>
    </div>
  );
};

export default Sign;
