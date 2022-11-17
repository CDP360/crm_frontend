import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Volume from "../../../assests/volume.svg";
import Message from "../../../assests/message.svg";
import Clipboard from "../../../assests/clipboard-check.svg";

const Builderform = () => {
  return (
    <div className="buildeform-main-container">
      <div className="builderform-header">
        <div className="builderform-header-left">
          <p className="builderform-header-left-h4">Webchat for your website</p>
          <label className="builderform-header-left-lable">
            <p className="builderform-header-left-p">
              Configure a chat widget to convert your website visitors to leads
            </p>
          </label>
        </div>
        <div className="builderform-header-right">
          <p className="builderform-header-right-p"> Get it for wordpress</p>
          <button className="builderform-right-getcode-btn"> Get Code </button>
          <button className="builderform-right-save-btn">Save</button>
        </div>
      </div>
      <div>
        <div className="builderform-accordion-holder">
          <Accordion className="builderform-accordion">
            <Accordion.Item eventKey="0" className="builderform-accordion-item">
              <Accordion.Header>
                <img src={Volume} alt="Volume" />
                <span className="builderform-accordion-header">
                  Chat Bubble
                </span>
              </Accordion.Header>
              <Accordion.Body className="builderform-accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="builderform-accordion-holder">
          <Accordion className="builderform-accordion">
            <Accordion.Item eventKey="0" className="builderform-accordion-item">
              <Accordion.Header>
                <img src={Message} alt="Message" />
                <span className="builderform-accordion-header">
                  Widget window
                </span>
              </Accordion.Header>
              <Accordion.Body className="builderform-accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="builderform-accordion-holder">
          <Accordion className="builderform-accordion">
            <Accordion.Item eventKey="0" className="builderform-accordion-item">
              <Accordion.Header>
                <img src={Clipboard} alt="Clipboard" />
                <span className="builderform-accordion-header">
                  Acknowledgement settings
                </span>
              </Accordion.Header>
              <Accordion.Body className="builderform-accordion-body">
                <div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="builderform-left-accordion">
                        <div className="builderform-input-container">
                          <div className="builderform-input">
                            <label className="builderform-input-lable">
                              Customer Support contact
                            </label>
                            <input
                              className="builderform-input-box"
                              type="text"
                              placeholder="Phone or Email-Id"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="builderform-input-container">
                          <div className="builderform-input">
                            <label className="builderform-input-lable">
                              Acknowledgement Greeting
                            </label>
                            <textarea
                              className="builderform-input-box"
                              type="text"
                              placeholder="Acknowledgement Greeting"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="builderform-input-container">
                          <div className="builderform-input">
                            <label className="builderform-input-lable">
                              Acknowledgement Message
                            </label>
                            <textarea
                              className="builderform-input-box"
                              type="text"
                              placeholder="Acknowledgement Message"
                            />
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="builderform-right-accordion">
                        <div className="builderform-right-body">
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
        <div className="builderform-footer-right">
          <p className="builderform-footer-right-p">Get it for wordpress</p>
          <button className="builderform-footer-getcode-btn">Get Code</button>
          <button className="builderform-footer-save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Builderform;
