import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/Calendar.scss";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Calendar() {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [code, setCode] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => setAdd(true);
  const handleCode = () => setCode(true);
  return (
    <div
      style={{ marginTop: "5%", backgroundColor: "#f0f5fc", height: "100vh" }}
    >
      <div style={{ padding: "34px", display: "flex" }}>
        <div style={{ display: "flex" }}>
          <p>calendars</p>
          <p
            style={{ marginLeft: "3%", color: "blue", cursor: "pointer" }}
            onClick={() => handleShow()}
          >
            calendarpreference
          </p>
          <p
            style={{ marginLeft: "3%", color: "blue", cursor: "pointer" }}
            onClick={handleCode}
          >
            calendarcode
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <Form.Control
            type="text"
            placeholder="search Groups and calendars"
            style={{ width: "267px", marginLeft: "506px" }}
          />
          <Button
            variant="success"
            style={{ width: "52%", marginLeft: "5%", cursor: "pointer" }}
            onClick={() => handleAdd()}
          >
            +AddGroup
          </Button>
        </div>
      </div>
      <div className="calendar-card">
        <p style={{ marginLeft: "4%", color: "grey" }}>unassigned</p>
        <hr />
        <div>
          <p className="dotted">
            <span style={{ margin: "3%", padding: "17%", cursor: "pointer" }}>
              +New Calendar
            </span>
          </p>
        </div>
        <div>
          <Card style={{ marginLeft: "5%", width: "88%", height: "66px" }}>
            <p style={{ fontSize: "smaller" }}> Free real estate consult</p>
            <div style={{ display: "flex" }}>
              <p
                style={{ fontSize: "large", color: "blue", cursor: "pointer" }}
              >
                /wjbjbdfbjdcxj
              </p>
              <p style={{ marginLeft: "47%" }}>...</p>
            </div>
          </Card>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calendar Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Start day (Calendar View)</p>
          <Dropdown style={{ marginLeft: "2%" }}>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              style={{ backgroundColor: "white", color: "black", width: "78%" }}
            >
              Sunday
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                Sunday
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">saturday</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Monday</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p style={{ color: "grey", fontSize: "smaller" }}>
            Start day for the calendar view under the scheduling tab.
          </p>
          <p>Widget Language</p>
          <Dropdown style={{ marginLeft: "2%" }}>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              style={{ backgroundColor: "white", color: "black", width: "78%" }}
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                english
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">saturday</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Monday</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p style={{ color: "grey", fontSize: "smaller" }}>
            Default is English. You can pass `lang` in query params to override
            this setting.
          </p>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p style={{ marginTop: "2%", marginLeft: "3%" }}>24 Time Format</p>
          </div>
          <p style={{ color: "grey", fontSize: "smaller" }}>
            Use 24h format instead of AM/PM in the Appointment Widget. You can
            pass `use24hFormat` in query params to override.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>{" "}
        </Modal.Footer>
      </Modal>

      <Modal show={add} onHide={handleClose}>
        <Modal.Header closeButton onClick={() => setAdd(false)}>
          <Modal.Title style={{ color: "grey" }}>Add Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add Description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={code} onHide={handleClose}>
        <Modal.Header closeButton onClick={() => setCode(false)}>
          <Modal.Title style={{ color: "grey" }}>Calendar Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginLeft: "3%" }}>
            <div style={{ display: "flex" }}>
              <p>Calendar Group</p>
              <Dropdown style={{ marginLeft: "13%" }}>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                  style={{ width: "193px" }}
                >
                  un Assigned
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Select Calendar group
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">unassigned</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ display: "flex" }}>
              <p>Calendar</p>
              <Dropdown style={{ marginLeft: "19%" }}>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  Free Real Estate Count
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Select calendar
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Free real estate
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <p>Calaendar URL</p>
              <p style={{ color: "grey" }}>
                https://link.cdp360.com/widget/booking/wEMIMJ9oFREl8Fdx1L8s
              </p>
              <p>Embed Code</p>
              <p style={{ color: "pink" }}>
                sdvfhjsvdghvzhnfhdvyfvhjsmf mzc xnhvsdjsbjmc mbcjh hcyvc hvjhqas
                cm fcyh
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Calendar;
