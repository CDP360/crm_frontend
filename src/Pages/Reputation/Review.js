import React from "react";
import Oops from "../../assests/sorry.png";
import "./styles/request.scss";

function Review() {
  return (
    <div className="request-container">
      {/* <div className="request-button-container">
        <button className="request-button">Send Review Request</button>
      </div> */}

      <div className="request-body-container">
        <h3>Oops</h3>
        <img className="oops-image" src={Oops} />
        <p>You have not sent any review request yet</p>
        <p>Start by setting up your reviews</p>
      </div>
    </div>
  );
}

export default Review;
