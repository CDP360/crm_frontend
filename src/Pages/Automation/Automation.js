import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

function Automation() {
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
            width: "30%",
            marginTop: "auto",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Automation
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("")}
          >
            Workflows
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("/automation/campaigns")}
          >
            Campaigns
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("/automation/trigger")}
          >
            Triggers
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Automation