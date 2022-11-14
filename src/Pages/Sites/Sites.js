import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

// import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
// import Search from "../../assests/search.png";
// import Plus from "../../assests/plus.png";
// import Card from "react-bootstrap/Card";
// import Funnel from "../../assests/funnel.png";
// import Spanner from "../../assests/spanner.png";
// import PlayButton from "../../assests/play-button.png";
// import Folder from "../../assests/folder.png";
import "./styles/sites.scss";

const Sites = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="sites-header-container">
        <div className="sites-header">
          <p className="sites-heading">Sites</p>
          <p onClick={() => navigate("")}>Funnels</p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/sites/websites")}
          >
            Websites
          </p>
          <p onClick={() => navigate("/sites/blog")}>Blog</p>
          <Dropdown onClick={() => navigate("/sites/wordpress")}>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="sites-dropdown"
            >
              WordPress
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onClick={() => navigate("/sites/dashboardmembership")}>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="sites-dropdown"
            >
              Membership
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Products</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Offers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Analytics</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
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
              <Dropdown.Item href="#/action-1">Builders</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Analyze</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Submissions</Dropdown.Item>
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
              <Dropdown.Item href="#/action-1">Builders</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Analyze</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Submissions</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>Chat Widget</p>
          <p>Media</p>
          <p>URL Redirection</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Sites;
