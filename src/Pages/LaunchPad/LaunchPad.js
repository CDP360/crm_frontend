import React from "react";
import "./styles/launchpad.scss";
import android from "../../assests/android.png";
import home from "../../assests/home.svg";
import facebook from "../../assests/facebook.svg";
import comment from "../../assests/chat.svg";
import stripe from "../../assests/stripe.png";
import word from "../../assests/wordpress.jpg";

function Launchpad() {
  return (
    <div className="main">
      <div>
        <h1 className="container-model-one">
          Let's get you on the path to success
        </h1>
      </div>
      <div className="card">
        <div className="container1">
          <img src={android} className="android" alt="" />
          <p className="para-one">
            Download our app and engage with your leads on the go!
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={home} alt="" className="home" />
          <p className="para-two">
            Generate more leads from Google My Business! Monitor and reply to
            GMB conversations & reviews.
          </p>
          <button className="buttonone">Send link</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={facebook} alt="" className="facebook" />
          <p className="para-three">
            Connect directly with prospects and customers via Messenger in
            Conversation and sync your Facebook leads with our CRM.
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={comment} alt="" className="comment" />
          <p className="para-four">
            Generate leads from your website by connecting webchat widget.
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={stripe} alt="" className="stripe" />
          <p className="para-five">
            Connect your Stripe account to start accepting payments. (Existing
            stripe API integration will continue to work, but it is advised to
            use Stripe Connect for more security)
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1">
          <img src={word} alt="" className="word" />
          <p className="para-six">
            Move your WordPress site to our blazing fast and affordable hosting
          </p>
          <button className="buttonone">Connect</button>
        </div>
      </div>
      <div className="card">
        <div className="container1"></div>
      </div>
    </div>
  );
}

export default Launchpad;
