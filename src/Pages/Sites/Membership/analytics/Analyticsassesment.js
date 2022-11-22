import React from "react";
import { useNavigate } from "react-router-dom";
import Left from "../../../../assests/left.png";
import Search from "../../../../assests/search.svg";
import Downarrow from "../../../../assests/downArrow.png";
import Table from "react-bootstrap/Table";

const Analyticsassesment = () => {
  const Navigate = useNavigate();
  return (
    <div style={{ margin: "2%", padding: "2rem 2rem 15rem 3rem" }}>
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            marginTop: "0.5rem",
            background: "white",
            borderRadius: "5px",
            width: "15rem",
          }}
        >
          <div style={{ background: "white", borderRadius: "5px" }}>
            <img style={{ marginTop: "0.75rem" }} src={Search} alt="Search" />
          </div>
          <div>
            <input
              style={{ border: "none", width: "100%", height: "2.5rem" }}
              placeholder="Search by name, emai..."
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#515a6e",
              }}
            >
              Products
            </p>
            <p
              style={{
                marginLeft: "0.5rem",
                color: "#4299e1",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              All
            </p>
            <img
              style={{
                width: "1rem",
                height: "1rem",
                marginLeft: "0.5rem",
              }}
              src={Downarrow}
              alt="Downarrow"
            />
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "1rem",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginRight: "0.5rem",
                fontSize: "14px",
                fontWeight: "500",
                color: "#515a6e",
              }}
            >
              Results
            </p>
            <p
              style={{
                marginLeft: "0.5rem",
                color: "#4299e1",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              All
            </p>
            <img
              style={{
                width: "1rem",
                height: "1rem",
                marginLeft: "0.5rem",
              }}
              src={Downarrow}
              alt="Downarrow"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Table>
          <thead>
            <tr style={{ background: "#e2e8f0" }}>
              <th>Title</th>
              <th>Name</th>
              <th>Email</th>
              <th>Completed</th>
              <th>Result</th>
              <th>Percentage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ background: "white" }}>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>No Data</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Analyticsassesment;
