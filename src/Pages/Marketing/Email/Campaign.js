import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Edit from "../../../assests/edit.png";

function Campaign() {
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
            EmailCampaigns
          </h1>
          <div style={{ display: "flex", marginLeft: "18%" }}>
            <p style={{ marginLeft: "18%", marginTop: "4%" }}>Status</p>
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
                All
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
              <Form.Control type="email" placeholder="Search Campaign Name" />
            </Form.Group>
          </div>
          <div style={{ marginLeft: "2%" }}>
            <Button variant="outline-info">CreateFolder</Button>{" "}
          </div>
          <div style={{ marginLeft: "2%" }}>
            <Button variant="success">CreateCampaign</Button>
          </div>
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
                <span style={{ color: "grey" }}>Draft</span>
              </td>
              <td style={{ display: "flex" }}>
                {" "}
                <img src={Edit} style={{ width: "10%" }} />
                <Dropdown style={{ marginLeft: "31%" }}>
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
              <td>Untitled campaign name</td>
              <td> Nov 19, 2022 04:48 pm</td>
              <td></td>
              <td>
                {" "}
                <img src={Edit} style={{ width: "6%" }} />
                <span style={{ color: "grey" }}>Draft</span>
              </td>
              <td style={{ display: "flex" }}>
                {" "}
                <img src={Edit} style={{ width: "10%" }} />
                <Dropdown style={{ marginLeft: "31%" }}>
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
              <td>Untitled campaign name</td>
              <td> Nov 19, 2022 04:48 pm </td>
              <td></td>
              <td>
                {" "}
                <img src={Edit} style={{ width: "6%" }} />
                <span style={{ color: "grey" }}>Draft</span>
              </td>
              <td style={{ display: "flex" }}>
                {" "}
                <img src={Edit} style={{ width: "10%" }} />
                <Dropdown style={{ marginLeft: "31%" }}>
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

export default Campaign;
