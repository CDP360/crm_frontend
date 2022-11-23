import React, { useState } from "react";
import Back from "../../assests/left.png";
import Phone from "../../assests/phonedisplay.png";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Info from "../../assests/info.png";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Menu from "../../assests/menu.png";
import Email from "../../assests/mail.png";
import Call from "../../assests/phone.png";
import "./styles/Campaigns.scss";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function CampaignsPage() {
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill();
  const [editCard, setEditCard] = useState(false);
  const [editCardMail, setEditCardMail] = useState(false);
  const [editCardCall, setEditCardCall] = useState(false);
  const [customTime, setCustomTime] = useState(false);
  const [textContent, setTextContent] = useState(
    "Thanks for requesting more info on {{custom_values.house for_sale_address}}, {{contact.first_name}}!The next step is to book a free showing. You can reply to this text or call us at {{custom_values.twilio number}} with any questions.We look forward to seeing you!- {{user.name}}"
  );

  const editCardClose = () => setEditCard(false);
  const editCardMailClose = () => setEditCardMail(false);
  const editCardCallClose = () => setEditCardCall(false);
  const editCardShow = (data) => {
    if (data.name === "SMS") {
      setEditCard(true);
    } else if (data.name === "Email") {
      setEditCardMail(true);
    } else if (data.name === "Call") {
      setEditCardCall(true);
    }
  };

  const ContentData = [
    {
      id: 1,
      name: "SMS",
      content:
        "Thanks for requesting more info on {{custom_values.house_for_sale_address}}, {{contact.first_name}}!The next step is to book a free showing. You can reply to this text or call us at {{custom_values.twilio_number}} with any questions.We look forward to seeing you!- {{user.name}}",
      img: Phone,
    },
    {
      id: 2,
      name: "Email",
      content: "Home Info Next Steps",
      img: Email,
    },
    {
      id: 3,
      name: "Call",
      content: "",
      img: Call,
    },
  ];
  return (
    <div
      style={{
        padding: "2%",
        backgroundColor: "#f0f5fc",
        height: "88vh",
        overflow: "auto",
        paddingTop: "0%",
        marginTop: "2%",
      }}
    >
      <div style={{ display: "flex", marginTop: "2%" }}>
        <div style={{ display: "flex", width: "70%" }}>
          <img
            src={Back}
            style={{ width: "20px", cursor: "pointer", height: "30px" }}
            onClick={() => navigate("/automation/campaigns")}
          />
          <input
            style={{
              border: "none",
              borderBottom: "2px solid lightgray",
              backgroundColor: "#f0f5fc",
              width: "85%",
            }}
            value="A-1) Home Buyer Nurture"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <input
            style={{
              width: "50%",
              border: "none",
              borderRadius: "5px",
              padding: "1%",
            }}
            placeholder="Sat, 22nd Oct - Mon, 21st Nov"
          />
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              style={{
                backgroundColor: "skyblue",
                color: "blue",
                fontWeight: "bold",
                border: "none",
                width: "100%",
              }}
            >
              {/* <img src={Dot} style={{ width: "30px" }} /> */}
              Draft
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown"
              style={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
                border: "none",
              }}
            >
              {/* <img src={Dot} style={{ width: "30px" }} /> */}
              Actions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#b1f2fc",
          marginTop: "2%",
          display: "flex",
          padding: "2%",
          borderRadius: "5px",
        }}
      >
        <div>
          <img src={Info} style={{ width: "50px" }} />
        </div>
        <div style={{ marginLeft: "1%" }}>
          <p style={{ marginBottom: "auto" }}>Draft Mode</p>
          <p style={{ marginBottom: "auto" }}>
            This campaign is a draft. It cannot be used until it is published.
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "2%",
          backgroundColor: "#a5d5fa",
          padding: "1%",
          borderRadius: "5px",
        }}
      >
        <p style={{ marginBottom: "auto" }}>
          Email and SMS stats data is available from Aug 1, 2022
        </p>
      </div>
      <div style={{ marginTop: "2%" }}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Campaign Configuration</Accordion.Header>
            <Accordion.Body>
              <div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "15%" }}>
                    <p>Window</p>
                    <p>Users</p>
                    <p>Next Campaign</p>
                    <p style={{ marginTop: "5vh" }}>From address</p>
                    <p style={{ marginTop: "11vh" }}>Lead value</p>
                    <p style={{ marginTop: "4vh" }}>Tags</p>
                    <p style={{ marginTop: "4vh" }}>Allow multiple</p>
                    <p style={{ marginTop: "3vh" }}>Stop on response</p>
                    <p style={{ marginTop: "4vh" }}>Event Start Date</p>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Form.Check
                      style={{ marginLeft: "-7%" }}
                      type="switch"
                      id="custom-switch"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        className="dropdown"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "1px solid lightgray",
                          marginTop: "1%",
                          width: "40%",
                          textAlign: "start",
                        }}
                      >
                        Add Users
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: "40%" }}>
                        <Dropdown.Item>DDP360</Dropdown.Item>
                        <Dropdown.Item>DS</Dropdown.Item>
                        <Dropdown.Item>Gaberial</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="dropdown"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "1px solid lightgray",
                          marginTop: "1%",
                          width: "40%",
                          textAlign: "start",
                        }}
                      >
                        C) Not Yet Ready
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: "40%" }}>
                        <Dropdown.Item>DDP360</Dropdown.Item>
                        <Dropdown.Item>DS</Dropdown.Item>
                        <Dropdown.Item>Gaberial</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <input
                      style={{
                        marginTop: "2%",
                        width: "40%",
                        border: "1px solid lightgray",
                        padding: "0.5%",
                        borderRadius: "5px",
                      }}
                      placeholder="From name"
                    />
                    <br />
                    <input
                      style={{
                        marginTop: "0.5%",
                        width: "40%",
                        border: "1px solid lightgray",
                        padding: "0.5%",
                        borderRadius: "5px",
                      }}
                      placeholder="From email"
                    />
                    <br />
                    <input
                      style={{
                        marginTop: "2%",
                        width: "20%",
                        border: "1px solid lightgray",
                        padding: "0.5%",
                        borderRadius: "5px",
                      }}
                      placeholder="$ value of lead"
                    />
                    <br />
                    <input
                      style={{
                        marginTop: "2%",
                        width: "20%",
                        border: "1px solid lightgray",
                        padding: "0.5%",
                        borderRadius: "5px",
                      }}
                      placeholder="Add Tags"
                    />
                    <Form.Check
                      style={{ marginLeft: "-7%", marginTop: "2%" }}
                      type="switch"
                      id="custom-switch"
                    />
                    <Form.Check
                      style={{ marginLeft: "-7%", marginTop: "2%" }}
                      type="switch"
                      id="custom-switch"
                    />
                    <input
                      style={{
                        marginTop: "2%",
                        width: "40%",
                        border: "1px solid lightgray",
                        padding: "0.5%",
                        borderRadius: "5px",
                      }}
                      placeholder="Add Tags"
                    />
                  </div>
                </div>
                <div style={{ padding: "2%" }}>
                  <button
                    style={{
                      padding: "1%",
                      backgroundColor: "blue",
                      border: "none",
                      color: "white",
                      width: "100px",
                      borderRadius: "10px",
                    }}
                  >
                    Save
                  </button>
                  <button
                    style={{
                      padding: "1%",
                      backgroundColor: "#f0f5fc",
                      border: "none",
                      color: "blue",
                      width: "100px",
                      borderRadius: "10px",
                      marginLeft: "2%",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ padding: "1%", backgroundColor: "white", marginTop: "2%" }}>
        {ContentData.map((data) => (
          <div
            style={{
              display: "flex",
              marginTop: "2%",
            }}
          >
            <div style={{ width: "10%", marginLeft: "1%" }}>
              <p
                style={{
                  padding: "25%",
                  backgroundColor: "skyblue",
                  textAlign: "center",
                  border: "2px solid lightgray",
                }}
              >
                {" "}
                !!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                border: "1px solid lightgray",
                marginLeft: "2%",
                marginRight: "2%",
                padding: "1%",
                backgroundColor: "#f0f5fc",
              }}
            >
              <div style={{ display: "flex" }}>
                <img src={data.img} style={{ width: "20px" }} />
                <p style={{ marginBottom: "auto", marginLeft: "1%" }}>
                  {data.name}
                </p>
              </div>
              <p style={{ marginTop: "1%" }}>{data.content}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2%",
                  backgroundColor: "#e6f3fc",
                }}
              >
                <div style={{ display: "flex", width: "50%" }}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => editCardShow(data)}
                  >
                    Edit
                  </p>
                  <p style={{ marginLeft: "2%", cursor: "pointer" }}>Remove</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "30%",
                    justifyContent: "space-around",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3%",
                      marginBottom: "auto",
                      marginRight: "2%",
                    }}
                  >
                    Send
                  </p>
                  <select style={{ padding: "2%", width: "50%" }}>
                    <option value="immediate">Immediate</option>
                    <option value="after">after</option>
                    <option value="before">before</option>
                  </select>
                  <input
                    style={{ width: "18%", marginLeft: "2%" }}
                    type="number"
                  />
                  <select
                    style={{ padding: "2%", width: "42%", marginLeft: "2%" }}
                  >
                    <option>minutes</option>
                    <option>hours</option>
                    <option>day</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ display: "flex", marginLeft: "3.5%", marginTop: "2%" }}>
          <div>
            <h3
              style={{
                backgroundColor: "lightgreen",
                width: "40px",
                height: "40px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              +
            </h3>
          </div>
          <div style={{ marginLeft: "5%" }}>
            <p style={{ color: "lightgreen", fontWeight: "bold" }}>Add Event</p>
          </div>
        </div>
      </div>

      <Modal show={editCard} onHide={editCardClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f0f5fc" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "55%", backgroundColor: "white" }}>
              <h5 style={{ padding: "2%" }}>Compose SMS</h5>
              <hr />
              <div style={{ padding: "2%" }}>
                <input
                  placeholder={ContentData[0].name}
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "1%",
                  }}
                ></input>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "5%",
                  }}
                />
                <div style={{ marginTop: "2%", border: "1px solid lightgray" }}>
                  <select>
                    <option>Customvalues</option>
                    <option>Contact</option>
                    <option>User</option>
                  </select>
                  <select>
                    <option>Trigger Links</option>
                  </select>
                  <br />
                  <textarea
                    style={{
                      width: "100%",
                      border: "none",
                      height: "35vh",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setTextContent(e.target.value)}
                  >
                    {ContentData[0].content}
                  </textarea>
                </div>
                <div style={{ display: "flex", marginTop: "2%" }}>
                  <p>Custom time</p>
                  <Form.Check
                    onClick={() => setCustomTime(!customTime)}
                    type="switch"
                    id="custom-switch"
                  />
                </div>
                {customTime ? (
                  <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "10%" }}>
                      <p>Condition</p>
                      <p style={{ marginTop: "20vh" }}>Pick days</p>
                      <p style={{ marginTop: "3vh" }}>Start time</p>
                      <p style={{ marginTop: "3vh" }}>End time</p>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                      <select style={{ width: "70%", padding: "2%" }}>
                        <option>When</option>
                        <option>if</option>
                        <option>Exact</option>
                      </select>
                      <p style={{ width: "90%" }}>
                        Execute this action if the current time falls in this
                        window, else wait until the next window to execute this
                        action.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Mon
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Tue
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Wed
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Thu
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Fri
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Sat
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Sun
                        </p>
                      </div>
                      <select style={{ width: "70%", padding: "2%" }}>
                        <option></option>
                      </select>
                      <select
                        style={{
                          width: "70%",
                          padding: "2%",
                          marginTop: "5%",
                        }}
                      >
                        <option></option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <hr />
              <div
                style={{
                  marginTop: "5%",
                  padding: "3%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>Attach File</p>
                  <div style={{ display: "flex" }}>
                    <input
                      style={{
                        padding: "2%",
                        border: "1px solid lightgray",
                        borderRadius: "10px",
                      }}
                      placeholder="Add file through URL"
                    />
                    <div
                      style={{
                        backgroundColor: "lightgreen",
                        borderRadius: "100%",
                        marginLeft: "2%",
                        width: "45px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: "25px",
                          marginBottom: "auto",
                        }}
                      >
                        +
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "5%" }}>
                  <button
                    style={{
                      padding: "4%",
                      width: "70px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div style={{ width: "45%", padding: "2%" }}>
              <div
                style={{
                  backgroundColor: "#b9d9f0",
                  height: "90vh",
                  borderRadius: "40px",
                }}
              >
                <div style={{ height: "8vh" }}></div>
                <div
                  style={{
                    height: "60vh",
                    backgroundColor: "#b9d9f0",
                    padding: "3%",
                  }}
                >
                  <div style={{ backgroundColor: "white", height: "520px" }}>
                    <div style={{ padding: "3%" }}>
                      <img src={Menu} style={{ width: "10%" }} />
                    </div>
                    <hr style={{ marginTop: "auto" }} />
                    <div style={{ height: "43vh" }}>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            backgroundColor: "#fcdd88",
                            marginLeft: "5%",
                            borderRadius: "100%",
                            height: "75%",
                          }}
                        >
                          <p style={{ marginBottom: "auto", padding: "5px" }}>
                            CS
                          </p>
                        </div>
                        <div
                          style={{
                            marginLeft: "3%",
                            width: "75%",
                            backgroundColor: "blue",
                            padding: "4%",
                            borderRadius: "10px",
                            overflow: "auto",
                            color: "white",
                          }}
                        >
                          <p>{textContent}</p>
                        </div>
                      </div>
                    </div>
                    <hr style={{ marginTop: "20%" }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <input
                        style={{ padding: "1%", border: "none" }}
                        placeholder="Enter message"
                      />
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "#acfc97",
                          borderRadius: "10px",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "10%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <input
                  style={{
                    padding: "2%",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                  }}
                  placeholder="Mobile Phone Number"
                />
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Send test
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={editCardMail} onHide={editCardMailClose} animation={false}>
        <Modal.Header closeButton>Compose Email</Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f0f5fc" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "55%", backgroundColor: "white" }}>
              <h5 style={{ padding: "2%" }}>Compose SMS</h5>
              <hr />
              <div style={{ padding: "2%" }}>
                <input
                  placeholder={ContentData[1].name}
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "1%",
                  }}
                ></input>
                <input
                  placeholder={ContentData[1].content}
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "5%",
                  }}
                />
                <select
                  style={{
                    width: "50%",
                    padding: "1%",
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    marginTop: "5%",
                  }}
                >
                  <option>Pick email template</option>
                  <option>New Template</option>
                  <option>New Template</option>
                  <option>New Template</option>
                  <option>New Template</option>
                </select>
                <div style={{ marginTop: "2%" }}>
                  <select>
                    <option>Customvalues</option>
                    <option>Contact</option>
                    <option>User</option>
                  </select>
                  <select style={{ marginLeft: "3%" }}>
                    <option>Trigger Links</option>
                  </select>
                  <br />
                  <div
                    style={{ width: "100%", height: "25vh", marginTop: "2%" }}
                  >
                    <div ref={quillRef} />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "20%" }}>
                  <p style={{ marginBottom: "auto" }}>Custom time</p>
                  <Form.Check
                    onClick={() => setCustomTime(!customTime)}
                    type="switch"
                    id="custom-switch"
                  />
                </div>
                {customTime ? (
                  <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "10%" }}>
                      <p>Condition</p>
                      <p style={{ marginTop: "20vh" }}>Pick days</p>
                      <p style={{ marginTop: "3vh" }}>Start time</p>
                      <p style={{ marginTop: "3vh" }}>End time</p>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                      <select style={{ width: "70%", padding: "2%" }}>
                        <option>When</option>
                        <option>if</option>
                        <option>Exact</option>
                      </select>
                      <p style={{ width: "90%" }}>
                        Execute this action if the current time falls in this
                        window, else wait until the next window to execute this
                        action.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Mon
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Tue
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Wed
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Thu
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Fri
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Sat
                        </p>
                        <p
                          style={{
                            backgroundColor: "skyblue",
                            color: "white",
                            borderRadius: "5px",
                            padding: "1%",
                          }}
                        >
                          Sun
                        </p>
                      </div>
                      <select style={{ width: "70%", padding: "2%" }}>
                        <option></option>
                      </select>
                      <select
                        style={{
                          width: "70%",
                          padding: "2%",
                          marginTop: "5%",
                        }}
                      >
                        <option></option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <hr />
              <div
                style={{
                  marginTop: "5%",
                  marginLeft: "7%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginBottom: "auto" }}>Attach File</p>
                <button
                  style={{
                    marginRight: "10%",
                    width: "70px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Save
                </button>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "2%",
                }}
              >
                <div>
                  <p style={{ marginBottom: "auto", fontWeight: "bold" }}>
                    From Address
                  </p>
                  <input
                    style={{
                      width: "80%",
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "2%",
                    }}
                    placeholder="From Address"
                  />
                </div>
                <div>
                  <p style={{ marginBottom: "auto", fontWeight: "bold" }}>
                    To Address
                  </p>
                  <input
                    style={{
                      width: "80%",
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      padding: "2%",
                    }}
                    placeholder="To Address"
                  />
                </div>
                <div style={{ marginTop: "4%" }}>
                  <button
                    style={{
                      width: "60px",
                      backgroundColor: "green",
                      border: "none",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div style={{ width: "45%", padding: "2%" }}>
              <div
                style={{
                  backgroundColor: "#b9d9f0",
                  height: "90vh",
                  borderRadius: "40px",
                }}
              >
                <div style={{ height: "8vh" }}></div>
                <div
                  style={{
                    height: "60vh",
                    backgroundColor: "#b9d9f0",
                    padding: "3%",
                  }}
                >
                  <div style={{ backgroundColor: "white", height: "520px" }}>
                    <div style={{ padding: "3%" }}>
                      <img src={Menu} style={{ width: "10%" }} />
                    </div>
                    <hr style={{ marginTop: "auto" }} />
                    <div style={{ height: "43vh" }}>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            backgroundColor: "#fcdd88",
                            marginLeft: "5%",
                            borderRadius: "100%",
                            height: "75%",
                          }}
                        >
                          <p style={{ marginBottom: "auto", padding: "5px" }}>
                            CS
                          </p>
                        </div>
                        <div
                          style={{
                            marginLeft: "3%",
                            width: "75%",
                            backgroundColor: "blue",
                            padding: "4%",
                            borderRadius: "10px",
                            overflow: "auto",
                            color: "white",
                          }}
                        >
                          <p>{textContent}</p>
                        </div>
                      </div>
                    </div>
                    <hr style={{ marginTop: "20%" }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <input
                        style={{ padding: "1%", border: "none" }}
                        placeholder="Enter message"
                      />
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "#acfc97",
                          borderRadius: "10px",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={editCardCall} onHide={editCardCallClose} animation={false}>
        <div style={{ backgroundColor: "#f0f5fc", padding: "2%" }}>
          <Modal.Header closeButton style={{ backgroundColor: "white" }}>
            Edit Call
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "white" }}>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p style={{ width: "30%" }}>Event name</p>
              <input
                style={{
                  width: "90%",
                  border: "1px solid lightgray",
                  borderRadius: "7px",
                }}
                placeholder={ContentData[0].name}
              />
            </div>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p style={{ width: "30%" }}>Call whisper</p>
              <textarea
                style={{ width: "90%", height: "13vh" }}
                placeholder="Whisper message"
              />
            </div>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p style={{ width: "30%" }}>ECall timeout (s)</p>
              <input
                style={{ width: "90%" }}
                type="number"
                placeholder="Timeout (seconds)"
              />
            </div>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p style={{ width: "30%" }}>Disable voicemail detect</p>
              <Form.Check type="switch" id="custom-switch" />
            </div>
            <div style={{ display: "flex", marginTop: "2%" }}>
              <p style={{ width: "30%" }}>Custom time</p>
              <Form.Check
                onClick={() => setCustomTime(!customTime)}
                type="switch"
                id="custom-switch"
              />
            </div>
            <div>
              {customTime ? (
                <div style={{ display: "flex" }}>
                  <div style={{ marginLeft: "10%" }}>
                    <p>Condition</p>
                    <p style={{ marginTop: "20vh" }}>Pick days</p>
                    <p style={{ marginTop: "3vh" }}>Start time</p>
                    <p style={{ marginTop: "3vh" }}>End time</p>
                  </div>
                  <div style={{ marginLeft: "10%" }}>
                    <select style={{ width: "70%", padding: "2%" }}>
                      <option>When</option>
                      <option>if</option>
                      <option>Exact</option>
                    </select>
                    <p style={{ width: "90%" }}>
                      Execute this action if the current time falls in this
                      window, else wait until the next window to execute this
                      action.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "70%",
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Mon
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Tue
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Wed
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Thu
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Fri
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Sat
                      </p>
                      <p
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          borderRadius: "5px",
                          padding: "1%",
                          width: "40px",
                        }}
                      >
                        Sun
                      </p>
                    </div>
                    <select style={{ width: "70%", padding: "2%" }}>
                      <option></option>
                    </select>
                    <select
                      style={{
                        width: "70%",
                        padding: "2%",
                        marginTop: "5%",
                      }}
                    >
                      <option></option>
                    </select>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "white" }}>
            <button
              onClick={editCardCallClose}
              style={{
                width: "80px",
                padding: "1%",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Save
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default CampaignsPage;
