import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BarChart from "../../../../assests/bar-chart-fill.svg";
import Clipboard from "../../../../assests/clipboard-check.svg";

const Analyticsmembership = () => {
  const navigate = useNavigate();

  return (
    <div className="Analyticsmembership-main-container">
      <div className="Analyticsmembership-analytics-p-holder">
        <p className="Analyticsmembership-analytics-p"> Analytics </p>
      </div>
      <div className="Analyticsmembership-main-card-holder">
        <div className="Analyticsmembership-main-card">
          <div className="Analyticsmembership-card-1">
            <div className="Analyticsmembership-barchart-holder">
              <img
                className="Analyticsmembership-barchart"
                src={BarChart}
                alt=""
              />
            </div>
            <div className="Analyticsmembership-card-p-holder">
              <p className="Analyticsmembership-card-text-1">Course Progress</p>
              <p className="Analyticsmembership-card-text-2">
                Track progress of your learners
              </p>
            </div>
          </div>
          <div className="Analyticsmembership-view-text-holder">
            <p
              onClick={() => navigate("/sites/analytics/product-progress")}
              className="Analyticsmembership-view-text"
            >
              View
            </p>
          </div>
        </div>
        <div className="Analyticsmembership-main-card">
          <div className="Analyticsmembership-card-1">
            <div className="Analyticsmembership-barchart-holder">
              <img
                className="Analyticsmembership-barchart"
                src={Clipboard}
                alt="Clipboard"
              />
            </div>
            <div className="Analyticsmembership-card-p-holder">
              <p className="Analyticsmembership-card-text-1">Assessments</p>
              <p className="Analyticsmembership-card-text-2">
                View assessments results
              </p>
            </div>
          </div>
          <div
            onClick={() => navigate("/sites/analytics/analytics-assesments")}
            className="Analyticsmembership-view-text-holder"
          >
            <p className="Analyticsmembership-view-text">View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyticsmembership;
