import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Eye from "../../../assests/eye (2).png";
import edit from "../../../assests/edit.png";
import clone from "../../../assests/duplicate.png";
function Emailtemplates() {
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "86vh",
        overflow: "auto",
      }}
    >
      <div style={{ marginTop: "3%" }}>
        <div style={{ marginLeft: "3%", display: "flex" }}>
          <h1 style={{ fontSize: "x-large", fontWeight: "300" }}>
            EmailTemplates
          </h1>
          <div style={{ display: "flex", marginLeft: "18%" }}>
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
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ marginLeft: "15%" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Search Email Templates" />
            </Form.Group>
          </div>
          <div style={{ marginLeft: "7%" }}>
            <Button variant="outline-info">CreateFolder</Button>{" "}
          </div>
          <div style={{ marginLeft: "5%" }}>
            <Button variant="success">+NEW</Button>
          </div>
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
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
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
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
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
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
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
    </div>
  );
}

export default Emailtemplates;
