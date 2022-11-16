import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import "./styles/customfields.scss";

function Customfields() {
  const [fields, setFields] = useState(true);
  const [data, setData] = useState(true);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [Addfields, setAddfields] = useState(true);

  const handleClose = () => {
    setShow(false);
    setAddfields(false);
  };
  const handleShow = () => setShow(true);

  const handlefield = () => setAddfields(true);

  const Allfield = () => {
    setFields(true);
    setData(true);
  };
  const folders = () => {
    setFields(false);
    setData(true);
  };
  const deletefield = () => {
    setData(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "100vh",
        overflow: "auto",
        position: "sticky",
        top: "50px",
      }}
    >
      <div style={{ padding: "2%", marginTop: "2%" }}>
        <Card body style={{ width: "100%" }}>
          {" "}
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "80%" }}
            onClick={handleShow}
          >
            Add Folder
          </Button>
          <Button
            variant="success"
            style={{ marginLeft: "2%" }}
            onClick={handlefield}
          >
            AddField
          </Button>
        </Card>
      </div>{" "}
      <div style={{ padding: "3%" }}>
        <Card style={{ width: "100%", height: "720px" }}>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first" onClick={Allfield}>
                  All fields
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#second" onClick={folders}>
                  Folders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#third" onClick={deletefield}>
                  Delete fields
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {data ? (
            <>
              {" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Search"
                  style={{ width: "23%", marginTop: "2%", marginLeft: "2%" }}
                />
              </Form.Group>
              {fields ? (
                <>
                  {" "}
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          {" "}
                          <input type="checkbox" />
                        </th>
                        <th>Field Name</th>
                        <th>Folder</th>
                        <th>Unique Key</th>
                        <th>Created On</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <input type="checkbox" />
                        </td>
                        <td>First Name</td>
                        <td>Contact</td>

                        <td>conatact.first name</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Last Name</td>
                        <td>Contact</td>

                        <td>contact.last name</td>

                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>contact.email</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Phone</td>
                        <td>Contact</td>
                        <td>contact.phone</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Date Of Birth</td>
                        <td>Contact</td>
                        <td>contact.dateofbirth</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Contact Source</td>
                        <td>Contact</td>
                        <td>contact.contact source</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Contact Type</td>
                        <td>Contact</td>
                        <td>contact.contacttype</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Business Name</td>
                        <td>Contact</td>
                        <td>contact.buisnessname</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Street Address</td>
                        <td>Contact</td>
                        <td>contact.street address</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>City</td>
                        <td>Contact</td>
                        <td>contact.city</td>
                        <td>9/8/2022 at 8:57 PM</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={{ display: "flex", marginTop: "3%" }}>
                    <p>Showing 1 to 10 of 15 results</p>
                    <Pagination style={{ marginLeft: "60%" }}>
                      <Pagination.First />

                      <Pagination.Item>{1}</Pagination.Item>

                      <Pagination.Item>{2}</Pagination.Item>

                      <Pagination.Last />
                    </Pagination>
                  </div>
                </>
              ) : (
                <>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Folder Name</th>
                        <th>Fields</th>
                        <th>Created On</th>
                        <th>.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>.</td>
                        <td>contact</td>
                        <td>7</td>
                        <td>9/8/2022 at 8:57 PM</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>.</td>
                        <td>General info</td>
                        <td>8</td>
                        <td>9/8/2022 at 8:57 PM</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>.</td>
                        <td>Additional info</td>
                        <td>0</td>
                        <td>@9/8/2022 at 8:57 PM</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={{ display: "flex", marginTop: "3%" }}>
                    <p>Showing 1 to 10 of 15 results</p>
                    <Pagination style={{ marginLeft: "60%" }}>
                      <Pagination.First />

                      <Pagination.Item>{1}</Pagination.Item>

                      <Pagination.Item>{2}</Pagination.Item>

                      <Pagination.Last />
                    </Pagination>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "skyblue",
                  width: "100%",
                  marginTop: "1%",
                }}
              >
                <p>
                  You can view deleted Custom Fields on the Audit Logs page here
                </p>
              </div>
            </>
          )}
        </Card>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ marginLeft: "30%", color: "grey" }}>
              New Custom Field Folder
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ marginLeft: "9%" }}
            >
              <Form.Label>Folder name</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter folder name"
                style={{ width: "46%" }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back
            </Button>
            <Button variant="success" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal show={Addfields} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "grey" }}>
              New Custom Field
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", borderRight: "2px solid black" }}>
                <p style={{ color: "grey" }} onClick={() => setStep(0)}>
                  Text input
                </p>
                <div style={{ display: "flex" }}>
                  <Card
                    body
                    style={{ width: "29%", height: "60px" }}
                    onClick={() => setStep(0)}
                  >
                    singleline
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "2%" }}
                    onClick={() => setStep(1)}
                  >
                    multiline
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "2%" }}
                  >
                    {" "}
                    Textboxlist
                  </Card>
                </div>
                <p style={{ color: "grey" }}>Values</p>
                <div style={{ display: "flex" }}>
                  <Card body style={{ width: "29%", height: "60px" }}>
                    number
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "2%" }}
                  >
                    Phone
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "2%" }}
                  >
                    monetary
                  </Card>
                </div>
                <p style={{ color: "grey" }}>Choosing Options</p>
                <div style={{ display: "flex" }}>
                  <Card body style={{ width: "29%", height: "75px" }}>
                    <p>Dropdown(single)</p>
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "75px", marginLeft: "2%" }}
                  >
                    <p>Dropdown(multiple)</p>
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "75px", marginLeft: "2%" }}
                  >
                    <p style={{ fontSize: "smaller", marginTop: "2%" }}>
                      Radioselect
                    </p>
                  </Card>
                </div>
                <div style={{ display: "flex", marginTop: "3%" }}>
                  <Card body style={{ width: "29%", height: "60px" }}>
                    <p>checkbox</p>
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "3%" }}
                  >
                    <p>Datepicker</p>
                  </Card>
                </div>
                <p style={{ color: "grey" }}>Others</p>
                <div style={{ display: "flex" }}>
                  <Card body style={{ width: "29%", height: "60px" }}>
                    <p>fileupload</p>
                  </Card>
                  <Card
                    body
                    style={{ width: "29%", height: "60px", marginLeft: "2%" }}
                  >
                    <p>signature</p>
                  </Card>
                </div>
              </div>
              <hr />
              <div style={{ width: "50%" }}>
                <div style={{ marginLeft: "7%" }}>
                  <div hidden={step !== 0}>
                    {" "}
                    <p>Preview</p>
                    <Card body style={{ width: "95%" }}>
                      <input
                        placeholder="placeholder"
                        style={{ width: "95%" }}
                      />
                    </Card>
                  </div>

                  <div hidden={step !== 1}>
                    <p>Preview</p>
                    <Card body style={{ width: "95%", height: "100px" }}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        style={{ width: "95%", height: "69px" }}
                      >
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Customfields;
