import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Profile from "../../../assests/add-user.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";

function CampaignAdd() {
  const now = 60;
  return (
    <div
      style={{
        padding: "2%",
        backgroundColor: "#f0f5fc",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <h1 style={{ fontSize: "revert" }}> Campaign Details</h1>
      <div style={{ backgroundColor: "white", width: "100%", height: "850px" }}>
        <div style={{ padding: "2%" }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Awesome affiliate campaign"
            />
          </Form.Group>
          <p>Referral/lead sign up link</p>

          <InputGroup>
            <InputGroup.Text>Funnels</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
          </InputGroup>
          <p style={{ fontSize: "small" }}>
            This is the URL that affiliates will share across. Choose a funnel
            domain to see a the link
          </p>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Campaign description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="(optinal)" />
          </Form.Group>
          <div style={{ display: "flex", padding: "1%" }}>
            <img src={Profile} style={{ width: "1%" }} />
            <p style={{ color: "grey", fontSize: "small", marginLeft: "1%" }}>
              Add user
            </p>
          </div>
          <p style={{ fontSize: "small" }}>
            You can also upload more affiliates via Affiliates Page and add to
            this campaign
          </p>
          <hr />
          <div>
            <p>Pay-out frequency</p>
            <DropdownButton
              id="dropdown-item-button"
              title="select"
              variant="light"
              style={{ width: "35%" }}
            >
              <Dropdown.Item as="button">pay-15</Dropdown.Item>
              <Dropdown.Item as="button">pay-30</Dropdown.Item>
              <Dropdown.Item as="button">pay-45</Dropdown.Item>
            </DropdownButton>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              style={{ width: "30%" }}
            >
              <Form.Label>Commission percentage</Form.Label>
              <Form.Control type="email" placeholder="16%" />
            </Form.Group>
            <p style={{ marginTop: "2%" }}>Cookie life</p>
            <ProgressBar animated now={45} style={{ width: "17%" }} />
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                height: "80px",
                marginTop: "4%",
              }}
            >
              <p style={{ fontSize: "smaller", padding: "3%" }}>
                Once you click Create/Update Campaign, a templatized email will
                be sent to all the enrolled affiliates with their unique
                affiliate link's'. View the email template
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "80%", marginTop: "3%" }}>
        <Button variant="light">Back</Button>
        <Button variant="primary" style={{ marginLeft: "12%" }}>
          {" "}
          create campaign
        </Button>
      </div>
    </div>
  );
}

export default CampaignAdd;
