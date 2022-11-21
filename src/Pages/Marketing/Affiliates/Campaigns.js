import React from "react";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Edit from "../../../assests/edit.png";

function Campaigns() {
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
    </div>
  );
}

export default Campaigns;
