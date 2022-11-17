import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Reputationmanagement() {
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "100vh",
        padding: "2%",
        overflow: "auto",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "30px",
          backgroundColor: "white",
          padding: "1%",
        }}
      >
        <Button variant="success" style={{ marginLeft: "84%" }}>
          Send review request
        </Button>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "230px",
          marginTop: "5%",
          padding: "1%",
        }}
      >
        <p>Leave a Review Link</p>
        <hr />
        <div>
          <p style={{ marginLeft: "2%" }}>Review Link</p>
          <div style={{ display: "flex" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="google.com/places"
                style={{ width: "313px", marginLeft: "8%" }}
              />
            </Form.Group>
            <Button
              variant="outline-primary"
              style={{ width: "11%", height: "37px", marginLeft: "4%" }}
            >
              Generate Link
            </Button>
          </div>
          <Button variant="success" style={{ marginLeft: "2%", width: "10%" }}>
            save
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "280px",
          marginTop: "5%",
          padding: "1%",
        }}
      >
        <p>Review Request Behavior</p>
        <hr />
        <div>
          <p style={{ marginLeft: "2%" }}>
            When review request button is clicked
          </p>
          <p style={{ marginLeft: "2%", fontSize: "small", fontWeight: "200" }}>
            Decide what happens when you click the review request or check-in
            client button
          </p>
          <div style={{ display: "flex", marginLeft: "2%" }}>
            <input type="radio" />
            <p style={{ marginTop: "1%" }}>
              Send review request immediately once
            </p>
          </div>
          <div style={{ display: "flex", marginLeft: "2%" }}>
            <input type="radio" />
            <p style={{ marginTop: "1%" }}>
              Follow a custom schedule for review requests
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "1%",
          width: "100%",
          height: "600px",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "flex", marginTop: "2%" }}>
          <Form.Check type="switch" id="custom-switch" />
          <p style={{ marginLeft: "2%" }}>Customize Review SMS</p>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "2%" }}> RequestwithImage</p>

            <div style={{ display: "flex", marginLeft: "350px" }}>
              <p>image</p>

              <Form.Check
                type="switch"
                id="custom-switch"
                style={{ marginLeft: "-2%" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#bcdaf8",
              width: "20%",
              height: "150px",

              marginLeft: "1%",
            }}
          >
            <Button
              variant="outline-primary"
              style={{ marginTop: "45%", width: "99%" }}
            >
              Add images
            </Button>
          </div>
          <p style={{ color: "grey", fontSize: "small", marginLeft: "1%" }}>
            SMS sent to User
          </p>
          <p style={{ fontSize: "large", marginLeft: "1%" }}>Message</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="messages"
              style={{ width: "50%", marginLeft: "1%", height: "100px" }}
            />
          </Form.Group>
          <Button variant="success" style={{ width: "20%", marginLeft: "1%" }}>
            Save
          </Button>
        </div>
        <div style={{ marginLeft: "14%", marginTop: "2%" }}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.WZ8sLXwxOlidvPEJY_b8PQHaIL&pid=Api&P=0"
            style={{ width: "40%", marginLeft: "56%", marginTop: "-45%" }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "1%",
          width: "100%",
          height: "600px",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "flex", marginTop: "2%" }}>
          <Form.Check type="switch" id="custom-switch" />
          <p style={{ marginLeft: "2%" }}>Customize Review Email</p>
        </div>
        <hr />
        <div>
          <div style={{ marginLeft: "1%" }}>
            <p>Email Sent to the User</p>
            <p>Subject</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Your Feedback Means A Lot"
                style={{ width: "40%" }}
              />
            </Form.Group>
            <p>Heading</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Thank you for your business!"
                style={{ width: "40%" }}
              />
            </Form.Group>
            <p>Message</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Would you be so kind as to recommend us?"
                style={{ height: "100px", width: "40%" }}
              />
            </Form.Group>
            <p>Positive Answer</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Yes"
                style={{ width: "40%" }}
              />
            </Form.Group>
          </div>

          <div style={{ marginLeft: "14%", marginTop: "2%" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.WZ8sLXwxOlidvPEJY_b8PQHaIL&pid=Api&P=0"
              style={{ width: "40%", marginLeft: "56%", marginTop: "-53%" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "1%",
          width: "100%",
          height: "900px",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "flex", marginTop: "2%" }}>
          <Form.Check type="switch" id="custom-switch" />
          <p style={{ marginLeft: "2%" }}>Customize Review Widget</p>
        </div>
        <hr />
        <div>
          <p style={{ fontWeight: "bold", marginLeft: "3%" }}>
            Review Widget Display{" "}
          </p>
          <p style={{ marginLeft: "3%" }}>Header Title</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Customer Testimonials"
              style={{ width: "40%", marginLeft: "3%" }}
            />
          </Form.Group>
          <p style={{ marginLeft: "3%" }}>Title color</p>
          <div
            style={{
              backgroundColor: "#f0f5fc",
              width: "20%",
              height: "40px",
              marginLeft: "3%",
            }}
          >
            <p style={{ marginLeft: "6%", padding: "3%", marginLeft: "3%" }}>
              #2a3135
            </p>
          </div>
          <p style={{ marginLeft: "3%" }}>Rating Color</p>
          <div
            style={{
              backgroundColor: "#f0f5fc",
              width: "20%",
              height: "40px",
              marginLeft: "3%",
            }}
          >
            <p style={{ marginLeft: "6%", padding: "3%", marginLeft: "3%" }}>
              #ffbc00
            </p>
          </div>
          <p style={{ marginLeft: "3%" }}>Background Color</p>
          <div
            style={{
              backgroundColor: "#f0f5fc",
              width: "20%",
              height: "40px",
              marginLeft: "3%",
            }}
          >
            <p style={{ marginLeft: "6%", padding: "3%", marginLeft: "3%" }}>
              #2a3135
            </p>
          </div>
          <p style={{ marginLeft: "3%" }}> Disable Powered By</p>
          <div
            style={{
              backgroundColor: "#f0f5fc",
              width: "20%",
              height: "40px",
              marginLeft: "3%",
            }}
          >
            <Form.Check type="switch" id="custom-switch" />
            <div style={{ marginTop: "15%" }}>
              <hr style={{ width: "528px" }} />
            </div>
            <p
              style={{
                fontSize: "large",
                fontWeight: "bolder",
                color: "grey",
                marginLeft: "3%",
              }}
            >
              code
            </p>
            <p style={{ fontSize: "small", marginLeft: "3%" }}>
              Add the below code in your website.
            </p>
            <div>
              <Card style={{ width: "100%", height: "200px" }}>
                <Card.Body>
                  <p>script type= "script" in a code of javascript</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reputationmanagement;
