import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function FilterOffcanvas({ handleClose, show }) {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ marginTop: "13vh" }}
      >
        <div
          style={{ backgroundColor: "darkblue", color: "white", padding: "4%" }}
        >
          <Offcanvas.Title
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p style={{ fontSize: "30px", marginBottom: "auto" }}>Filters</p>
            <p
              onClick={handleClose}
              style={{ fontSize: "30px", marginBottom: "auto",cursor:'pointer' }}
            >
              x
            </p>
          </Offcanvas.Title>
        </div>
        <Offcanvas.Body>
          <input
            style={{
              width: "100%",
              padding: "2%",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
            placeholder="Search and add a filter"
          />
          <div style={{ height: "60vh" }}>
            <h5 style={{ marginTop: "2%" }}>Most Used</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Business Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Email</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>First Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Last Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Tag</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Wildcard Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <h5 style={{ marginTop: "2%" }}>Contact Information</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Address</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Assigned</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Birth Date</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>City</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Created</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>DND</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Email</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>First Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Last Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Phone</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Postal Zip Code
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Source</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>State</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Street Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Tag</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>TicTok LeadId</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Type</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Wildcard Name</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <h5 style={{ marginTop: "2%" }}>Contact Activity</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Campaign</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Import</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Last Activity</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Last Activity Type
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Last Appointment
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Updated</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Workflow (Active)
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Workflow (Finished)
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <h5 style={{ marginTop: "2%" }}>Opportunity Information</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Age</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Pipeline</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Pipeline Stage
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Pipeline Status
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <h5 style={{ marginTop: "2%" }}>Membership</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Offer</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>Product</p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <h5 style={{ marginTop: "2%" }}>Attribution</h5>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution (Occurence)
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Ad Group Id
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Ad Id
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Campaign
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Campaign Id
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Content
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution FB ClickId
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Google ClickId
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Keyword
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Match Type
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Medium
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Session Source
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Source
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
            <p style={{ padding: "2%", marginBottom: "auto" }}>
              Attribution Term
            </p>
            <hr style={{ marginTop: "1px", marginBottom: "1px" }} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
