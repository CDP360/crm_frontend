import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Tags() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ backgroundColor: "#f0f5fc", height: "100vh" }}>
      <div style={{ padding: "30px", display: "flex" }}>
        <p style={{ fontSize: "larger", cursor: "pointer" }}>Tags</p>
        <Button
          variant="success"
          style={{ marginLeft: "86%", cursor: "pointer" }}
          onClick={() => handleShow()}
        >
          + New Tag
        </Button>
      </div>
      <div style={{ position: "sticky", top: "60px" }}>
        <Card
          style={{
            width: "97%",
            marginLeft: "2%",
          }}
        >
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link" style={{ color: "blue" }}>
                  Delete tags
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="search..."
                style={{ width: "29%" }}
              />
            </Form.Group>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "larger", fontWeight: "bolder" }}>Tags</p>
              <p
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  marginLeft: "25%",
                }}
              >
                Created On
              </p>
              <p
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  marginLeft: "20%",
                }}
              >
                Updated On
              </p>
            </div>
            <Card style={{ width: "100%", height: "482px" }}>
              <div style={{ marginLeft: "39%", marginTop: "16%" }}>
                <p style={{ color: "grey" }}>No tags to show yet</p>
                <p
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => handleShow()}
                >
                  Add a new Tag
                </p>
              </div>
            </Card>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Add Tag..."
              style={{ width: "98%" }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tags;
