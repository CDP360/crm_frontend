import React from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import folder from "../../../assests/folder.png";
function Affiliates() {
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "86vh",
        overflow: "auto",
        padding: "2%",
      }}
    >
      <div style={{ display: "flex", padding: "1%" }}>
        <div style={{ width: "40%" }}>
          <h1 style={{ fontSize: "x-large", fontWeight: "300" }}>Affiliates</h1>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <Button variant="light" style={{ marginLeft: "66%" }}>
            Submit Feedback
          </Button>
          <Button variant="primary" style={{ marginLeft: "2%" }}>
            + Add
          </Button>
        </div>
      </div>

      <div style={{ padding: "2%" }}>
        <div
          style={{ backgroundColor: "white", width: "100%", height: "400px" }}
        >
          <div style={{ padding: "1%" }}>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              style={{ width: "21%", marginLeft: "77%" }}
            >
              <Form.Control type="text" placeholder="Search affiliates name" />
            </Form.Group>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#f9f8fb",
            }}
          >
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Affiliate Name{" "}
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Email
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Campaigns
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Customers
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Owed
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Paid
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Revenue
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              {" "}
              Join Date
            </p>
          </div>
          <hr style={{ marginTop: "auto" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "6%",
            }}
          >
            <img src={folder} style={{ width: "3%" }} />
            <p style={{ color: "grey" }}>No data</p>
          </div>
          <div style={{ display: "flex", marginLeft: "76%", marginTop: "4%" }}>
            <Button variant="light">previous</Button>
            <Button variant="outline-primary" style={{ marginLeft: "8%" }}>
              1
            </Button>
            <Button variant="light" style={{ marginLeft: "8%" }}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiliates;
