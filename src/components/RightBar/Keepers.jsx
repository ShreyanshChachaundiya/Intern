import React from "react";
import "./Keepers.css";

const Keepers = () => {
  return (
    <div className="keepers">
      <div className="head_k">
        <span>Your Keepers</span>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/girl.png" className="k_img" />
          <span className="o_span">@JustineLoved</span>
        </div>

        <div className="inbox">
          <button className="k_button">Inbox Your Keeper</button>
        </div>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/ktwo.png" className="k_img" />
          <span className="o_span">@NightShift</span>
        </div>

        <div className="inbox">
          <button className="k_button">Inbox Your Keeper</button>
        </div>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/kthree.png" className="k_img" />
          <span className="o_span">@Mickey Mouse</span>
        </div>

        <div className="inbox">
          <button className="k_button">Inbox Your Keeper</button>
        </div>
      </div>

      <div className="head_k">
        <span>keepers You may know</span>
      </div>

      <div className="one">
        <div className="one_one">
          <img src="icons/kfour.png" className="k_img" />
          <span className="o_span">@Jhon major</span>
        </div>

        <div className="inbox1">
          Keep Up
        </div>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/kfive.png" className="k_img" />
          <span className="o_span">@Easy-E</span>
        </div>

        <div className="inbox1">
          Keep Up
        </div>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/ksix.png" className="k_img" />
          <span className="o_span">@Miss-posie</span>
        </div>

        <div className="inbox1">
          Keep Up
        </div>
      </div>
      <div className="one">
        <div className="one_one">
          <img src="icons/kseven.png" className="k_img" />
          <span className="o_span">@Mickey Mouse</span>
        </div>

        <div className="inbox1">
          Keep Up
        </div>
      </div>
    </div>
  );
};

export default Keepers;
