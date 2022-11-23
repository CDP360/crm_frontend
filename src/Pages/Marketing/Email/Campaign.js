import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Edit from "../../../assests/edit.png";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Campaign() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "86vh",
        overflow: "auto",
      }}
    >
      <div style={{ display: "flex", padding: "3%" }}>
        <div style={{ width: "40%" }}>
          <h1 style={{ fontSize: "x-large", fontWeight: "300" }}>
            EmailCampaigns
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Status</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{
                color: "skyblue",
                backgroundColor: "white",
                border: "none",
              }}
            >
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Draft</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Archieved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Search Campaign Name" />
          </Form.Group>
          <Button variant="outline-info" onClick={() => handleShow()}>
            Create Folder
          </Button>
          <div style={{ borderLeft: "1px solid grey", height: "40px" }}></div>
          <Button variant="success">Create Campaign</Button>
        </div>
      </div>
      <hr />
      <div style={{ padding: "3%" }}>
        <Table style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "20%" }}>Schedule Date</th>
              <th style={{ width: "20%" }}>Execution Date</th>
              <th style={{ width: "20%" }}>Status</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Untitled campaign name </td>
              <td> Nov 19, 2022 04:48 pm</td>
              <td></td>
              <td>
                <img src={Edit} style={{ width: "6%" }} />
                <span style={{ color: "grey", padding: "4%", margin: "1%" }}>
                  Draft
                </span>
              </td>
              <td style={{ display: "flex" }}>
                <img
                  src={Edit}
                  style={{ width: "10%", height: "2%", marginTop: "2%" }}
                />
                <Dropdown style={{ marginLeft: "31%" }}>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to folder
                      <span style={{ color: "grey" }}>
                        Move this campaign to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      clone
                      <span style={{ color: "grey" }}>
                        create a copy of this campaign
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archeive campaign
                      <span style={{ color: "grey" }}>Hide the campaign</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permenently delete thiis campaign
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Untitled campaign name</td>
              <td> Nov 19, 2022 04:48 pm</td>
              <td></td>
              <td>
                <img src={Edit} style={{ width: "6%" }} />
                <span style={{ color: "grey", padding: "4%", margin: "1%" }}>
                  Draft
                </span>
              </td>
              <td style={{ display: "flex" }}>
                <img
                  src={Edit}
                  style={{ width: "10%", height: "2%", marginTop: "2%" }}
                />
                <Dropdown style={{ marginLeft: "31%" }}>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to folder
                      <span
                        style={{ color: "grey", padding: "4%", margin: "1%" }}
                      >
                        Move this campaign to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      clone
                      <span style={{ color: "grey" }}>
                        create a copy of this campaign
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archeive campaign
                      <span style={{ color: "grey" }}>Hide the campaign</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permenently delete thiis campaign
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Untitled campaign name</td>
              <td> Nov 19, 2022 04:48 pm </td>
              <td></td>
              <td>
                {" "}
                <img src={Edit} style={{ width: "6%" }} />
                <span style={{ color: "grey", padding: "4%", margin: "1%" }}>
                  Draft
                </span>
              </td>
              <td style={{ display: "flex" }}>
                {" "}
                <img
                  src={Edit}
                  style={{ width: "10%", height: "2%", marginTop: "2%" }}
                />
                <Dropdown style={{ marginLeft: "31%" }}>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to folder
                      <span style={{ color: "grey" }}>
                        Move this campaign to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      clone
                      <span style={{ color: "grey" }}>
                        create a copy of this campaign
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archeive campaign
                      <span style={{ color: "grey" }}>Hide the campaign</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permenently delete thiis campaign
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "white",
            marginTop: "-2.2%",
            display: "flex",
            justifyContent: "space-between",
            padding: "1%",
          }}
        >
          <div>
            <p style={{ color: "skyblue" }}>Showing 1 to 3 of 3 results</p>
          </div>
          <div style={{ display: "flex", height: "15%" }}>
            <Button
              variant="light"
              style={{ backgroundColor: "white", marginRight: "5%" }}
            >
              previous
            </Button>
            <Button
              variant="light"
              style={{ backgroundColor: "white", width: "100px" }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ marginLeft: "8%" }}
          >
            <Form.Label>Folder Name</Form.Label>
            <Form.Control type="text" style={{ width: "80%" }} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Campaign;
