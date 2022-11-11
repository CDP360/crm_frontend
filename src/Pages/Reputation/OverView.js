import React from "react";
import Dot from "../../assests/dot.png";
import Navi from "../../assests/navigation.png";
import Star from "../../assests/star.png";
import Up from "../../assests/up.png";
import HappyFace from "../../assests/happyFace.png";
import SadFace from "../../assests/sadFace.png";
import RedArrow from "../../assests/redarrow.png";
import "./styles/overview.scss";

function OverView() {
  return (
    <div className="overview-main-container">
      <div className="button-container">
        <button className="button-card">Send Review Request</button>
      </div>
      <div className="firstrow-card-container">
        <div className="firstcard-container">
          <div className="firstcard-header">
            <p className="header-content">Invites Goal</p>
            <div className="leftside-header">
              <p className="leftside-content">Last 6 Months</p>
              <img className="leftside-img" src={Dot} />
            </div>
          </div>
          <hr className="underline" />
          <div className="firstcard-body-container">
            <img src={Navi} className="center-image" />
            <h1 className="center-text">0</h1>
            <p className="center-content">
              Your current goal is to send 20 review requests!
            </p>
          </div>
        </div>
        <div className="firstcard-container">
          <div className="firstcard-header">
            <p className="header-content">Reviews Received</p>
            <div className="leftside-header">
              <p className="leftside-content">Last 6 Months</p>
              <img src={Dot} className="leftside-img" />
            </div>
          </div>
          <hr className="underline" />
          <div className="firstcard-body-container">
            <img src={Star} className="center-image" />
            <h1 className="center-text">0</h1>
            <div className="footer-content">
              <img className="footer-image" src={Up} />
              <p className="footer-text"> + 0.00%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="firstrow-card-container">
        <div className="firstcard-container">
          <div className="firstcard-header">
            <p className="header-content">Avg. Rating</p>
            <div className="leftside-header">
              <p className="leftside-content">Last 6 Months</p>
              <img className="leftside-img" src={Dot} />
            </div>
          </div>
          <hr className="underline" />
          <div className="firstcard-body-container">
            <img src={Star} className="center-image" />
            <h1 className="center-text">0</h1>
            <div>
              <img src={Star} className="star-rating" />
              <img src={Star} className="star-rating" />
              <img src={Star} className="star-rating" />
              <img src={Star} className="star-rating" />
              <img src={Star} className="star-rating" />
            </div>
            <div className="footer-content">
              <img className="footer-image" src={Up} />
              <p className="footer-text"> + 0.00%</p>
            </div>
          </div>
        </div>
        <div className="firstcard-container">
          <div className="firstcard-header">
            <p className="header-content">Sentiment</p>
            <div className="leftside-header">
              <p className="leftside-content">Last 6 Months</p>
              <img className="leftside-img" src={Dot} />
            </div>
          </div>
          <hr className="underline" />
          <div className="secondcard-body-container">
            <div className="body-content">
              <p>Positive</p>
              <img src={HappyFace} className="center-image" />
              <h1 className="center-text">0</h1>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  src={Up}
                  style={{ width: "20px", height: "20px", marginTop: "3%" }}
                />
                <p
                  style={{
                    marginTop: "auto",
                    color: "#22a122",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  + 0%
                </p>
              </div> */}
              <div className="footer-content">
                <img className="footer-image" src={Up} />
                <p className="footer-text"> + 0.00%</p>
              </div>
            </div>
            <div className="body-content">
              <p>Negative</p>
              <img src={SadFace} className="center-image" />
              <h1 className="center-text">0</h1>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  src={RedArrow}
                  style={{ width: "20px", height: "20px", marginTop: "3%" }}
                />
                <p
                  style={{
                    marginTop: "auto",
                    color: "red",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  + 0%
                </p>
              </div> */}
              <div className="footer-content">
                <img className="footer-image" src={RedArrow} />
                <p className="footer-textred"> + 0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="firstrow-card-container">
        <div className="firstcard-container">
          <div className="firstcard-header">
            <p className="header-content">
              Invite Trends
            </p>
            <div className="leftside-header">
              <p className="leftside-content">
                Last 6 Months
              </p>
              <img className="leftside-img"
                src={Dot}
                // style={{ width: "30px", height: "30px", marginTop: "3%" }}
              />
            </div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
        </div>
        <div className="firstcard-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <p style={{ marginTop: "auto", marginBottom: "auto" }}>
              Review Trends
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                Last 6 Months
              </p>
              <img
                src={Dot}
                style={{ width: "30px", height: "30px", marginTop: "3%" }}
              />
            </div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ backgroundColor: "white", width: "49%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <p style={{ marginTop: "auto", marginBottom: "auto" }}>
              Latest Review Requests
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                View All
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Invite Sent to</p>
            <p>Email/Phone</p>
            <p>Date Sent</p>
          </div>
        </div>
        <div style={{ backgroundColor: "white", width: "49%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <p style={{ marginTop: "auto", marginBottom: "auto" }}>
              Latest Review
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                View All
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
        </div>
      </div>
    </div>
  );
}

export default OverView;
