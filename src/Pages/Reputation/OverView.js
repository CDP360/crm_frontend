import React from "react";
import Dot from "../../assests/dot.png";
import Navi from "../../assests/navigation.png";
import Star from "../../assests/star.png";
import Up from "../../assests/up.png";
import HappyFace from "../../assests/happyFace.png";
import SadFace from "../../assests/sadFace.png";
import RedArrow from "../../assests/redarrow.png";

function OverView() {
  return (
    <div
      style={{
        padding: "15px",
        overflow: "auto",
        backgroundColor: "#f0f5fc",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "15px",
          textAlign: "end",
        }}
      >
        <button
          style={{
            backgroundColor: "#42c41d",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          Send Review Request
        </button>
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
              Invites Goal
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
          <div
            style={{
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          >
            <img src={Navi} style={{ width: "10%" }} />
            <h1
              style={{
                fontSize: "50px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              0
            </h1>
            <p style={{ color: "#a7a8a7", marginTop: "auto" }}>
              Your current goal is to send 20 review requests!
            </p>
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
              Reviews Received
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
          <div
            style={{
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          >
            <img src={Star} style={{ width: "10%" }} />
            <h1
              style={{
                fontSize: "50px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              0
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Up}
                style={{ width: "20px", height: "20px", marginTop: "1%" }}
              />
              <p
                style={{
                  marginTop: "auto",
                  color: "#22a122",
                  fontSize: "20px",
                }}
              >
                {" "}
                + 0.00%
              </p>
            </div>
          </div>
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
              Avg. Rating
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
          <div
            style={{
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          >
            <img src={Star} style={{ width: "5%" }} />
            <h1
              style={{
                fontSize: "50px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              0
            </h1>
            <div>
              <img src={Star} style={{ width: "2%" }} />
              <img src={Star} style={{ width: "2%" }} />
              <img src={Star} style={{ width: "2%" }} />
              <img src={Star} style={{ width: "2%" }} />
              <img src={Star} style={{ width: "2%" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <img
                src={Up}
                style={{ width: "20px", height: "20px", marginTop: "1%" }}
              />
              <p
                style={{
                  marginTop: "auto",
                  color: "#22a122",
                  fontSize: "20px",
                }}
              >
                {" "}
                + 0.00%
              </p>
            </div>
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
            <p style={{ marginTop: "auto", marginBottom: "auto" }}>Sentiment</p>
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
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>Positive</p>
              <img src={HappyFace} style={{ width: "50%" }} />
              <h1
                style={{
                  fontSize: "30px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                0
              </h1>
              <div
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
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Negative</p>
              <img src={SadFace} style={{ width: "50%" }} />
              <h1
                style={{
                  fontSize: "30px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                0
              </h1>
              <div
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
              </div>
            </div>
          </div>
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
              Invite Trends
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
        <div style={{ backgroundColor: "white", width: "49%" }}>
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
