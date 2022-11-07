import React from "react";
import "./LaunchPad.css";
import android from "../../assests/android.png";
import home from "../../assests/home.svg";
import facebook from "../../assests/facebook.svg";
import comment from "../../assests/chat.svg";
import stripe from "../../assests/stripe.png";
import word from "../../assests/wordpress.jpg";

function Launchpad() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:' #f2f7fa',
        marginTop:'20px'
      }}
    >
      <div>
        <h1 style={{ fontSize: "x-large", fontWeight: "500" }}>
          Let's get you on the path to success
        </h1>
      </div>
      <div className="card">
        <div className="container1">
          <img
            src={android}
            alt=""
            style={{ width: "11%", marginLeft: "2%" }}
          />
          <p style={{ fontSize: "small", fontWeight: "300" }}>
            Download our app and engage with your leads on the go!
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={home} alt="" style={{ width: "9%", marginLeft: "2%" }} />
          <p style={{ fontSize: "small", width: "50%", fontWeight: "300" }}>
            Generate more leads from Google My Business! Monitor and reply to
            GMB conversations & reviews.
          </p>
          <button className="buttonone">Send link</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img
            src={facebook}
            alt=""
            style={{ width: "8%", marginLeft: "2%" }}
          />
          <p style={{ fontSize: "small", width: "50%", fontWeight: "300" }}>
            Connect directly with prospects and customers via Messenger in
            Conversation and sync your Facebook leads with our CRM.
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={comment} alt="" style={{ width: "8%", marginLeft: "2%" }} />
          <p style={{ fontSize: "small", width: "50%", fontWeight: "300" }}>
            Generate leads from your website by connecting webchat widget.
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={stripe} alt="" style={{ width: "8%", marginLeft: "2%" }} />
          <p style={{ fontSize: "small", width: "50%", fontWeight: "300" }}>
            Connect your Stripe account to start accepting payments. (Existing
            stripe API integration will continue to work, but it is advised to
            use Stripe Connect for more security)
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={word} alt="" style={{ width: "8%", marginLeft: "2%" }} />
          <p style={{ fontSize: "small", width: "50%", fontWeight: "300" }}>
            Move your WordPress site to our blazing fast and affordable hosting
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
         
        </div>
      </div>
    </div>
  );
}

export default Launchpad;