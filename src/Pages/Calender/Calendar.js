import React, { useState } from "react";
// import CalendarMonthView from "react-calendar-month-view";
// import Notification from "../../assests/notification.png";
import Line from "../../assests/line.png";
import Settings from "../../assests/settings.jpeg";
import Right from "../../assests/right.png";
import Left from "../../assests/left.png";
import Question from "../../assests/question.png";
// import DownArrow from "../../assests/down-arrow.png";
import Plus from "../../assests/plus.png";
// import Calendar from "react-calendar";

const Calendars = () => {
  // const [value, onChange] = useState(new Date());
  return (
    <div
      style={{
        width: "100%",
        background: "#f0f5fc",
        marginTop: "2%",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            background: "white",
            padding: "10px",
            boxShadow: "2px 1px  #adb5bd",
          }}
        >
          <h4 style={{ marginLeft: "2%" }}>Calendars</h4>
          <p style={{ marginLeft: "1%", marginTop: "0.3%" }}>Calendars</p>
          <p style={{ marginLeft: "1%", marginTop: "0.3%" }}>Appointments</p>
          <img style={{ width: "3%", height: "1%" }} src={Line} alt="line" />
          <img
            style={{ width: "1.8%", height: "1%", marginTop: "0.5%" }}
            src={Settings}
            alt="Settings"
          />
          <p style={{ marginLeft: "1%", marginTop: "0.3%" }}>
            Calendar settings
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div style={{ display: "flex" }}>
            <button
              style={{
                height: "34px",
                border: "none",
                borderRadius: "5px",
                marginLeft: "2%",
                marginTop: "1.5%",
                marginBottom: "1%",
                background: "white",
              }}
            >
              Today
            </button>
            <button
              style={{
                height: "34px",
                width: "3%",
                border: "none",
                borderRadius: "5px",
                marginLeft: "2%",
                marginTop: "1.5%",
                marginBottom: "1%",
                background: "#e3f4fb",
              }}
            >
              <img style={{ width: "100%" }} src={Left} alt="left" />
            </button>
            <button
              style={{
                height: "34px",
                width: "3%",
                border: "none",
                borderRadius: "5px",
                marginLeft: "1%",
                marginTop: "1.5%",
                marginBottom: "1%",
                background: "#e3f4fb",
              }}
            >
              <img style={{ width: "100%" }} src={Right} alt="left" />
            </button>
            <p
              style={{
                // width: "12%",
                fontSize: "14px",
                marginLeft: "1%",
                marginTop: "1.7%",
              }}
            >
              Sun, 30th Oct-Sat,5thNov
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <img
              style={{ width: "5%", height: "30%", marginTop: "2.5%" }}
              src={Question}
              alt="Question"
            />

            <select
              style={{
                // width: "23%",
                height: "34px",
                border: "none",
                borderRadius: "5px",
                marginTop: "1.5%",
                marginLeft: "1.5%",
                background: "#e3f4fb",
              }}
            >
              <option value="Free Real Estate Consult">
                Free Real Estate Consult
              </option>
              <option value="Radish">Calendar</option>
              {/* <option value="Cherry">Cherry</option> */}
            </select>

            <div>
              <select
                style={{
                  width: "60%",
                  height: "34px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#e3f4fb",
                  marginTop: "9%",
                  marginLeft: "9.5%",
                }}
              >
                <option value="All">All</option>
                <option value="Radish">Appointments</option>
                <option value="Cherry">Blocked slots</option>
              </select>
            </div>

            {/* <button
          style={{
            width: "11%",
            height: "34px",
            border: "none",
            borderRadius: "5px",
            background: "#e3f4fb",
            marginTop: "1.5%",
            marginLeft: "0.5%",
          }}
        > */}
            {/* Weekly &nbsp;&nbsp;&nbsp; */}
            <select
              style={{
                // width: "11%",
                height: "34px",
                border: "none",
                borderRadius: "5px",
                background: "#e3f4fb",
                marginTop: "1.4%",
                // marginLeft: "1.5%",
              }}
            >
              <option value="Weekly">Monthly</option>
              <option value="Radish">Weekly</option>
              <option value="Cherry">Daily</option>
            </select>
            {/* </button> */}
            <button
              style={{
                // width: "19%",
                height: "30px",
                border: "none",
                borderRadius: "5px",
                background: "#21bf21",
                marginTop: "1.5%",
                marginLeft: "1.5%",
                color: "white",
              }}
            >
              <img
                style={{
                  // width: "9%",
                  height: "28%",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                src={Plus}
                alt="Plus"
              />
              {/* <p
              style={{
                marginTop: "auto",
                marginLeft: "35px",
              }}
            > */}
              Book Appointment
              {/* </p> */}
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <Calendar style={{ width: "50%" }} onChange={onChange} value={value} /> */}
      </div>
    </div>
  );
};

export default Calendars;
