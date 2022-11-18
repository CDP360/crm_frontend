import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Volume from "../../assests/volume.svg";
import Message from "../../assests/message.svg";
import Clipboard from "../../assests/clipboard-check.svg";
import Form from "react-bootstrap/Form";
import Edit from "../../assests/edit.svg";
import Avatar from "../../assests/avatar.svg";

const Builderform = () => {
  return (
    <div className="chatwidget-main-container">
      <div className="chatwidget-header">
        <div className="chatwidget-header-left">
          <p className="chatwidget-header-left-h4">Webchat for your website</p>
          <label className="chatwidget-header-left-lable">
            <p className="chatwidget-header-left-p">
              Configure a chat widget to convert your website visitors to leads
            </p>
          </label>
        </div>
        <div className="chatwidget-header-right">
          <p className="chatwidget-header-right-p"> Get it for wordpress</p>
          <button className="chatwidget-right-getcode-btn"> Get Code </button>
          <button className="chatwidget-right-save-btn">Save</button>
        </div>
      </div>
      <div>
        <div className="chatwidget-accordion-holder">
          <Accordion defaultActiveKey="0" className="chatwidget-accordion">
            <Accordion.Item eventKey="0" className="chatwidget-accordion-item">
              <Accordion.Header>
                <img src={Volume} alt="Volume" />
                <span className="chatwidget-accordion-header">Chat Bubble</span>
              </Accordion.Header>
              <Accordion.Body className="chatwidget-accordion-body">
                <div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="chatwidget-left-accordion">
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Chat Bubble
                            </label>
                            <div className="chatwidget-left-switch-holder">
                              <Form.Check type="switch" id="custom-switch" />
                              <label className="chatwidget-left-switch-lable">
                                Enable Chat Bubble
                                <p className="chatwidget-left-switch-p">
                                  This will greet your visitors with a chat
                                  pop-up
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Avatar Image
                            </label>
                            {/* <input
                              className="chatwidget-input-box"
                              type="text"
                            /> */}
                            <div className="form-control-container">
                              <div className="form-control-container-avatar">
                                <div className="form-control-btn-avatar-holder">
                                  <button className="form-control-btn">
                                    <div style={{ display: "flex" }}>
                                      <img
                                        className="form-control-edit-img"
                                        src={Edit}
                                        alt="Edit"
                                      />
                                      <p
                                        style={{
                                          marginTop: "0.75rem",
                                          marginLeft: "0.5rem",
                                        }}
                                      >
                                        Edit Image
                                      </p>
                                    </div>
                                  </button>
                                </div>
                                <img
                                  style={{ width: "2rem" }}
                                  src={Avatar}
                                  alt="Avatar"
                                />
                              </div>
                              <label className="form-control-container-label">
                                <p className="form-control-container-p">
                                  Recommended size is 300px * 300px, size less
                                  than 300 KB
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Intro message
                            </label>
                            <textarea
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Short Intro message"
                            />
                          </div>
                        </div>
                        <hr /> */}
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Return visitors
                            </label>
                            <div className="chatwidget-left-switch-holder">
                              <Form.Check type="switch" id="custom-switch" />
                              <label className="chatwidget-left-switch-lable">
                                Enable Custom Greetings
                                <p className="chatwidget-left-switch-p">
                                  Enable Custom greetings for returning
                                </p>
                              </label>
                            </div>
                            {/* <div>
                              <textarea type="text" />
                              <p> Greet returning visitors by name </p>
                            </div> */}
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="chatwidget-right-accordion">
                        <div className="chatwidget-right-body">
                          <div className="bilderform-right-p-holder">
                            <p className="bilderform-right-p">
                              Have a question?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="chatwidget-accordion-holder">
          <Accordion className="chatwidget-accordion">
            <Accordion.Item eventKey="0" className="chatwidget-accordion-item">
              <Accordion.Header>
                <img src={Message} alt="Message" />
                <span className="chatwidget-accordion-header">
                  Widget window
                </span>
              </Accordion.Header>
              <Accordion.Body className="chatwidget-accordion-body">
                <div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="chatwidget-left-accordion">
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Header
                            </label>
                            <input
                              className="chatwidget-input-box"
                              type="text"
                              // placeholder="Phone or Email-Id"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Intro message
                            </label>
                            <textarea
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Short Intro message"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Email Field
                            </label>
                            <div className="chatwidget-left-switch-holder">
                              <Form.Check type="switch" id="custom-switch" />
                              <label className="chatwidget-left-switch-lable">
                                Add Email field
                                <p className="chatwidget-left-switch-p">
                                  This will add the new input field to take
                                  email from user
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Legal Message
                            </label>
                            <textarea
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Legal Message"
                            />
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="chatwidget-right-accordion">
                        <div className="chatwidget-right-body">
                          <div className="bilderform-right-p-holder">
                            <p className="bilderform-right-p">
                              Have a question?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="chatwidget-accordion-holder">
          <Accordion className="chatwidget-accordion">
            <Accordion.Item eventKey="0" className="chatwidget-accordion-item">
              <Accordion.Header>
                <img src={Clipboard} alt="Clipboard" />
                <span className="chatwidget-accordion-header">
                  Acknowledgement settings
                </span>
              </Accordion.Header>
              <Accordion.Body className="chatwidget-accordion-body">
                <div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="chatwidget-left-accordion">
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Customer Support contact
                            </label>
                            <input
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Phone or Email-Id"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Acknowledgement Greeting
                            </label>
                            <textarea
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Acknowledgement Greeting"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="chatwidget-input-container">
                          <div className="chatwidget-input">
                            <label className="chatwidget-input-lable">
                              Acknowledgement Message
                            </label>
                            <textarea
                              className="chatwidget-input-box"
                              type="text"
                              placeholder="Acknowledgement Message"
                            />
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="chatwidget-right-accordion">
                        <div className="chatwidget-right-body">
                          <div className="bilderform-right-p-holder">
                            <p className="bilderform-right-p">
                              Have a question?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="chatwidget-footer-right">
          <p className="chatwidget-footer-right-p">Get it for wordpress</p>
          <button className="chatwidget-footer-getcode-btn">Get Code</button>
          <button className="chatwidget-footer-save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Builderform;
