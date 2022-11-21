import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
function Templates() {
  return (
    <div style={{ padding: "2%", backgroundColor: "#f0f5fc", height: "80vh" }}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "large" }}>Message Templates </p>
          <span style={{ color: "grey " }}>0 templates</span>
        </div>
        <div style={{ marginLeft: "65%" }}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              + Add Template
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Card body style={{ width: "99%", height: "60px", marginTop: "2%" }}>
        <div style={{ display: "flex" }}>
          <p style={{ color: "grey" }}>Name</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Body</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Attachments</p>
          <p style={{ color: "grey", marginLeft: "15%" }}>Type</p>
        </div>
      </Card>
    </div>
  );
}

export default Templates;
