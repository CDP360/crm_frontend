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
      {/* <div className="sites-body">
        <div>
          <p>Funnels</p>
        </div>
        <div>
          <div className="sites-body-option">
            <button
              className="sites-body-option-searchbtn"
              type="type"
              placeholder="Search"
            >
              <div className="sites-body-inner-searchbtn">
                <img
                  className="sites-body-searchbtn-img"
                  src={Search}
                  alt="Search"
                />
                <p className="sites-body-searchbtn-p">Search</p>
              </div>
            </button>

            <button
              className="sites-body-createfolderbtn"
              type="type"
              placeholder="Search"
            >
              <div className="sites-body-inner-createfolderbtn">
                <img
                  className="sites-body-inner-createfolderbtn-img"
                  src={Folder}
                  alt="Folder"
                />
                <p className="sites-body-inner-createfolderbtn-p">
                  Create Folder
                </p>
              </div>
            </button>

            <button
              className="sites-body-newfunnel"
              type="type"
              placeholder="Search"
            >
              <div className="sites-body-inner-newfunnel">
                <img
                  className="sites-body-inner-newfunnel-img"
                  src={Plus}
                  alt="Search"
                />
                <p className="sites-body-inner-newfunnel-p">New Funnel</p>
              </div>
            </button>
          </div>
        </div>
        <div>
          <Container>
            <Card className="sites-body-card">
              <div className="sites-body-main">
                <div className="sites-body-sec">
                  <img
                    className="sites-body-funnel-img"
                    src={Funnel}
                    alt="funnel"
                  />
                  <p className="sites-body-funnel-text">Sellers Guide</p>
                  <button className="sites-body-versionbtn">Version 2</button>
                </div>
                <div className="sites-body-third">
                  <button className="sites-body-card-testbtn">
                    <div className="sites-body-card-inner-testbtn">
                      <img
                        className="sites-body-card-spanner-img"
                        src={Spanner}
                        alt="Spanner"
                      />
                      <p className="sites-body-card-test-p">Test</p>
                    </div>
                  </button>
                  <p className="sites-body-card-paratag">4 months ago</p>
                  <p className="sites-body-card-paratag">2 Steps</p>
                  <img
                    className="sites-body-card-plus-img"
                    src={Plus}
                    alt="Plus"
                  />
                </div>
              </div>
            </Card>

            <Card className="sites-body-card">
              <div className="sites-body-main">
                <div className="sites-body-sec">
                  <img
                    className="sites-body-funnel-img"
                    src={Funnel}
                    alt="funnel"
                  />
                  <p className="sites-body-funnel-text">Buyer List Funnel</p>
                  <button className="sites-body-versionbtn">Version 2</button>
                </div>
                <div className="sites-body-third">
                  <button className="sites-body-card-testbtn">
                    <div className="sites-body-card-inner-testbtn">
                      <img
                        className="sites-body-card-live-img"
                        src={PlayButton}
                        alt="PlayButton"
                      />
                      <p className="sites-body-card-test-p">Live</p>
                    </div>
                  </button>
                  <p className="sites-body-card-paratag">4 months ago</p>
                  <p className="sites-body-card-paratag">1 Step</p>
                  <img
                    className="sites-body-card-plus-img"
                    src={Plus}
                    alt="Plus"
                  />
                </div>
              </div>
            </Card>

            <Card className="sites-body-card">
              <div className="sites-body-main">
                <div className="sites-body-sec">
                  <img
                    className="sites-body-funnel-img"
                    src={Funnel}
                    alt="funnel"
                  />
                  <p className="sites-body-funnel-text">Home Buyer</p>
                  <button className="sites-body-versionbtn">Version 2</button>
                </div>
                <div className="sites-body-third">
                  <button className="sites-body-card-testbtn">
                    <div className="sites-body-card-inner-testbtn">
                      <img
                        className="sites-body-card-live-img"
                        src={PlayButton}
                        alt="PlayButton"
                      />
                      <p className="sites-body-card-test-p">Live</p>
                    </div>
                  </button>
                  <p className="sites-body-card-paratag">4 months ago</p>
                  <p className="sites-body-card-paratag">1 Step</p>
                  <img
                    className="sites-body-card-plus-img"
                    src={Plus}
                    alt="Plus"
                  />
                </div>
              </div>
            </Card>
          </Container>
        </div>
        <div>
          <Container>
            <div className="sites-card-page">
              <p className="sites-card-pageshowing">
                Showing 1 to 3 of 3 items
              </p>
              <div className="sites-card-page-btn">
                <button className="sites-card-page-previous-btn">
                  Previous
                </button>
                <button className="sites-card-page-next-btn">Next</button>
              </div>
            </div>
          </Container>
        </div>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Sites;
