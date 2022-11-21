import React from "react";
import { useState } from "react";
import "./styles/Workflows.scss";
import Edit from "../../assests/edit.png";
import Delete from "../../assests/delete.png";
import Copy from "../../assests/copy.png";
import Folder from "../../assests/folder.png";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

function Workflows() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState(false);
  const [workflow, setWorkflow] = useState(true);
  const [published, setPublished] = useState(false);

  const [createFolder, setCreateFolder] = useState(false);

  const createFolderClose = () => setCreateFolder(false);
  const createFolderShow = () => setCreateFolder(true);

  const workflowClick = () => {
    setDraft(false);
    setWorkflow(true);
    setPublished(false);
  };

  const draftClick = () => {
    setDraft(true);
    setWorkflow(false);
    setPublished(false);
  };

  const publishedClick = () => {
    setDraft(false);
    setWorkflow(false);
    setPublished(true);
  };
  return (
    <div
      style={{
        backgroundColor: "#f0f5fc",
        padding: "2%",
        height: "86vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ width: "40%", fontSize: "25px", marginBottom: "auto" }}>
          Workflows
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <input
            style={{
              width: "50%",
              border: "1px solid lightgray",
              borderRadius: "5px",
              padding: "1%",
            }}
            placeholder="Search workflows and folders"
          />
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid blue",
              borderRadius: "5px",
              width: "20%",
              color: "blue",
            }}
            onClick={createFolderShow}
          >
            Create Folder
          </button>
          <button
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              color: "white",
              width: "20%",
            }}
            onClick={() => navigate("/automation/createworkflow")}
          >
            + Create workflow
          </button>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", padding: "2%" }}>
        <div style={{ width: "20%" }}>
          <p
            className={`${workflow ? "workflows" : "workflowsactived"}`}
            onClick={workflowClick}
          >
            All Workflows
          </p>
          <p
            className={`${draft ? "draftactived" : "draft"}`}
            onClick={draftClick}
          >
            Draft
          </p>
          <p
            className={`${published ? "draftactived" : "draft"}`}
            onClick={publishedClick}
          >
            Published
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              backgroundColor: "lightgray",
              padding: "1.5%",
              height: "70px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <p style={{ width: "30%" }}>NAME</p>
            <p style={{ width: "10%" }}>TOTAL ENROLLED</p>
            <p style={{ width: "10%" }}>ACTIVE ENROLLED</p>
            <p style={{ width: "10%" }}>LAST UPDATED</p>
            <p style={{ width: "10%" }}>CREATED</p>
            <p style={{ width: "10%" }}>ACTIONS</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              backgroundColor: "white",
              padding: "1.5%",
              height: "70px",
              border: "1px solid lightgray",
            }}
          >
            <p style={{ width: "20%" }}>
              New Workflow : 1658817810406
              <span
                style={{
                  backgroundColor: "gray",
                  borderRadius: "5px",
                  marginLeft: "5%",
                }}
              >
                draft
              </span>
            </p>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                }}
              >
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Move to folder</Dropdown.Item>
                <Dropdown.Item>Open in a new tab</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <div style={{ width: "10%", display: "flex" }}>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Edit} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Delete} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Copy} style={{ width: "100%" }} />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              backgroundColor: "white",
              padding: "1.5%",
              height: "70px",
              border: "1px solid lightgray",
            }}
          >
            <p style={{ width: "20%" }}>
              New Workflow : 1658817810406
              <span
                style={{
                  backgroundColor: "gray",
                  borderRadius: "5px",
                  marginLeft: "5%",
                }}
              >
                draft
              </span>
            </p>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                }}
              >
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Move to folder</Dropdown.Item>
                <Dropdown.Item>Open in a new tab</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <div style={{ width: "10%", display: "flex" }}>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Edit} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Delete} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Copy} style={{ width: "100%" }} />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              backgroundColor: "white",
              padding: "1.5%",
              height: "70px",
              border: "1px solid lightgray",
            }}
          >
            <p style={{ width: "20%" }}>
              New Workflow : 1658817810406
              <span
                style={{
                  backgroundColor: "gray",
                  borderRadius: "5px",
                  marginLeft: "5%",
                }}
              >
                draft
              </span>
            </p>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                }}
              >
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Move to folder</Dropdown.Item>
                <Dropdown.Item>Open in a new tab</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>0</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <p style={{ width: "10%" }}>July 26th 2022</p>
            <div style={{ width: "10%", display: "flex" }}>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Edit} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Delete} style={{ width: "100%" }} />
              </button>
              <button
                style={{
                  width: "30%",
                  height: "90%",
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <img src={Copy} style={{ width: "100%" }} />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1%",
              border: "1px solid lightgray",
              backgroundColor: "white",
            }}
          >
            <p>Showing 1 - 4 out of 4 workflows</p>
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "45%",
                }}
              >
                Previous
              </button>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "45%",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={createFolder} onHide={createFolderClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ display: "flex" }}>
            <div>
              <img
                src={Folder}
                style={{
                  width: "40px",
                  backgroundColor: "green",
                  padding: "20%",
                  borderRadius: "40%",
                }}
              />
            </div>
            <p
              style={{ marginBottom: "auto", marginLeft: "5%", width: "500px" }}
            >
              {" "}
              Create Folder
            </p>
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
    </div>
  );
}

export default Workflows;
