import React from "react";
import Calendar from "../../../assests/calendar.svg";
import Refresh from "../../../assests/refresh.svg";

const Analyze = () => {
  return (
    <div className="analyzesurvey-main-container">
      <div className="analyzesurvey-body">
        <h2 className="analyzesurvey-builder-text">Analyze</h2>
        <div
          className="analyzesurvey-calendar-main-holder"
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
            <div className="analyzesurvey-calendar-img-holder">
              <img
                className="analyzesurvey-calendar-img"
                src={Calendar}
                alt="Calendar"
              />
            </div>
            <div className="analyzesurvey-calendar-input-holder">
              <p className="analyzesurvey-calendar-input">Select date & time</p>
            </div>
          </div>
          <button className="analyzesurvey-btn">
            <img
              className="analyzesurvey-refresh-img"
              src={Refresh}
              alt="Refresh"
            />
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div className="analyzesurvey-text-holder">
        <p className="analyzesurvey-survey-p">
          You do not have any survey yet. Please create survey first to see
          analyze here.
        </p>
      </div>
    </div>
  );
};

export default Analyze;
