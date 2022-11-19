import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Emailservice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "5%", backgroundColor: "#f0f5fc", height: "80vh" }}
    >
      <div style={{ padding: "20px", display: "flex" }}>
        <p>EMAIL Service</p>
        <Button
          variant="success"
          style={{ marginLeft: "80%" }}
          onClick={() => handleShow(true)}
        >
          +Add service
        </Button>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          height: "165px",
          marginLeft: "5%",
        }}
      >
        <div style={{ display: "flex", marginLeft: "6%", marginTop: "5%" }}>
          <div style={{ marginTop: "5%" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Forwarding Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Forwarding Address"
                style={{ width: "90%" }}
              />
            </Form.Group>
          </div>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> BCC Emails</Form.Label>
              <Form.Control
                type="text"
                placeholder="BCC Emails"
                style={{ width: "90%" }}
              />
            </Form.Group>
          </div>
          <div style={{ marginTop: "5%", marginLeft: "3%" }}>
            <p>Forward to assigned user</p>
            <Form.Check type="switch" id="custom-switch" />
          </div>
          <div style={{ marginLeft: "4%" }}>
            <Button
              variant="success"
              style={{
                width: "85px",
                height: "40px",
                marginTop: "85%",
                marginLeft: "60%",
              }}
            >
              save
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: "smaller",
            color: "grey",
            marginLeft: "41%",
            marginTop: "5%",
          }}
        >
          Add your first SMTP service.{" "}
        </p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Provider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>SMTP Provider</Form.Label>
            <Form.Control type="email" placeholder="Select provider" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Emailservice;
