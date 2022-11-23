import React from "react";
import Button from "react-bootstrap/Button";
import dollar from "../../../assests/dollar-symbol.png";
import profile from "../../../assests/man.png";
import profileadd from "../../../assests/user.png";
import folder from "../../../assests/folder.png";
import { useNavigate } from "react-router-dom";

function Campaigns() {
  const navigate = useNavigate();
  const AddCampaign = () => {
    navigate("/marketing/email/campaigns/add");
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        height: "86vh",
        overflow: "auto",
        padding: "2%",
      }}
    >
      <div style={{ display: "flex", padding: "1%" }}>
        <div style={{ width: "40%" }}>
          <h1 style={{ fontSize: "x-large", fontWeight: "300" }}>Campaigns</h1>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <Button variant="light" style={{ marginLeft: "66%" }}>
            Submit Feedback
          </Button>
          <Button
            variant="primary"
            style={{ marginLeft: "2%" }}
            onClick={AddCampaign}
          >
            + Add
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "24%",
            height: "190px",
            padding: "2%",
          }}
        >
          <img src={dollar} style={{ width: "11%" }} />
          <p style={{ color: "grey", marginTop: "4%" }}>Revenue Generated</p>
          <h1>$0</h1>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "24%",
            height: "190px",
            marginLeft: "2%",
            padding: "2%",
          }}
        >
          <img src={profile} style={{ width: "11%" }} />
          <p style={{ color: "grey", marginTop: "4%" }}>Customers</p>
          <h1>0</h1>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "24%",
            height: "190px",
            marginLeft: "2%",
            padding: "2%",
          }}
        >
          <img src={profileadd} style={{ width: "11%" }} />
          <p style={{ color: "grey", marginTop: "4%" }}>Churned</p>
          <h1>0</h1>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "24%",
            height: "190px",
            marginLeft: "2%",
            padding: "2%",
          }}
        >
          <img src={profileadd} style={{ width: "11%" }} />
          <p style={{ color: "grey", marginTop: "4%" }}>Leads</p>
          <h1>0</h1>
        </div>
      </div>
      <div style={{ padding: "2%" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#f9f8fb",
            }}
          >
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Campaign Name
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Status
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Start Date
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Affiliates{" "}
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Customers
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Churned{" "}
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              Commission{" "}
            </p>
            <p
              style={{
                width: "12%",
                fontSize: "small",
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              {" "}
              Revenue Generated
            </p>
          </div>
          <hr style={{ marginTop: "auto" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "6%",
            }}
          >
            <img src={folder} style={{ width: "3%" }} />
            <p style={{ color: "grey" }}>No data</p>
          </div>
          <div style={{ display: "flex", marginLeft: "76%", marginTop: "4%" }}>
            <Button variant="light">previous</Button>
            <Button variant="outline-primary" style={{ marginLeft: "8%" }}>
              1
            </Button>
            <Button variant="light" style={{ marginLeft: "8%" }}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
