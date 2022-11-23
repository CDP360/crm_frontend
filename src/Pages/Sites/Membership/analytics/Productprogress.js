import React from "react";
import { useNavigate } from "react-router-dom";
import Left from "../../../../assests/left.png";

const Productprogress = () => {
  const Navigate = useNavigate();
  return (
    <div style={{ margin: "2%", padding: "2rem 3rem 15rem 3rem" }}>
      <div style={{ display: "flex" }}>
        <img
          onClick={() => Navigate("/sites/membership/Analytics")}
          style={{ width: "1.5rem", height: "1.5rem" }}
          src={Left}
          alt="Left"
        />
        <p
          style={{
            color: "#3182ce",
            fontWeight: "400",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          All Analytics
        </p>
      </div>
      <div>
        <p style={{ fontSize: "1.5rem", fontWeight: "600", color: "#4a5568" }}>
          Product Progress
        </p>
      </div>
    </div>
  );
};

export default Productprogress;
