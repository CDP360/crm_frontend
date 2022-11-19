import React from "react";
import { useNavigate } from "react-router-dom";

function Opportunities() {
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
          <img style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
