import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/sites.scss";
import Settings from "../../assests/settings.png";

const Sites = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="sites-header-container">
        <div className="sites-header">
          <div className="sites-heading">Sites</div>
          <p className="sites-options" onClick={() => navigate("")}>
            Funnels
          </p>
          <p
            className="sites-options"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/sites/websites")}
          >
            Websites
          </p>
          <p
            className="sites-options"
            onClick={() => navigate("/sites/blog")}
            style={{ cursor: "pointer" }}
          >
            Blog
          </p>
          <Dropdown onClick={() => navigate("/sites/wordpress")}>
            <Dropdown.Toggle
              variant="light"
              // id="dropdown-basic"
              className="sites-dropdown"
            >
              WordPress
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              // id="dropdown-basic"
              className="sites-dropdown"
            >
              Membership
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigate("/sites/dashboardmembership")}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/productsmembership")}
              >
                Products
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/offersmembership")}
              >
                Offers
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/Analytics")}>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/settings")}>
                Settings
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="sites-dropdown"
            >
              Forms
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/sites/Builderform")}>
                Builders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/Analyzeform")}>
                Analyze
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/Submissionform")}>
                Submissions
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="sites-dropdown"
            >
              Surveys
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/sites/Builder")}>
                Builders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/analyze")}>
                Analyze
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/submission")}>
                Submissions
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p
            className="sites-options"
            // style={{ marginTop: "0.35%" }}
          >
            Chat Widget
          </p>
          <p
            className="sites-options"
            // style={{ marginTop: "0.35%" }}
          >
            Media
          </p>
          <p
            className="sites-options"
            // style={{ marginTop: "0.35%" }}
          >
            URL Redirection
          </p>
          <div style={{ borderLeft: "1px solid gray", height: "20px" }}></div>
          <img
            src={Settings}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Sites;
