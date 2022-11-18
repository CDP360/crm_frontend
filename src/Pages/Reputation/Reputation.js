import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Settings from "../../assests/settings.png";

function Reputation() {
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
            width: "40%",
            marginTop: "auto",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Reputation
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("")}
          >
            Overview
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("/reputation/request")}
          >
            Requests
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("/reputation/review")}
          >
            Reviews{" "}
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("/reputation/listing")}
          >
            Listings
            <span
              style={{
                border: "1px solid black",
                backgroundColor: "yellow",
                borderRadius: "5px",
                fontSize: "12px",
                padding: "1px",
              }}
            >
              New
            </span>
          </p>
          <div style={{ borderLeft: "1px solid gray", height: "20px" }}></div>
          <img
            src={Settings}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f0f5fc",
          position: "sticky",
          top: "98px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            textAlign: "end",
          }}
        >
          <button
            style={{
              backgroundColor: "#42c41d",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Send Review Request
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Reputation;
