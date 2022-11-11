import React from "react";
import Pitch from "../../assests/pitch.jpg";

const Wordpress = () => {
  return (
    <div className="wordpress-card">
      <div className="wordpress-card-body">
        <div className="wordpress-img-holder">
          <img className="wordpress-pitch-img" src={Pitch} alt="Pitch" />
          <button className="wordpress-btn">
            <div className="wordpress-btn-holder">
              Get Started <br />
              $14.99/Month
            </div>
          </button>
        </div>
        {/* <button className="wordpress-btn">
          <div className="wordpress-btn-holder">
            <p>Get Started</p>
            <p>$14.99/Month</p>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default Wordpress;
