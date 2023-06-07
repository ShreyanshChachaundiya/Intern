import React from "react";
import "./Left_Footer.css";
import { Link } from "react-router-dom";

const Left_Footer = () => {
  return (
    <div>
      <div className="lfoot1">
        <div>
          <img src="icons/man.png" className="imgf" />
          <span>Jean-beni Lauterfed</span>
          <img src="icons/tick.png" />
        </div>
        <Link className="flink">
          <div className="util">
            <div> Log out </div>
            <div>
             
              <img src="icons/out.png" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Left_Footer;
