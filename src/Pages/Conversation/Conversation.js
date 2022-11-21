import React, { useState } from "react";
import "./Conversation.css";
import { Link } from "react-scroll";
import Edit from "../../assests/edit.png";
import Filter from "../../assests/filter.jpg";
import Search from "../../assests/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Conversation() {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={{ position: "sticky", top: "60px", backgroundColor: "white" }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" }} className="header">
            <p
              style={{ marginTop: "3%", fontSize: "large", fontWeight: "bold" }}
            >
              Conversation
            </p>
            <Link
              smooth={true}
              duration={500}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p onClick={() => setStep(0)}>conversation</p>
            </Link>
            <Link
              smooth={true}
              duration={500}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p onClick={() => setStep(1)}> Manualactions</p>
            </Link>
            <Link
              smooth={true}
              duration={500}
              onClick={() => setStep(2)}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p>Templeate</p>
            </Link>
            <Link
              style={{ marginTop: "3%", marginLeft: "3%" }}
              onClick={() => setStep(3)}
            >
              <p>TriggersLinks</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        hidden={step !== 0}
        style={{
          width: "25%",
          paddingLeft: "10px",
          height: "84%",
          backgroundColor: "#f2f7fa",
          marginTop: "1.5%",
        }}
      >
        <div className="point" style={{ display: "flex" }}>
          <Link smooth={true} duration={500}>
            <p>Unread</p>
          </Link>
          <Link smooth={true} duration={500} style={{ marginLeft: "3%" }}>
            <p>Recents</p>
          </Link>
          <Link smooth={true} duration={500} style={{ marginLeft: "3%" }}>
            <p>All</p>
          </Link>
        </div>
        <hr style={{ width: "331px", marginLeft: "-4%" }} />
        <div style={{ display: "flex" }}>
          <p>Messages</p>
          <img
            src={Filter}
            alt=""
            style={{
              width: "10%",
              height: "23px",
              marginTop: "4%",
              marginLeft: "39%",
              backgroundColor: "#f2f7fa",
            }}
          />
          <img
            src={Edit}
            alt=""
            style={{
              width: "10%",
              height: "23px",
              marginTop: "4%",
              marginLeft: "10%",
            }}
          />
        </div>
        <div>
          <button
            style={{
              display: "flex",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              marginLeft: "-2%",
            }}
          >
            <img
              src={Search}
              style={{ width: "20px", height: "20px", marginTop: "5px" }}
            />
            <p style={{ marginTop: "6px", marginLeft: "8%" }}>Search</p>
          </button>
        </div>
        <p
          style={{
            fontSize: "small",
            fontWeight: "100",
            marginLeft: "25%",
          }}
        >
          No conversations to show
        </p>
      </div>

      <div
        hidden={step !== 1}
        style={{
          backgroundColor: "#f0f5fc",
          height: "80vh",
          overflow:'auto'
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ padding: "3%", fontSize: "large" }}>Manual Actions</p>
          <Dropdown style={{ marginLeft: "43%" }}>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{ marginTop: "17%" }}
            >
              SelectCampaign/workflow
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown style={{ marginLeft: "3%" }}>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{ marginTop: "25%" }}
            >
              Select Assignee
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-1">CDP360 Sales</Dropdown.Item>
              <Dropdown.Item href="#/action-1">D S</Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Etouchworld Support
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">Gaberial Santos</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Nathiya Narmadha</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ marginLeft: "2%" }}>
            <Button variant="success" style={{ marginTop: "40%" }}>
              Lets start
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "85%" }}>
          <Button variant="light" style={{ width: "46%", color: "grey" }}>
            Prev
          </Button>
          <Button variant="light" style={{ width: "43%", color: "grey" }}>
            Next
          </Button>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "95%",
            height: "200px",
            borderRadius: "2%",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <div style={{ marginLeft: "34%", padding: "7%" }}>
            <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
              Good Work!
            </p>
            <p>You have no pending tasks</p>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "85%", marginTop: "3%" }}>
          <Button variant="light" style={{ width: "46%", color: "grey" }}>
            Prev
          </Button>
          <Button variant="light" style={{ width: "43%", color: "grey" }}>
            Next
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f0f5fc",
          padding: "5%",
          height: "80vh",
        }}
        hidden={step !== 2}
      >
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "large", fontWeight: "bold" }}>
            Message Templates
          </p>
          <span style={{ color: "grey" }}> 0 templates</span>
          <Dropdown style={{ marginLeft: "65%" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              + Add Template
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Add Text template</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Add email </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            marginTop: "3%",
            height: "50px",
          }}
        >
          <div
            style={{
              padding: "1%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ color: "grey", cursor: "pointer" }}>Name</p>
            <p style={{ color: "grey", cursor: "pointer" }}>Body</p>
            <p style={{ color: "grey", cursor: "pointer" }}>Attachments</p>
            <p style={{ color: "grey", cursor: "pointer" }}>Type</p>
          </div>
        </div>
      </div>
      <div
        hidden={step !== 3}
        style={{
          backgroundColor: "#f0f5fc",
          height: "80vh",
          padding: "1%",
        }}
      >
        <div style={{ marginLeft: "4%", marginTop: "5%" }}>
          <div style={{ display: "flex" }}>
            <p>Link</p>
            <Button
              variant="success"
              style={{ marginLeft: "83%", width: "11%" }}
              onClick={handleShow}
            >
              Add link
            </Button>
          </div>
          <p style={{ fontSize: "smaller", marginTop: "3%", color: "grey" }}>
            Trigger links allow you to put links inside SMS messages and emails,
            which allow you to track specific customer actions and trigger
            events based on when the link is clicked.
          </p>
          <hr />
          <p style={{ fontSize: "smaller", color: "grey", marginLeft: "24%" }}>
            You do not have any trigger link yet. Click here to create your
            first trigger link.
          </p>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Trigger Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link Url</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary">cancel</Button>
            <Button variant="success" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Conversation;
