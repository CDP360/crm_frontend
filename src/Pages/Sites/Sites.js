import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Search from "../../assests/search.png";
import Plus from "../../assests/plus.png";
import Card from "react-bootstrap/Card";
import Funnel from "../../assests/funnel.png";
import Spanner from "../../assests/spanner.png";
import PlayButton from "../../assests/play-button.png";
import Folder from "../../assests/folder.png";

const Sites = () => {
  return (
    <div style={{ width: "100%", background: "#dee2e6" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "5px 20px 18px #adb5bd",
          background: "white",
        }}
      >
        <p>Sites</p>
        <p>Funnels</p>
        <p>Websites</p>
        <p>Blog</p>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{ background: "white", border: "none", marginTop: "-4%" }}
          >
            WordPress
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{ background: "white", border: "none", marginTop: "-4%" }}
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
            style={{
              background: "white",
              border: "none",
              marginTop: "-5.5%",
            }}
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
            style={{
              background: "white",
              border: "none",
              marginTop: "-5.5%",
            }}
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
      <div>
        <p>Funnels</p>
      </div>
      <div>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="type"
            placeholder="Search"
            style={{
              width: "27%",
              // height: "38px",
              background: "white",
              borderRadius: "5px",
              marginRight: "7px",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "2%",
              }}
            >
              <img style={{ width: "7%" }} src={Search} alt="Search" />
              <p style={{ color: "gray", marginLeft: "5%" }}>Search</p>
            </div>
          </button>

          <button
            type="type"
            placeholder="Search"
            style={{
              width: "18%",
              // height: "38px",
              background: "white",
              borderRadius: "5px",
              marginRight: "7px",
              padding: "0px",
              borderColor: "blue",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "11%", height: "2%" }}
                src={Folder}
                alt="Folder"
              />
              <p style={{ color: "gray" }}>Create Folder</p>
            </div>
          </button>

          <button
            type="type"
            placeholder="Search"
            style={{
              width: "18%",
              // height: "38px",
              background: "green",
              borderRadius: "5px",
              marginRight: "7px",
              border: "none",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img style={{ width: "8%" }} src={Plus} alt="Search" />
              <p style={{ color: "white" }}>New Funnel</p>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Container>
          <Card style={{ marginTop: "2%", width: "95%", marginLeft: "2.5%" }}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "5.5%",
                    height: "45%",
                    marginTop: "4%",
                    marginLeft: "3%",
                  }}
                  src={Funnel}
                  alt="funnel"
                />
                <p style={{ marginTop: "4%", marginLeft: "3%" }}>
                  Sellers Guide
                </p>
                <button
                  style={{
                    marginLeft: "3%",
                    color: "purple",
                    marginTop: "3%",
                    height: "62%",
                    border: "none",
                  }}
                >
                  Version 2
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    border: "none",
                    borderRadius: "45%",
                    height: "48%",
                    width: "9%",
                    marginTop: "2.5%",
                    background: "green",
                    // marginRight: "10%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <img
                      style={{ width: "28%", height: "3%", marginTop: "10%" }}
                      src={Spanner}
                      alt="Spanner"
                    />
                    <p style={{ marginTop: "9%" }}>Test</p>
                  </div>
                </button>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>
                  4 months ago
                </p>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>2 Steps</p>
                <img
                  style={{
                    width: "2.5%",
                    height: "22%",
                    marginTop: "3.5%",
                    marginLeft: "3%",
                    marginRight: "3%",
                  }}
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
          <Card style={{ marginTop: "2%", width: "95%", marginLeft: "2.5%" }}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "5.5%",
                    height: "45%",
                    marginTop: "4%",
                    marginLeft: "3%",
                  }}
                  src={Funnel}
                  alt="funnel"
                />
                <p style={{ marginTop: "4%", marginLeft: "3%" }}>
                  Buyer List Funnel
                </p>
                <button
                  style={{
                    marginLeft: "3%",
                    color: "purple",
                    marginTop: "3%",
                    height: "62%",
                    border: "none",
                  }}
                >
                  Version 2
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    border: "none",
                    borderRadius: "45%",
                    height: "48%",
                    width: "9%",
                    marginTop: "2.5%",
                    background: "green",
                    // marginRight: "10%",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <img
                      style={{ width: "25%", height: "46%", marginTop: "13%" }}
                      src={PlayButton}
                      alt="PlayButton"
                    />
                    <p style={{ marginTop: "9%" }}>Live</p>
                  </div>
                </button>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>
                  4 months ago
                </p>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>1 Step</p>
                <img
                  style={{
                    width: "2.5%",
                    height: "22%",
                    marginTop: "3.5%",
                    marginLeft: "3%",
                    marginRight: "3%",
                  }}
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
          <Card style={{ marginTop: "2%", width: "95%", marginLeft: "2.5%" }}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "5.5%",
                    height: "45%",
                    marginTop: "4%",
                    marginLeft: "3%",
                  }}
                  src={Funnel}
                  alt="funnel"
                />
                <p style={{ marginTop: "4%", marginLeft: "3%" }}>Home Buyer</p>
                <button
                  style={{
                    marginLeft: "3%",
                    color: "purple",
                    marginTop: "3%",
                    height: "62%",
                    border: "none",
                  }}
                >
                  Version 2
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    border: "none",
                    borderRadius: "45%",
                    height: "48%",
                    width: "9%",
                    marginTop: "2.5%",
                    background: "green",
                    // marginRight: "10%",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <img
                      style={{ width: "25%", height: "46%", marginTop: "13%" }}
                      src={PlayButton}
                      alt="PlayButton"
                    />
                    <p style={{ marginTop: "9%" }}>Live</p>
                  </div>
                </button>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>
                  4 months ago
                </p>
                <p style={{ marginTop: "2.5%", marginLeft: "3%" }}>1 Step</p>
                <img
                  style={{
                    width: "2.5%",
                    height: "22%",
                    marginTop: "3.5%",
                    marginLeft: "3%",
                    marginRight: "3%",
                  }}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          >
            <div style={{ display: "flex" }}>
              <p>Showing 1 to 3 of 3 items</p>
            </div>
            <div style={{ display: "flex" }}>
              <button
                style={{ marginRight: "8%", border: "none", height: "72%" }}
              >
                Previous
              </button>
              <button
                style={{
                  marginRight: "4%",
                  border: "none",
                  marginLeft: "-4%",
                  height: "72%",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Sites;
