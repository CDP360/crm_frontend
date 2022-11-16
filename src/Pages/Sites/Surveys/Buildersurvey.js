import React from "react";

const Buildersurvey = () => {
  return (
    <div className="buildersurvey-main-container">
      <div className="buildersurvey-body">
        <h2 className="buildersurvey-builder-text">Builder</h2>
        <button className="buildersurvey-btn">Create New Survey</button>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div className="buildersurvey-text-holder">
        <p className="buildersurvey-survey-p">
          You do not have any survey yet. <a>Click here</a> to create your first
          survey.
        </p>
      </div>
    </div>
  );
};

export default Buildersurvey;
