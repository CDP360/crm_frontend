import React from "react";
import Refresh from "../../../assests/refresh.svg";
import Calendar from "../../../assests/calendar.svg";
import Search from "../../../assests/search.svg";
import Downarrow from "../../../assests/downArrow.png";

const Submissionform = () => {
  return (
    <div className="submissionform-main-container">
      <div className="submissionform-body">
        <h2 className="submissionform-builder-text">Submission</h2>
        <div
          className="submissionform-calendar-main-holder"
          style={{ display: "flex" }}
        >
          <div
            style={{
              background: "white",
              marginRight: "3%",
              display: "flex",
              width: "20rem",
              borderRadius: "5px",
            }}
          >
            <div className="submissionform-calendar-img-holder">
              <img
                className="submissionform-calendar-img"
                src={Calendar}
                alt="Calendar"
              />
            </div>
            <div className="submissionform-calendar-input-holder">
              <p className="submissionform-calendar-input">
                Select date & time
              </p>
            </div>
          </div>
          <button className="submissionform-btn">
            <img
              className="submissionform-refresh-img"
              src={Refresh}
              alt="Refresh"
            />
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div className="submissionform-card-body">
        <div className="submissionform-left">
          <div>
            <select className="submissionform-select">
              <option value="All Form">All Form</option>
              <option value="All"> Home Buyer Info Form </option>
              <option value=" Home Buyers List Form ">
                Home Buyers List Form
              </option>
              <option value=" Home Sellers Form "> Home Sellers Form </option>
              <optgroup label="Facebook">
                <option>Lead Form</option>
              </optgroup>
              <optgroup label="Chat Widget">
                <option>Widget Form</option>
              </optgroup>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "0.5rem",
              background: "white",
              borderRadius: "5px",
            }}
          >
            <div style={{ background: "white" }}>
              <img style={{ marginTop: "0.75rem" }} src={Search} alt="Search" />
            </div>
            <div>
              <input
                style={{ border: "none", width: "100%", height: "2.5rem" }}
                placeholder="Search by name, emai..."
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ width: "55%" }}>
              <label>
                Totals: <strong>0</strong> records | 1 of 1 pages
              </label>
            </div>
            <button
              style={{
                border: "none",
                background: "white",
                width: "4rem",
                marginRight: "0.5rem",
                height: "3rem",
                borderRadius: "5px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginTop: "0.75rem" }}>10</p>
                <img
                  style={{ width: "32%", height: "1%", marginLeft: "1rem" }}
                  src={Downarrow}
                  alt="Downarrow"
                />
              </div>
            </button>
          </div>
          <div
            style={{
              background: "white",
              marginTop: "1.5rem",
              borderRadius: "5px",
              borderTop: "5px solid #2d8cf0",
            }}
          >
            <div style={{}}>
              <input
                type="checkbox"
                style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
              />
            </div>
            <hr />
            <div
              style={{
                height: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>No records found</p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            height: "4rem",
          }}
          className="submissionform-right"
        >
          <p>No records found</p>
        </div>
      </div>
    </div>
  );
};

export default Submissionform;
