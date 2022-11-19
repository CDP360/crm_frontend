import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./styles/customvalues.scss";
import Table from "react-bootstrap/Table";
import edit from "../../../assests/edit.png";
import Card from "react-bootstrap/Card";

function Customvalues() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ marginTop: "2%" }}>
      <div
        style={{
          backgroundColor: "#f0f5fc",
          position: "sticky",
          top: "60px",
          height: "80vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "96%",
            marginTop: "4%",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "5%",
            }}
          >
            Custom Values{" "}
          </p>
          <Button
            onClick={handleShow}
            variant="contained"
            className="number"
            style={{ marginTop: "5%" }}
          >
            + Add custom values
          </Button>
        </div>
        <div className="modal-value">
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Custom Value</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ marginLeft: "5%" }}>
                <Form.Label htmlFor="inputPassword5">Name:?</Form.Label>
                <Form.Control
                  style={{ width: "93%", maginLeft: "7%" }}
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Label htmlFor="inputPassword5">value:</Form.Label>
                <Form.Control
                  style={{ width: "93%", maginLeft: "7%" }}
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div style={{ marginTop: "5%" }}>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>Name</p>
              <p>key</p>
              <p>value</p>
              <p></p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "37%" }}>Buyers List of Homes</p>
              <p style={{ marginLeft: "9%" }}>
                custom_valuesbuyers_list_of_homes
              </p>

              <p style={{ display: "flex" }}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
                  className="delete"
                  style={{ width: "3%", marginLeft: "85%" }}
                />
                <img
                  src={edit}
                  style={{ width: "2%", marginLeft: "5%" }}
                  onClick={handleShow}
                />
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Customvalues;
