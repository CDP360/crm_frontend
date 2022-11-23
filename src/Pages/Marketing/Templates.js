import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Menu from "../../assests/menu.png";
import Form from "react-bootstrap/Form";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Phone from "../../assests/phone.png";
import "./marketing.scss";
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
    img: Phone,
  },
];
function Templates() {
  const [textContent, setTextContent] = useState("");
  const [editCard, setEditCard] = useState(false);
  const { quill, quillRef } = useQuill();
  const [editCardMail, setEditCardMail] = useState(false);

  const [customTime, setCustomTime] = useState(false);
  const editCardClose = () => setEditCard(false);
  const editCardMailClose = () => setEditCardMail(false);

  const editCardShow = () => {
    setEditCard(true);
  };

  return (
    <div style={{ padding: "2%", backgroundColor: "#f0f5fc", height: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", width: "50%" }}>
          <p style={{ fontSize: "large" }}>Message Templates </p>
          <span style={{ color: "grey ", marginLeft: "2%" }}>0 templates</span>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              + Add Template
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={editCardShow}>
                +Add Text Template
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => setEditCardMail(true)}
              >
                +Add Email Tempalte
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Card body style={{ width: "99%", height: "60px", marginTop: "2%" }}>
        <div style={{ display: "flex" }}>
          <p style={{ color: "grey" }}>Name</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Body</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Attachments</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Type</p>
        </div>
      </Card>
      <Modal show={editCard} onHide={editCardClose} animation={false}>
        <Modal.Header>
          <Modal.Body style={{ backgroundColor: "#f0f5fc" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "55%",
                  backgroundColor: "white",
                  height: "651px",
                }}
              >
                <p style={{ padding: "2%" }}>Compose Text Template</p>
                <hr />
                <div style={{ padding: "2%" }}>
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid lightgray",
                      padding: "1%",
                      borderRadius: "5px",
                      marginTop: "1%",
                    }}
                    placeholder="Name"
                  ></input>

                  <div
                    style={{ marginTop: "2%", border: "1px solid lightgray" }}
                  >
                    <select
                      style={{ border: "none", height: "39px", color: "grey" }}
                    >
                      <option>Custom values</option>
                      <option>Contact</option>
                      <option>User</option>
                    </select>
                    <select
                      style={{ border: "none", height: "39px", color: "grey" }}
                    >
                      <option>Trigger Links</option>
                    </select>
                    <hr style={{ marginTop: "0%" }} />
                    <br />
                    <textarea
                      style={{
                        width: "100%",
                        border: "none",
                        height: "35vh",
                        marginTop: "-9%",
                      }}
                      onChange={(e) => setTextContent(e.target.value)}
                    >
                      {textContent}
                    </textarea>
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
                          window, else wait until the next window to execute
                          this action.
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
                    <div style={{ backgroundColor: "white", height: "500px" }}>
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
        </Modal.Header>
      </Modal>
      <Modal show={editCardMail} onHide={editCardMailClose} animation={false}>
        <Modal.Body style={{ backgroundColor: "#f0f5fc" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "55%", backgroundColor: "white" }}>
              <p style={{ padding: "2%" }}>Compose Email Template</p>
              <hr />
              <div style={{ padding: "2%" }}>
                <input
                  placeholder="name"
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "1%",
                  }}
                ></input>
                <input
                  placeholder="subject"
                  style={{
                    width: "100%",
                    border: "1px solid lightgray",
                    padding: "1%",
                    borderRadius: "5px",
                    marginTop: "5%",
                  }}
                />

                <div style={{ width: "100%", height: "25vh", marginTop: "2%" }}>
                  <div ref={quillRef} />
                </div>

                <div style={{ display: "flex", marginTop: "20%" }}></div>
                {/* {customTime ? (
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
                )} */}
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
                        ></div>
                        <div
                          style={{
                            marginLeft: "3%",
                            width: "75%",
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Templates;
