import React from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
function Socialplanner() {
  const now = 60;
  return (
    <div style={{ backgroundColor: "#f0f5fc", height: "80vh" }}>
      <div
        style={{
          padding: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            padding: "5%",
          }}
        >
          <h1 style={{ fontSize: "x-large", textAlign: "center" }}>
            Manage Your Social Media In One Place
          </h1>
          <div style={{ diplay: "flex", width: "40%", marginLeft: "30%" }}>
            <div>
              <div style={{ marginTop: "6%" }}>
                <p style={{ color: "skyblue" }}>Manage Social Accounts</p>
                <p style={{ width: "100%", fontSize: "small", color: "grey" }}>
                  Keep your social presence active by publishing posts across
                  multiple social media networks at once!
                </p>
                <p style={{ fontSize: "small", color: "grey" }}>
                  We recommend adding 2 social accounts to start with.
                </p>
                <div>
                  <div>
                    {" "}
                    <Card body style={{ width: "100%", height: "63px" }}>
                      <div style={{ display: "flex" }}>
                        <img
                          src="https://social-media-posting-prod.web.app/assets/icon-fb.e07f1245.svg"
                          style={{ width: "16%", height: "30px" }}
                        />
                        <img
                          style={{ width: "16%", height: "30px" }}
                          src="https://social-media-posting-prod.web.app/assets/icon-instagram.f10e66d8.svg"
                        />
                        <img
                          style={{ width: "16%", height: "30px" }}
                          src="https://social-media-posting-prod.web.app/assets/icon-gmb.ed0fd9d0.svg"
                        />
                        <img
                          src="https://social-media-posting-prod.web.app/assets/icon-linkedin.b5bb9567.svg"
                          style={{ width: "16%", height: "30px" }}
                        />
                        <img
                          src="https://social-media-posting-prod.web.app/assets/icon-twitter.f99e1830.svg"
                          style={{ width: "16%", height: "30px" }}
                        />
                      </div>
                    </Card>
                  </div>

                  <div style={{ marginTop: "5%" }}>
                    <p style={{ color: "grey" }}>
                      Save Time By Scheduling Posts
                    </p>
                    <p style={{ fontSize: "small", color: "grey" }}>
                      Ensure your social channels remain active by scheduling
                      posts in advance!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="success"
            style={{ width: "10%", marginLeft: "88%", borderRadius: "19%" }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Socialplanner;
