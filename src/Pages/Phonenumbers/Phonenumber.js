import React, { useState } from "react";
import "./styles/Phonenumber.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";

function Phonenumber() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ marginTop: "2%" }}>
      <div
        style={{ backgroundColor: "white", position: "sticky", top: "60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "15%",
            marginTop: "auto",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Phone Numbers
          </p>
          <p style={{ fontSize: "15px", cursor: "pointer", color: "blue" }}>
            Manage
          </p>
        </div>
      </div>
      <div>
        <Card className="phone-card">
          <Card.Body>
            Your phone system isn't configured. Please contact your agency
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: "flex", marginTop: "3%" }}>
        <h1 style={{ fontSize: "x-large", marginLeft: "2%" }}>NumberPool</h1>
        <Button variant="contained" className="number" onClick={handleShow}>
          + Add number Pool
        </Button>
      </div>
      <div>
        <p className="" style={{ color: "grey", marginLeft: "37%" }}>
          You do not have any number pools
        </p>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Create Tracking Number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p style={{ marginLeft: "37%" }}>17% Complete</p>
              <ProgressBar now={20} className="progress-bar " />
              <div>
                <p
                  style={{
                    fontSize: "large",
                    marginTop: "3%",
                    marginLeft: "23%",
                  }}
                >
                  What do you want to track on your website?
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "8%" }}>
                  <Button
                    variant="outline-primary"
                    style={{ marginLeft: "10%" }}
                  >
                    Track visitory activity
                  </Button>
                  <p style={{ fontSize: "small", width: "72%", color: "grey" }}>
                    Create multiple numbers that correlate calls to website
                    visitors, PPC keywords, and more.
                  </p>
                </div>
                <div>
                  <Button variant="outline-primary">
                    Track a marketing campaign
                  </Button>
                  <p style={{ fontSize: "small", width: "72%", color: "grey" }}>
                    Create one phone number that tracks all callers to a single
                    marketing campaign.
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Phonenumber;
