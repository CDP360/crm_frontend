import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Domains() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ marginTop: "5%", backgroundColor: "#f0f5fc", height: "100vh" }}
    >
      <div style={{ padding: "25px", display: "flex" }}>
        <p style={{ fontSize: "larger" }}>Domains</p>
        <Button
          variant="success"
          style={{ marginLeft: "79%", width: "50%" }}
          onClick={() => setShow(true)}
        >
          +Add New Domain
        </Button>
      </div>
      <div style={{ marginLeft: "5%", marginTop: "2%" }}>
        <Card style={{ height: "38px", width: "94%" }}>
          <div>Domain</div>
        </Card>
        <Card style={{ height: "38px", width: "94%" }}>
          <div style={{ display: "flex" }}>
            <p>cdp360.com</p>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
              style={{
                width: "2%",
                height: "22px",
                marginLeft: "88%",
                cursor: "pointer",
              }}
            />
          </div>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Domain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Add your own domain</Form.Label>
            <Form.Control type="text" placeholder="my website.com" />
          </Form.Group>
          <p>
            Note: Please make sure to have either an A record pointing to
            34.68.234.4 or a CNAME record pointing to flash.funnels.msgsndr.com
            for in domain ()
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Robots.txt code</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add Robots.txt code "
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Domains;
