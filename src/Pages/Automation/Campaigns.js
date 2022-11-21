import React, { useState } from "react";
import Dot from "../../assests/dot.png";
import Folder from "../../assests/folder.png";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/Campaigns.scss";

function Campaigns() {
  const [createFolder, setCreateFolder] = useState(false);
  const [createCampaigns, setCreateCampaigns] = useState(false);

  const createFolderClose = () => setCreateFolder(false);
  const createFolderShow = () => setCreateFolder(true);

  const createCampaignsClose = () => setCreateCampaigns(false);
  const createCampaignsShow = () => setCreateCampaigns(true);
  return (
    <div style={{ padding: "2%", backgroundColor: "#f0f5fc", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h4>Customer Acquisition</h4>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={createFolderShow}
            style={{
              width: "40%",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            + New Folder
          </button>
          <button
            onClick={createCampaignsShow}
            style={{
              width: "40%",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            + Create Campaign
          </button>
        </div>
      </div>
      <h6
        style={{
          marginTop: "4%",
          color: "skyblue",
          textDecoration: "underline",
        }}
      >
        My Campaigns
      </h6>
      <h5 style={{ marginTop: "3%" }}>Get More Customers</h5>
      <p>
        Customer acquisition campaigns help you to produce more "hot" sales
        leads who are ready to engage.
      </p>
      <div
        style={{
          padding: "1%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid lightgray",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <p style={{ width: "15%", marginBottom: "auto" }}>Name</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Total</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Active</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Completed</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Replied</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Reply%</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Status</p>
        <p style={{ width: "18%", marginBottom: "auto" }}>Campaign ID</p>
        <p style={{ width: "10%" }}></p>
      </div>
      <div
        style={{
          padding: "1%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid lightgray",
        }}
      >
        <p style={{ width: "15%", marginBottom: "auto" }}>
          A-1) Home Buyer Nurture
        </p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0.00%</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Draft</p>
        <p style={{ width: "18%", marginBottom: "auto" }}>
          jjfF3obZbOj8FuDZ8iSY
        </p>
        <div style={{ width: "10%" }}>
        <Dropdown>
            <Dropdown.Toggle className="dropdown"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }}
            >
              <img src={Dot} style={{ width: "30px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div
        style={{
          padding: "1%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid lightgray",
        }}
      >
        <p style={{ width: "15%", marginBottom: "auto" }}>
          A-1) Home Buyer Nurture
        </p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0.00%</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Draft</p>
        <p style={{ width: "18%", marginBottom: "auto" }}>
          jjfF3obZbOj8FuDZ8iSY
        </p>
        <div style={{ width: "10%" }}>
        <Dropdown>
            <Dropdown.Toggle className="dropdown"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }}
            >
              <img src={Dot} style={{ width: "30px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div
        style={{
          padding: "1%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid lightgray",
        }}
      >
        <p style={{ width: "15%", marginBottom: "auto" }}>
          A-1) Home Buyer Nurture
        </p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>0.00%</p>
        <p style={{ width: "5%", marginBottom: "auto" }}>Draft</p>
        <p style={{ width: "18%", marginBottom: "auto" }}>
          jjfF3obZbOj8FuDZ8iSY
        </p>
        <div style={{ width: "10%" }}>
          <Dropdown>
            <Dropdown.Toggle className="dropdown"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }}
            >
              <img src={Dot} style={{ width: "30px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Modal show={createFolder} onHide={createFolderClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p> Create Folder</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Folder Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="New Folder Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
            }}
          >
            Cancel
          </button>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
              color: "white",
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={createCampaigns}
        onHide={createCampaignsClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p> Create Campaigns</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Campaign Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="New Campaign Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
            }}
          >
            Close
          </button>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
              color: "white",
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Campaigns;
