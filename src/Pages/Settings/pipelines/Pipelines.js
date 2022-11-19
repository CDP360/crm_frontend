import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import "./Styles/pipeline.scss";
import "./styles/pipeline.scss";
import TextField from "@mui/material/TextField";

function Pipelines() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main-container" style={{ height: "80vh" }}>
      <div className="main-containerdiv">
        <h1 className="main-containerheading">Pipelines</h1>

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
              className="input-name"
              // style={{ width: "96%", height: "41px" }}
            />
            <div>
              <div className="modal-maindiv">
                <p>stage name</p>

                <p className="action-para">Actions</p>
              </div>
              <input placeholder="stage name" className="stage" />
              <div>
                <p
                  className="stage-para"
                  // style={{ fontSize: "medium", color: "grey", marginTop: "2%" }}
                >
                  Add stage
                </p>
              </div>
              <div className="form-input">
                <div className="form-datainput">
                  <p>Visible in Funnel chart</p>
                  <Form.Check type="switch" id="custom-switch" />
                </div>
              </div>
              <div className="chart">
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
        <div className="cardpipeline-firstContainer">
          <p className="cardpipeline-paraone">Name</p>
        </div>
      </div>
      <div className="cardpipeline">
        <div className="cardpipeline-firstContainer">
          <p className="cardpipeline-paratwo">YOUR PROMOTION Pipeline</p>
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_386644.png"
            className="edit"
          />

          <img
            src="http://cdn.onlinewebfonts.com/svg/img_304350.png"
            className="delete"
          />
        </div>
      </div>
    </div>
  );
}

export default Pipelines;
