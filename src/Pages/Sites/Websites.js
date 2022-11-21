import React, { useState } from "react";
import Search from "../../assests/search.png";
import Folder from "../../assests/folder.png";
import Plus from "../../assests/plus.png";
import Emptybox from "../../assests/empty-box.png";
import Modal from "react-bootstrap/Modal";
// import React, { useState } from "react";

const Websites = () => {
  const [createFolder, setCreateFolder] = useState(false);
  const [newWebsite, SetNewWebsite] = useState(false);

  const createFolderClose = () => setCreateFolder(false);
  const createFolderShow = () => setCreateFolder(true);

  const SetNewWebsiteClose = () => SetNewWebsite(false);
  const SetNewWebsiteShow = () => SetNewWebsite(true);

  return (
    <div className="website-main-container">
      <div>
        <p className="website-main-para">Websits</p>
      </div>
      <div className="website-body">
        <button className="website-searchbtn ">
          <div className="website-inner-searchbtn">
            <img className="website-search-img" src={Search} alt="" />
            <p className="website-search-p">Search</p>
          </div>
        </button>
        <button onClick={createFolderShow} className="website-Createfolderbtn">
          <div className="website-inner-Createfolderbtn">
            <img className="website-Createfolderbtn-img" src={Folder} alt="" />
            <p className="website-Createfolderbtn-p">Create Folder</p>
          </div>
        </button>
        <button onClick={SetNewWebsiteShow} className="website-NewWebsitesbtn">
          <div className="website-inner-NewWebsitesbtn">
            <img className="website-NewWebsitesbtn-img" src={Plus} alt="" />
            <p className="website-NewWebsitesbtn-p">New Website</p>
          </div>
        </button>
      </div>
      <div className="website-card">
        <div className="website-inner-card">
          <img className="emptybox-img " src={Emptybox} alt="Emptybox" />
          <p>No Websites! Get started by clicking on the New Website button.</p>
        </div>
      </div>
      <Modal show={createFolder} onHide={createFolderClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p style={{ fontSize: "1rem", color: "#2a3135" }}>
              Create New Folder
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: ".875rem", fontWeight: "500" }}>Folder Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="Name of your folder"
          />
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <button
            // onClick={createFolderClose}
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              width: "8rem",
              padding: "1%",
              color: "rgba(0,0,0,.25)",
              cursor: " not-allowed",
              fontSize: ".875rem",
              fontWeight: "500",
            }}
          >
            Create Folder
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={newWebsite} onHide={SetNewWebsiteClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p style={{ fontSize: "1rem", color: "#2a3135" }}>
              Create New Website
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: ".875rem", fontWeight: "500" }}>Website Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="Name of your awesome Website"
          />
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              width: "100%",
              padding: "1%",
              color: "rgba(0,0,0,.25)",
              cursor: " not-allowed",
              fontSize: ".875rem",
              fontWeight: "500",
            }}
          >
            Create Website
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Websites;
