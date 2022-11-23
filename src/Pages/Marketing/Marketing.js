import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Marketing() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ backgroundColor: "white", position: "sticky", top: "60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
            marginTop: "2%",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Marketing
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("")}
          >
            Social Planner
          </p>

          <Dropdown style={{ marginTop: "-7px" }}>
            <Dropdown.Toggle
              variant="light"
              style={{ backgroundColor: "white", border: "none" }}
            >
              Email
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigate("marketing/email/campaigns")}
              >
                Campaigns
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => navigate("marketing/email/templates")}
              >
                Templates
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("marketing/templates")}
          >
            Templates
          </p>
          <Dropdown style={{ marginTop: "-7px" }}>
            <Dropdown.Toggle
              variant="light"
              style={{ backgroundColor: "white", border: "none" }}
            >
              Trigger Links
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("marketing/links")}>
                Links
              </Dropdown.Item>

              <Dropdown.Item onClick={() => navigate("marketing/analyze")}>
                Analyze
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{ marginTop: "-7px" }}>
            <Dropdown.Toggle
              variant="light"
              style={{ backgroundColor: "white", border: "none" }}
            >
              Affiliate Manager
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("marketing/campaigns")}>
                Campaigns
              </Dropdown.Item>

              <Dropdown.Item onClick={() => navigate("marketing/affiliates")}>
                Affiliates
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("marketing/payouts")}>
                Payouts
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Marketing;
