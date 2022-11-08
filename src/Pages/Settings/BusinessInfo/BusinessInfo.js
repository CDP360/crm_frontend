import React from "react";
import "./styles/businessinfo.scss";

import Button from "@mui/material/Button";

function BusinessInfo() {
  return (
    <div
      className="main1"
      // style={{
      //   background: "#d5ecf23d",
      //   height: "100%",
      //   paddingLeft: "20px",
      //   paddingRight: "20px",
      //   paddingTop: "45px",
      // }}
    >
      <div className="container-one">
        <div style={{ width: "48%" }}>
          <div
            className="card"
            style={{
              width: "100%",
            }}
          >
            <div
              // classNameName="card-header-cont"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <h2>Company Data</h2>
              <div>
                <span>Location ID v56oIaomeyBeZkpcRIWi</span>
              </div>
            </div>
            <div
              className="main-one"
              // style={{ height: "200px", padding: "20px 30px", height: "665px" }}
            >
              <div style={{ display: "flex" }}>
                <div className="box">+</div>
                <div style={{ marginLeft: "5%" }}>
                  <p>Company Logo</p>
                  <p className="para-one">The proposed size is 350px * 180px</p>
                  <p className="para-two">no bigger than 2.5mb</p>
                  <button className="button">Change</button>
                  <button className="button" style={{ marginLeft: "5%" }}>
                    Remove
                  </button>
                </div>
              </div>
              <div>
                <p>Company Name</p>
                <input placeholder="OL" className="input-shadow" />
              </div>
              <div>
                <p>Company Email</p>
                <input
                  placeholder="company email"
                  className="input-box"
                  // style={{
                  //   width: "92%",
                  //   height: "29px",
                  //   border: "1px solid grey",
                  // }}
                />
              </div>
              <div>
                <p>Company Phone</p>
                <input
                  placeholder="78966678686"
                  className="input-box"
                  // style={{ width: "92%", height: "29px" }}
                />
              </div>
              <div>
                <p>Company Website</p>
                <input
                  placeholder="Company Website"
                  className="input-box"
                  // style={{ width: "92%", height: "29px" }}
                />
              </div>
              <div>
                <p>Company Niche</p>
                <input
                  type="dropdown"
                  placeholder="Company Website"
                  className="input-box"
                  // style={{ width: "92%", height: "29px" }}
                />
              </div>
              <div>
                <button className="button-update">Update</button>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "100%",
              marginBottom: "20px",
              marginTop: "6%",
            }}
          >
            <div
              // classNameName="card-header-cont"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <h2>Call & Voicemail Settings</h2>
            </div>
            <div style={{ height: "491px", padding: "20px 30px" }}>
              <p style={{ fontSize: "small", color: "grey" }}>
                This is the default voicemail message for all Twilio numbers in
                the location unless customized under Team Management settings.
              </p>
              <div style={{ fontSize: "small", color: "grey" }}>
                <p>
                  This voicemail message will be played instead of the one by
                  phone carrier. We recommend a timeout of 20 seconds or less.
                </p>
              </div>
              <div>
                <p>Incoming Call Timeout</p>
              </div>
              <div>
                <p className="para">
                  We will record a voicemail if call isn't answered before this
                  duration
                </p>
              </div>
              <div className="box-one">
                <p>no timeout</p>
                <p>10secs</p>
                <p>20secs</p>
              </div>
              <div className="box-two">
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      marginLeft: "23%",
                      color: "blue",
                      marginTop: "4%",
                    }}
                  >
                    Upload
                  </p>
                  <p style={{ marginTop: "4%" }}>mp3/wavfile</p>
                </div>
              </div>
              <div>
                <Button variant="contained" className="save">
                  Save Call Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "48%" }}>
          <div
            className="card"
            style={{
              width: "100%",
              marginBottom: "20px",
              height: "523px",
            }}
          >
            <div
              // classNameName="card-header-cont"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <p style={{ marginTop: "3%" }}>Company Address</p>
            </div>
            <div style={{ paddingLeft: "3%" }}>
              <p>Address</p>
              <input placeholder="OL" className="input-box" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "65%" }}>
                  <p>City</p>
                  <input placeholder="Lidcombe" className="input-box" />
                </div>
                <div style={{ marginRight: "6%" }}>
                  <p>Zip Code</p>
                  <input placeholder="2141" className="input-box" />
                </div>
              </div>
              <p>State / Prov / Region *</p>
              <input placeholder="NSW" className="input-box" />
              <div>
                <p>Country</p>
                <input placeholder="Australia" className="input-box" />
              </div>
              <div>
                <p>Time Zone *</p>
                <input
                  placeholder="GMT+11:00 Australia/sydney"
                  className="input-box"
                />
              </div>
              <div>
                <button className="button-update">Update Address</button>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <div
              // classNameName="card-header-cont"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <h2>General</h2>
            </div>
            <div style={{ height: "344px", padding: "20px 30px" }}>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Allow Duplicate Contact
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Allow Duplicate Opportunity
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Merge Facebook Contacts By Name{" "}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Disable Contact Timezone{" "}
                </p>
              </div>

              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  {" "}
                  Mark Emails as Invalid due to Hard Bounce{" "}
                </p>
              </div>

              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Validate Phone numbers when first SMS is sent to a new contact{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <div
              // classNameName="card-header-cont"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <h2>Enable / Disable Deprecated Features</h2>
            </div>
            <div style={{ height: "187px", padding: "5px 30px" }}>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p style={{ marginLeft: "3%", marginTop: "3%" }}>
                  Enable Campaigns
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" className="check" />
                <p style={{ marginLeft: "3%", marginTop: "3%" }}>
                  Enable Triggers
                </p>
              </div>
              <div>
                <Button variant="contained" className="update">
                  Update
                </Button>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "100%",
              marginBottom: "20px",
              height: "227px",
            }}
          >
            <div
              // classNameName="card-header-cont"

              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #f2f7fa",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <h2>Missed Call Text Back</h2>
            </div>
            <div style={{ height: "136px", padding: "20px 30px" }}>
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  className="check"
                  style={{ width: "3%" }}
                />
                <p
                  style={{
                    marginLeft: "3%",
                    fontSize: "small",
                    marginTop: "3%",
                  }}
                >
                  Enable missed call text back
                </p>
              </div>
              <button className="savemissed">
                save missedcall text settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
