import React, { useContext } from "react";
import LeftBar from "../../components/Leftbar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HashtagPosts from "../../components/Hashtags/HashtagPosts";


const Hastag2 = () => {
    const {hashtag}=useParams();
   
  return (
    <div>
      <Navbar />

      <div className="aleft">
        <LeftBar />
      </div>

      <div className="amid">
        <HashtagPosts hashtag={hashtag}/>
      </div>
      <div className="aright">
        <RightBar />
      </div>
      <div className="lfte">
        <div className="lfoot">
          <div>
            <img src="icons/man.png" className="imgf" />
            <span>Jean-beni Lauterfed</span>
            <img src="icons/tick.png" />
          </div>
          <Link className="flink">
            <div>
              Log out <span> </span> <img src="icons/log.png" />{" "}
              <img src="icons/out.png" />
            </div>
          </Link>
        </div>

        <div className="rfoot">
          <div>
            <span className="rs">
              cookies/developer/search/about/Terms/Groups/Marketing/Shop/Import
            </span>
            <div className="amer">
              <span>Jobs/Languages/Press/Location</span>
              <img src="icons/america.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hastag2;
