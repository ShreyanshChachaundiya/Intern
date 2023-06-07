import React from "react";
import "./image_Card.css";

const Image_Card = () => {
  return (
    <div className="img_card">
      <div className="story">
        <img src="../icons/lion.png" className="background" />
        <img src="../icons/man.png" className="profile" />
        <div className="spannn">
          <span>JeanBenn</span><img src="../icons/tick.png" className="tick"/>
        </div>
      </div>
      <div className="story">
        <img src="../icons/two.png" className="background" />
        <img src="../icons/twoo.png" className="profile" />
        <div className="spann">
          <span>MickeyMou</span>
        </div>
      </div>
      <div className="story">
        <img src="../icons/three.png" className="background" />
        <img src="../icons/threee.png" className="profile" />
        <div className="spann">
          <span>Jean-Ben</span><img src="../icons/tick.png" className="tick"/>
        </div>
      </div>
      <div className="story">
        <img src="../icons/four.png" className="background" />
        <img src="../icons/fourr.png" className="profile" />
        <div className="spann">
          <span>Jean-Benni</span>
        </div>
      </div>
      <div className="view">
        <li>
          <span>view</span>

          <span>more</span>
        </li>
      </div>
    </div>
  );
};

export default Image_Card;
