import React from "react";

function Analyzetrigger() {
  return (
    <div style={{ backgroundColor: "#f0f5fc", height: "84vh", padding: "3%" }}>
      <div>
        <p>Analyze</p>
      </div>
      <p style={{ marginTop: "2%", fontSize: "smaller", color: "grey" }}>
        Trigger links allow you to put links inside SMS messages and emails,
        which allow you to track specific customer actions and trigger events
        based on when the link is clicked.
      </p>
      <hr />
      <div>
        <p style={{ marginLeft: "30%", color: "grey" }}>
          You do not have any trigger links yet. Click here to create your first
          trigger link.
        </p>
      </div>
    </div>
  );
}

export default Analyzetrigger;
