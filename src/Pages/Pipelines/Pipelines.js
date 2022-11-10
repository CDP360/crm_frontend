import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Styles/Pipeline.scss";
import TextField from "@mui/material/TextField";

function Pipelines() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "5%" }}>
      <div style={{ display: "flex" }}>
        <h1
          style={{ fontSize: "larger", marginLeft: "2%", fontSize: "medium" }}
        >
          Pipelines
        </h1>

        <Button variant="contained" className="Create" onClick={handleShow}>
          Create new Pipeline
        </Button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title> +Add pipeline</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              placeholder="Name"
              style={{ width: "96%", height: "41px" }}
            />
            <div>
              <div style={{ display: "flex" }}>
                <p>stage name</p>

                <p style={{ marginLeft: "77%" }}>Actions</p>
              </div>
              <input placeholder="stage name" className="stage" />
              <div>
                <p
                  style={{ fontSize: "medium", color: "grey", marginTop: "2%" }}
                >
                  Add stage
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <p>Visible in Funnel chart</p>
                  <Form.Check type="switch" id="custom-switch" />
                </div>
              </div>
              <div
                style={{ display: "flex", marginTop: "-5%", marginLeft: "60%" }}
              >
                <p>Visible in Pie chart</p>
                <Form.Check type="switch" id="custom-switch" />
              </div>
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
      <div className="cardpipeline">
        <div>
          <p style={{ color: "grey", marginLeft: "2%", marginTop: "1%" }}>
            Name
          </p>
        </div>
      </div>
      <div className="cardpipeline" style={{ marginTop: "1%" }}>
        <div style={{ display: "flex" }}>
          <p style={{ marginLeft: "2%", marginTop: "1%" }}>
            YOUR PROMOTION Pipeline
          </p>
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_386644.png"
            style={{
              width: "2%",
              marginTop: "1%",
              height: "27px",
              marginLeft: "69%",
            }}
          />

          <img
            src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
            style={{
              width: "2%",
              marginLeft: "3%",
              marginTop: "1%",
              height: "27px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Pipelines;

// import React from "react";

// function Pipelines() {
//   return <div style={{ marginTop: "5%" }}>Pipelines</div>;
// }

// export default Pipelines;
