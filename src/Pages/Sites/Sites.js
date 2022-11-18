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
          <Dropdown onClick={() => navigate("/sites/wordpress/dashboard")}>
            <Dropdown.Toggle variant="light" className="sites-dropdown">
              WordPress
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" className="sites-dropdown">
              Membership
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigate("/sites/membership/dashboard")}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/membership/products")}
              >
                Products
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/membership/offers")}
              >
                Offers
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/membership/Analytics")}
              >
                Analytics
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/membership/settings")}
              >
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
              <Dropdown.Item onClick={() => navigate("/sites/form/Builder")}>
                Builders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/form/Analyze")}>
                Analyze
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/form/Submission")}>
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
              <Dropdown.Item onClick={() => navigate("/sites/survey/Builder")}>
                Builders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/sites/survey/analyze")}>
                Analyze
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigate("/sites/survey/submission")}
              >
                Submissions
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p
            onClick={() => navigate("/sites/chatwidget")}
            className="sites-options"
          >
            Chat Widget
          </p>
          <p className="sites-options">Media</p>
          <p className="sites-options">URL Redirection</p>
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
