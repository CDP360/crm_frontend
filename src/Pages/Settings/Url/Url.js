import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function Url() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{ marginTop: "5%", backgroundColor: "#f0f5fc", height: "100vh" }}
    >
      <div style={{ display: "flex", padding: "30px" }}>
        <p>URL Redirects</p>
        <Button
          variant="success"
          style={{ marginLeft: "76%", width: "14%" }}
          onClick={handleShow}
        >
          +Add a Redirect
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Domain *</Form.Label>
            <Form.Control type="text" placeholder="Domain" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Path *</Form.Label>
            <Form.Control type="text" placeholder="/your path" />
          </Form.Group>
          <div style={{ display: "flex" }}>
            {" "}
            <div>
              <p>Redirect type *</p>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "164px",
                  }}
                >
                  URL
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Funnel</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Website</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ marginLeft: "5%", width: "73%", marginTop: "1%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Target Url *</Form.Label>
                <Form.Control type="text" placeholder="https://example.com" />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-light" style={{ color: "black" }}>
            Add redirect
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Url;
