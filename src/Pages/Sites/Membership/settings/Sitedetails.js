import React from "react";
import { useNavigate } from "react-router-dom";
import Left from "../../../../assests/left.png";
import Tick from "../../../../assests/tick.png";
// import Right from "../../../../assests/right.png";
import Accordion from "react-bootstrap/Accordion";
// import Clipboard from "../../../../assests/clipboard-check.svg";
import CodeMirror from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { useState } from "react";
import Code from "../../../../assests/code.svg";
import Image from "../../../../assests/image.svg";
import Dropdown from "react-bootstrap/Dropdown";

const Sitedetails = () => {
  const navigate = useNavigate();
  const [headerCode, SetHeaderCode] = useState(true);
  const [footerCode, SetFooterCode] = useState(false);

  const headerCodeShow = () => {
    SetHeaderCode(!headerCode);
    SetFooterCode(false);
  };
  const footerCodeShow = () => {
    SetFooterCode(!footerCode);
    SetHeaderCode(false);
  };
  return (
    <div style={{ marginTop: "2%", padding: "2rem 2rem 15rem 2rem" }}>
      <div
        onClick={() => navigate("/sites/membership/settings")}
        style={{ display: "flex" }}
      >
        <img
          style={{ width: "1.5rem", height: "1.5rem" }}
          src={Left}
          alt="Left"
        />
        <p
          style={{
            color: "#3182ce",
            fontWeight: "400",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Settings
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "600", color: "#4a5568" }}
          >
            Site Details
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <button
            style={{
              width: "5rem",
              height: "2.5rem",
              background: "#2d8cf0",
              border: "#2d8cf0",
              color: "white",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // alignItems: "center",
              }}
            >
              <img
                style={{ width: "1rem", height: "1rem", marginTop: "0.65rem" }}
                src={Tick}
                alt="Tick"
              />
              <p style={{ marginTop: "0.5rem" }}>Save</p>
            </div>
          </button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "30%" }}>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#515a6e",
              marginTop: "2rem",
            }}
          >
            Site Info
          </p>
          <p style={{ color: "#515a6e", fontSize: "14px", marginTop: "-1rem" }}>
            Edit your site title and subdomain.
          </p>
        </div>
        <div
          style={{
            width: "60%",
            padding: "2rem",
            borderRadius: "0.25rem",
            background: "white",
            color: "#515a6e",
          }}
        >
          <div>
            <div>
              <p>Title</p>
            </div>
            <div>
              <input
                style={{
                  width: "100%",
                  height: "32px",
                  padding: "4px 7px",
                  fontSize: "14px",
                  color: "#515a6e",
                  cursor: "text",
                  border: "1px solid #dcdee2",
                }}
                type="text"
              />
            </div>
          </div>
          <div>
            <div style={{ paddingTop: "0.65rem" }}>
              <p> Subdomain </p>
            </div>
            <div>
              <input
                style={{
                  width: "100%",
                  height: "32px",
                  padding: "4px 7px",
                  fontSize: "14px",
                  color: "#515a6e",
                  cursor: "text",
                  border: "1px solid #dcdee2",
                }}
                type="text"
              />
            </div>
          </div>
          <div style={{ paddingTop: "0.65rem" }}>
            <div>
              <p> Support Email </p>
            </div>
            <div>
              <input
                style={{
                  width: "100%",
                  height: "32px",
                  padding: "4px 7px",
                  fontSize: "14px",
                  color: "#515a6e",
                  cursor: "text",
                  border: "1px solid #dcdee2",
                }}
                type="text"
              />
            </div>
          </div>
          <div style={{ paddingTop: "0.65rem" }}>
            <div>
              <p> Support Phone Number </p>
            </div>
            <div>
              <input
                style={{
                  width: "100%",
                  height: "32px",
                  padding: "4px 7px",
                  fontSize: "14px",
                  color: "#515a6e",
                  cursor: "text",
                  border: "1px solid #dcdee2",
                }}
                type="text"
              />
            </div>
          </div>
          <div style={{ paddingTop: "0.5rem" }}>
            <p> Magic Link </p>
            <p>
              <span style={{ fontSize: "0.875rem", fontWeight: "300" }}>
                No magic link found, create one to provide easy login access.
              </span>
            </p>
            <button
              style={{
                color: "#2d8cf0",
                border: "1px solid #2d8cf0",
                background: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <span style={{ fontWeight: "400" }}>Generate</span>
              <span> Magic Link</span>
            </button>
          </div>
          <hr />

          <Accordion className="chatwidget-accordion">
            <Accordion.Item eventKey="0" className="chatwidget-accordion-item">
              <Accordion.Header>
                <span className="chatwidget-accordion-header">Advanced</span>
              </Accordion.Header>
              <Accordion.Body className="chatwidget-accordion-body">
                <div>
                  <div>
                    <p
                      style={{
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        color: "#515a6e",
                      }}
                    >
                      Custom JS
                    </p>
                    <CodeMirror
                      style={{
                        width: "30rem",
                        height: "20rem",
                        background: "black",
                      }}
                      options={{
                        mode: "jsx",
                        theme: { darcula },
                        height: "200px",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        color: "#515a6e",
                      }}
                    >
                      Custom CSS
                    </p>
                    <CodeMirror
                      style={{
                        width: "30rem",
                        height: "20rem",
                        background: "black",
                      }}
                      options={{
                        mode: "jsx",
                        theme: { darcula },
                        height: "200px",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        color: "#515a6e",
                      }}
                    >
                      Tracking Code
                    </p>
                    <div style={{ display: "flex" }}>
                      <div
                        onClick={headerCodeShow}
                        style={{ display: "flex", cursor: "pointer" }}
                      >
                        <img src={Code} alt="Code" />
                        <p
                          style={{
                            marginTop: "0.85rem",
                            marginLeft: "0.5rem",
                            fontSize: "14px",
                            color: "#515a6e",
                          }}
                        >
                          header Code
                        </p>
                      </div>
                      <div
                        onClick={footerCodeShow}
                        style={{
                          marginLeft: "2rem",
                          display: "flex",
                          cursor: "pointer",
                        }}
                      >
                        <img src={Code} alt="Code" />
                        <p
                          style={{
                            marginTop: "0.85rem",
                            marginLeft: "0.5rem",
                            fontSize: "14px",
                            color: "#515a6e",
                          }}
                        >
                          Footer Code
                        </p>
                      </div>
                    </div>
                    <hr style={{ marginTop: "-0.5rem" }} />
                    {headerCode ? (
                      <CodeMirror
                        style={{
                          width: "30rem",
                          height: "20rem",
                          background: "black",
                        }}
                        options={{
                          mode: "jsx",
                          theme: { darcula },
                          height: "200px",
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    {footerCode ? (
                      <CodeMirror
                        style={{
                          width: "30rem",
                          height: "20rem",
                          background: "blue",
                        }}
                        options={{
                          mode: "jsx",
                          theme: { darcula },
                          height: "200px",
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
        </div>
      </div>
      <hr />

      <div
        style={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%" }}>
          <p
            style={{ fontSize: "1.25rem", fontWeight: "600", color: "#515a6e" }}
          >
            Branding
          </p>
          <p style={{ color: "#515a6e", fontSize: "14px", marginTop: "-1rem" }}>
            Choose the logo and favicon for your site.
          </p>
        </div>
        <div
          style={{
            width: "60%",
            fontSize: "14px",
            color: "#515a6e",
            background: "white",
            paddingLeft: "1.5rem",
            paddingTop: "2rem",
            paddingBottom: "3rem",
            borderRadius: "5px",
          }}
        >
          <div>
            <p> Logo </p>
          </div>
          <div
            style={{
              display: "block",
              border: "1px solid #e2e8f0",
              width: "33.333333%",
              padding: "0.5rem",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <img style={{ maxWidth: "100%" }} src={Image} alt="Image" />
          </div>
          <div>
            <p>Recommended dimensions of 640x640</p>
          </div>
          <div>
            <Dropdown style={{ marginLeft: "-0.75rem" }}>
              <Dropdown.Toggle variant="light" className="sites-dropdown">
                Select Image
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Upload a New File</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <p> Favicon </p>
          </div>
          <div
            style={{
              display: "block",
              border: "1px solid #e2e8f0",
              width: "5rem",
              padding: "0.5rem",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <img style={{ maxWidth: "100%" }} src={Image} alt="Image" />
          </div>
          <div>Recommended dimensions of 32x32</div>
          <div>
            <Dropdown style={{ marginTop: "0.85rem", marginLeft: "-0.75rem" }}>
              <Dropdown.Toggle
                // style={{ width: "1rem" }}
                variant="light"
                className="sites-dropdown"
              >
                Select Image
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item style={{ width: "1rem" }}>
                  Upload a New File
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1.5rem",
        }}
      >
        <button
          style={{
            width: "5rem",
            height: "2.5rem",
            background: "#2d8cf0",
            border: "#2d8cf0",
            color: "white",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              // alignItems: "center",
            }}
          >
            <img
              style={{ width: "1rem", height: "1rem", marginTop: "0.65rem" }}
              src={Tick}
              alt="Tick"
            />
            <p style={{ marginTop: "0.5rem" }}>Save</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sitedetails;
