import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Eye from "../../../assests/eye (2).png";
import edit from "../../../assests/edit.png";
import clone from "../../../assests/duplicate.png";
import Modal from "react-bootstrap/Modal";
function Emailtemplates() {
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
      <div style={{ padding: "2%", display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h1
            style={{
              fontSize: "x-large",
              fontWeight: "300",
              marginBottom: "auto",
            }}
          >
            EmailTemplates
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Dropdown
            style={{
              marginLeft: "18%",
            }}
          >
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{
                color: "skyblue",
                backgroundColor: "white",
                border: "none",
              }}
            >
              Active
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Archieved</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Search Email Templates" />
          </Form.Group>
          <Button
            variant="outline-info"
            onClick={handleShow}
            style={{ height: "72%" }}
          >
            Create Folder
          </Button>
          <div style={{ borderLeft: "1px solid grey", height: "39px" }}></div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              + NEW
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                Create from Exicisting Campaign
                <span style={{ color: "grey" }}>
                  Pick a template used in excisting campaigns
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{ display: "flex", flexDirection: "column" }}
              >
                Email Marketing Templates{" "}
                <span style={{ color: "grey" }}>
                  Choose from a world of templates
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                Blank Templates
                <span style={{ color: "grey" }}>
                  Design a new blank email from scratch
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                style={{ display: "flex", flexDirection: "column" }}
              >
                import Email
                <span style={{ color: "grey" }}>
                  import Email from external source
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <hr />
      <div style={{ padding: "3%" }}>
        <Table style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th style={{ width: "30%" }}>TITLE</th>
              <th style={{ width: "30%" }}> LAST UPDATED</th>
              <th style={{ width: "30%" }}></th>
              <th style={{ width: "30%" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NewTemplate</td>
              <td> oct 19, 2022 04:48 pm</td>
              <td style={{ display: "flex", height: "60px" }}>
                <img
                  src={Eye}
                  style={{ width: "8%", height: "46%", marginTop: "3%" }}
                />
                <img
                  src={edit}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
                <img
                  src={clone}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
              </td>
              <td style={{ height: "10px" }}>
                {" "}
                <Dropdown>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Preview Template
                      <span style={{ color: "grey" }}>
                        Get a preview of the template
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Share
                      <span style={{ color: "grey" }}>
                        share this email across other locations
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to the folder
                      <span style={{ color: "grey" }}>
                        move this template to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Create campaign
                      <span style={{ color: "grey" }}>
                        create campaign from this template
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-5"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archieve
                      <span style={{ color: "grey" }}>Hide the template</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-6"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permanently delete this template
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>NewTemplate</td>
              <td> oct 19, 2022 04:48 pm</td>
              <td style={{ display: "flex", height: "60px" }}>
                <img
                  src={Eye}
                  style={{ width: "8%", height: "46%", marginTop: "3%" }}
                />
                <img
                  src={edit}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
                <img
                  src={clone}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
              </td>
              <td style={{ height: "10px" }}>
                {" "}
                <Dropdown>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Preview Template
                      <span style={{ color: "grey" }}>
                        Get a preview of the template
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Share
                      <span style={{ color: "grey" }}>
                        share this email across other locations
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to the folder
                      <span style={{ color: "grey" }}>
                        move this template to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Create campaign
                      <span style={{ color: "grey" }}>
                        create campaign from this template
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-5"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archieve
                      <span style={{ color: "grey" }}>Hide the template</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-6"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permanently delete this template
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>NewTemplate</td>
              <td> oct 19, 2022 04:48 pm</td>
              <td style={{ display: "flex", height: "60px" }}>
                <img
                  src={Eye}
                  style={{ width: "8%", height: "46%", marginTop: "3%" }}
                />
                <img
                  src={edit}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
                <img
                  src={clone}
                  style={{
                    width: "8%",
                    marginLeft: "4%",
                    height: "46%",
                    marginTop: "3%",
                  }}
                />
              </td>
              <td style={{ height: "10px" }}>
                {" "}
                <Dropdown>
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Preview Template
                      <span style={{ color: "grey" }}>
                        Get a preview of the template
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Share
                      <span style={{ color: "grey" }}>
                        share this email across other locations
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Move to the folder
                      <span style={{ color: "grey" }}>
                        move this template to a folder
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Create campaign
                      <span style={{ color: "grey" }}>
                        create campaign from this template
                      </span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item
                      href="#/action-5"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Archieve
                      <span style={{ color: "grey" }}>Hide the template</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-6"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Delete
                      <span style={{ color: "grey" }}>
                        Permanently delete this template
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "white",
            marginTop: "-1.2%",
            display: "flex",
            justifyContent: "space-between",
            padding: "1%",
          }}
        >
          <div>
            <p style={{ color: "skyblue" }}>Showing 1 to 5 of 5 results</p>
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

export default Emailtemplates;
