import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Reputationmanagement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [step, setStep] = useState(0);
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
        <Button
          variant="success"
          style={{ marginLeft: "84%" }}
          onClick={handleShow}
        >
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
          width: "100%",
          height: "700px",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "1%",
            borderBottom: "1px solid grey",
          }}
        >
          <Form.Check type="switch" id="custom-switch" />
          <p style={{ marginLeft: "2%" }}>Customize Review SMS</p>
        </div>
        <div style={{ display: "flex", marginTop: "2%" }}>
          <div
            style={{
              width: "50%",
              borderRight: "1px solid grey",
            }}
          >
            <div>
              <div style={{ display: "flex", marginLeft: "11%" }}>
                <p style={{ color: "grey" }}>Request with image</p>
                <div style={{ display: "flex", marginLeft: "47%" }}>
                  <p style={{ color: "grey" }}>image</p>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    style={{ marginLeft: "-10%" }}
                  />
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#f0f5fc",
                  marginLeft: "10%",
                  width: "35%",
                  height: "200px",
                }}
              >
                <Button
                  variant="outline-primary"
                  style={{ width: "100%", marginTop: "70%" }}
                >
                  Add image
                </Button>
              </div>
              <p style={{ color: "grey", marginLeft: "10%", marginTop: "5%" }}>
                SMS to user
              </p>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{ marginLeft: "10%" }}
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="message"
                  style={{ height: "150px", width: "90%" }}
                />
              </Form.Group>
              <Button
                variant="success"
                style={{ marginLeft: "10%", width: "20%" }}
              >
                Save
              </Button>
            </div>
          </div>
          <div style={{ marginLeft: "14%", marginTop: "2%" }}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.WZ8sLXwxOlidvPEJY_b8PQHaIL&pid=Api&P=0"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "700px",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "1%",
            borderBottom: "1px solid black",
          }}
        >
          <Form.Check type="switch" id="custom-switch" />
          <p style={{ marginLeft: "4%" }}>Customize Review Email</p>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              marginLeft: "4%",
              marginTop: "3%",
              borderRight: "1px solid black",
            }}
          >
            <p>Email Sent to the User</p>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ marginLeft: "10%" }}
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Feedback Means A Lot"
                style={{ width: "90%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ marginLeft: "10%" }}
            >
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Thank you for your business!"
                style={{ width: "90%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ marginLeft: "10%" }}
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Would you be so kind as to recommend us?"
                style={{ width: "90%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ marginLeft: "10%" }}
            >
              <Form.Label>Positive Answer</Form.Label>
              <Form.Control
                type="text"
                placeholder="yes"
                style={{ width: "50%" }}
              />
            </Form.Group>
            <Button
              variant="success"
              style={{ width: "30%", marginLeft: "10%" }}
            >
              Save
            </Button>
          </div>
          <div>
            <div
              style={{
                marginLeft: "14%",
                marginTop: "2%",
              }}
            >
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.WZ8sLXwxOlidvPEJY_b8PQHaIL&pid=Api&P=0"
                style={{ width: "100%" }}
                hidden={step !== 0}
              />
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.kiMzq9RyjHX-cx-v4iVXmQHaFE&pid=Api&P=0"
                style={{ width: "100%", marginTop: "36%" }}
                hidden={step !== 1}
              />
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.gHi2KuyAG3qkl3azNcjO-gHaEu&pid=Api&P=0"
                style={{ width: "100%", marginTop: "36%" }}
                hidden={step !== 2}
              />
              <div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(0)}>
                    Mobile
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(1)}>
                    Tablet
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(2)}>
                    web
                  </p>
                </div>
                <hr style={{ marginTop: "2%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "900px",
          marginTop: "3%",
        }}
      >
        <div style={{ padding: "2%" }}>
          <p>Customize Review Widget</p>
        </div>
        <hr />
        <div style={{ marginLeft: "4%", display: "flex" }}>
          <div style={{ width: "50%", borderRight: "1px solid black" }}>
            <p>Review Widget Display</p>
            <p>Header Title</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Customer Testimonials"
                style={{ width: "70%" }}
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
              <Form.Check
                type="switch"
                id="custom-switch"
                style={{ padding: "7%" }}
              />
              <p style={{ fontSize: "large", color: "grey" }}>code</p>
              <p style={{ color: "grey", fontSize: "small" }}>
                Add the below code in your website.
              </p>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="script"
                  style={{ width: "300px" }}
                />
              </Form.Group>
            </div>
            <div></div>
          </div>
          <div>
            <div
              style={{
                marginLeft: "14%",
                marginTop: "2%",
              }}
            >
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.WZ8sLXwxOlidvPEJY_b8PQHaIL&pid=Api&P=0"
                style={{ width: "100%" }}
                hidden={step !== 0}
              />
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.kiMzq9RyjHX-cx-v4iVXmQHaFE&pid=Api&P=0"
                style={{ width: "100%", marginTop: "36%" }}
                hidden={step !== 1}
              />
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.gHi2KuyAG3qkl3azNcjO-gHaEu&pid=Api&P=0"
                style={{ width: "100%", marginTop: "36%" }}
                hidden={step !== 2}
              />
              <div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(0)}>
                    Mobile
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(1)}>
                    Tablet
                  </p>
                  <p style={{ cursor: "pointer" }} onClick={() => setStep(2)}>
                    web
                  </p>
                </div>
                <hr style={{ marginTop: "2%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Client Check In</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: "77%", marginLeft: "7%" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Customer name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer email or phone</Form.Label>
              <Form.Control type="text" placeholder="Email or Phone" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-light" style={{ color: "grey" }}>
              Send a review lite
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Reputationmanagement;
