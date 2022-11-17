import React from "react";
import Calendar from "../../../assests/calendar.svg";
import Refresh from "../../../assests/refresh.svg";

const Analyzeform = () => {
  return (
    <div className="analyzeform-main-container">
      <div className="analyzeform-body">
        <h2 className="analyzeform-builder-text">Analyze</h2>
        <div
          className="analyzeform-calendar-main-holder"
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
            <div className="analyzeform-calendar-img-holder">
              <img
                className="analyzeform-calendar-img"
                src={Calendar}
                alt="Calendar"
              />
            </div>
            <div className="analyzeform-calendar-input-holder">
              <p className="analyzeform-calendar-input">Select date & time</p>
            </div>
          </div>
          <button className="analyzeform-btn">
            <img
              className="analyzeform-refresh-img"
              src={Refresh}
              alt="Refresh"
            />
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div className="analyzeform-text-holder">
        <p className="analyzeform-survey-p">No records found</p>
      </div>
    </div>
  );
};

export default Analyzeform;
