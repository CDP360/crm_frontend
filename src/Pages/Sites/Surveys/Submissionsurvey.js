import React from "react";
// import Calendar from "../../../assests/calendar.svg";
import Refresh from "../../../assests/refresh.svg";
import Calendar from "../../../assests/calendar.svg";

const Submission = () => {
  return (
    <div className="submissionsurvey-main-container">
      <div className="submissionsurvey-body">
        <h2 className="submissionsurvey-builder-text">Submission</h2>
        <div
          className="submissionsurvey-calendar-main-holder"
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
            <div className="submissionsurvey-calendar-img-holder">
              <img
                className="submissionsurvey-calendar-img"
                src={Calendar}
                alt="Calendar"
              />
            </div>
            <div className="submissionsurvey-calendar-input-holder">
              <p className="submissionsurvey-calendar-input">
                Select date & time
              </p>
            </div>
          </div>
          <button className="submissionsurvey-btn">
            <img
              className="submissionsurvey-refresh-img"
              src={Refresh}
              alt="Refresh"
            />
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div className="submissionsurvey-text-holder">
        <p className="submissionsurvey-survey-p">
          You do not have any survey yet. Please create survey first to see
          analyze here.
        </p>
      </div>
    </div>
  );
};

export default Submission;
