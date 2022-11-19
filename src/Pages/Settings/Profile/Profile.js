import React, { useState } from "react";
import "./styles/Profile.scss";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

function Dashboard() {
  const [notification, setNotification] = useState(true);
  return (
    <div>
      <div style={{ backgroundColor: "white", display: "flex", padding: "1%" }}>
        <p style={{ marginLeft: "2%", color: "black", marginTop: "2%" }}>
          General
        </p>
        <p
          style={{
            color: "grey",
            marginLeft: "2%",
            marginTop: "2%",
            cursor: "pointer",
          }}
          onClick={() => setNotification(false)}
        >
          Notifications
        </p>
      </div>
      {notification ? (
        <>
          <div className="main-dashboard-container">
            <div className="firstrow-card-container"></div>
            <div className="secondrow-card-container">
              <div className="first-card-container">
                <div className="first-cardheader-container">
                  <div>Personal data</div>
                </div>
                <hr className="underline" />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "grey",
                      width: "52%",
                      height: "129px",
                      marginLeft: "7%",
                    }}
                  ></div>
                  <div style={{ marginLeft: "10%" }}>
                    <p style={{ width: "48%", color: "grey" }}>Personal Logo</p>
                    <p style={{ width: "82%", color: "grey" }}>
                      The proposed size is 512*512px no bigger than 2.5mb
                    </p>
                    <div>
                      <Button variant="outline-primary">Change</Button>{" "}
                      <Button
                        variant="outline-secondary"
                        style={{ marginLeft: "3%" }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "2%" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ marginLeft: "7%" }}
                  >
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="firstname"
                      style={{ width: "96%" }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ marginLeft: "10%" }}
                  >
                    <Form.Label>lastname</Form.Label>
                    <Form.Control type="text" placeholder="lastname" />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ marginLeft: "7%" }}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{ width: "84%" }}
                  />
                </Form.Group>
                <div style={{ display: "flex" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ marginLeft: "7%" }}
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Phone"
                      style={{ width: "310px" }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ marginLeft: "7%" }}>
                      Extension
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Extension"
                      style={{ width: "74%", marginLeft: "7%" }}
                    />
                  </Form.Group>
                </div>
                <Button variant="success" style={{ marginLeft: "7%" }}>
                  Updateprofile
                </Button>{" "}
              </div>
              <div
                className="second-card-container"
                style={{ height: "453px" }}
              >
                <div className="second-cardheader-container">
                  <div>Change password</div>
                </div>
                <hr className="underline" />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ marginLeft: "7%" }}
                >
                  <Form.Label>Existing Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="currentpassword"
                    style={{ width: "90%" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ marginLeft: "7%" }}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    style={{ width: "90%" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ marginLeft: "7%" }}
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmpassword"
                    style={{ width: "90%" }}
                  />
                </Form.Group>
                <Button variant="success" style={{ marginLeft: "7%" }}>
                  Updatepasssword
                </Button>
              </div>
            </div>

            <div className="thirdrow-card-container">
              <div className="firstcard-container">
                <div className="firstcard-header-container">
                  <div style={{ marginTop: "2%", marginLeft: "3%" }}>
                    Email Signature
                  </div>
                </div>
                <hr className="underline" />
                <div style={{ marginLeft: "3%" }}>
                  <div style={{ display: "flex" }}>
                    <input type="checkbox" style={{ width: "3%" }} />
                    <p style={{ marginLeft: "2%", marginTop: "2%" }}>
                      Enable Signature on All Outgoing Messages
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input type="checkbox" style={{ width: "3%" }} />
                    <p style={{ marginLeft: "2%", marginTop: "2%" }}>
                      Include this signature before quoted text in replies
                    </p>
                  </div>
                  <Button
                    variant="success"
                    style={{ marginLeft: "81%", marginTop: "10%" }}
                  >
                    Save
                  </Button>{" "}
                </div>
              </div>
              <div className="secondcard-container">
                <div className="secondcard-content">
                  <p className="content-text">User Availability</p>
                  <hr className="underline" />
                  <div className="subcontent-container">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ marginLeft: "7%" }}>
                        MeetingLocation
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Extension"
                        style={{ width: "590px", marginLeft: "19%" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Meetinglocation"
                        style={{ width: "590px", marginLeft: "19%" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ marginLeft: "7%" }}>
                        Time zone
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Gmtimelocation"
                        style={{ width: "590px", marginLeft: "19%" }}
                      />
                    </Form.Group>
                    <div style={{ marginLeft: "8%" }}>
                      <p>Available hours</p>
                      <div style={{ display: "flex", marginLeft: "13%" }}>
                        <Button variant="primary" style={{ width: "32%" }}>
                          S
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          M
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          T
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          W
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          T
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          F
                        </Button>
                        <Button
                          variant="primary"
                          style={{ width: "32%", marginLeft: "4%" }}
                        >
                          S
                        </Button>
                      </div>
                      <Button
                        variant="success"
                        style={{ marginTop: "19%", marginLeft: "15%" }}
                      >
                        UpdateAvailablity
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="fourthCard">
                <div style={{ padding: "6px" }}>
                  <p style={{ marginLeft: "2%", marginTop: "2%" }}>
                    Integrations
                  </p>
                </div>
                <hr className="underline" />
                <Card
                  style={{ marginLeft: "6%", height: "71px", width: "85%" }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://play-lh.googleusercontent.com/V1lb4J811SNh6hlGqNlDnGZXfdtI2i-1dC7_i9TnViyiboZ2RHp8xbhKbbECG-f26is"
                      style={{ width: "8%", marginTop: "3%" }}
                    />
                    <p
                      style={{
                        marginLeft: "4%",
                        marginTop: "4%",
                        color: "blue",
                      }}
                    >
                      Zoom
                    </p>
                    <Button
                      variant="outline-primary"
                      style={{
                        marginLeft: "58%",
                        marginTop: "3%",
                        height: "39px",
                      }}
                    >
                      Connect
                    </Button>
                  </div>
                </Card>
                <Card
                  style={{
                    marginLeft: "6%",
                    height: "71px",
                    width: "85%",
                    marginTop: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://findicons.com/files/icons/2795/office_2013_hd/2000/outlook.png"
                      style={{ width: "8%", marginTop: "3%", height: "35px" }}
                    />
                    <p
                      style={{
                        marginLeft: "4%",
                        marginTop: "4%",
                        color: "blue",
                      }}
                    >
                      Outlook calendar
                    </p>
                    <Button
                      variant="outline-primary"
                      style={{
                        marginLeft: "43%",
                        marginTop: "3%",
                        height: "39px",
                      }}
                    >
                      Connect
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="fifthCard">
                <div>
                  <p style={{ marginLeft: "2%", marginLeft: "3%" }}>
                    Calendar Configuration
                  </p>
                </div>
                <hr className="underline" />
                <div>
                  <p style={{ marginLeft: "13%", color: "grey" }}>
                    No google/outlook accounts added in Integrations settings
                    yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              padding: "2%",
              backgroundColor: "#f0f5fc",
              height: "100vh",
              overflow: "auto",
              position: "sticky",
              top: "30px",
            }}
          >
            <Card style={{ width: "96%" }}>
              <Card.Body>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      marginLeft: "79%",
                      fontSize: "larger",
                      fontWeight: "bold",
                    }}
                  >
                    in-App
                  </p>
                  <p
                    style={{
                      marginLeft: "3%",
                      fontSize: "larger",
                      fontWeight: "bold",
                    }}
                  >
                    email
                  </p>
                </div>
                <hr />
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Conversation Notifications
                  </p>
                  <div style={{ marginLeft: "3%" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify for all new conversations & messages initiated
                        with the account
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify when a conversation gets assigned to me
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify for new messages on a conversation I am assigned
                        to
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Task Notifications</p>
                  <div style={{ marginLeft: "3%" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify when a task gets assigned to me
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Facebook</p>
                  <div style={{ marginLeft: "3%" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify when a new review is received
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Google</p>
                  <div style={{ marginLeft: "3%" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ width: "45%" }}>
                        Notify when a new review is received
                      </p>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "36%", width: "1%" }}
                      />
                      <input
                        type="checkbox"
                        style={{ marginLeft: "6%", width: "1%" }}
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{
                display: "flex",
                flexDirection: "revert",
                width: "1256px",
                marginLeft: "-2%",
                marginTop: "3%",
              }}
            >
              <Button
                variant="outline-success"
                style={{ width: "9%", marginLeft: "78%" }}
              >
                cancel
              </Button>
              <Button
                variant="primary"
                style={{ width: "9%", marginLeft: "2%" }}
              >
                save
              </Button>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
