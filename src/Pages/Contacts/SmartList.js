import React, { useState } from "react";
import "./styles/smartList.scss";
import Plus from "../../assests/plus.png";
import Dropdown from "react-bootstrap/Dropdown";
import Search from "../../assests/search.png";
import Filter from "../../assests/filter.jpg";
import Funnel from "../../assests/funnel.png";
import Android from "../../assests/androidlogo.png";
import Message from "../../assests/message.png";
import Mail from "../../assests/mail.png";
import AddTag from "../../assests/addTag.png";
import RemoveTag from "../../assests/removeTag.png";
import Modal from "react-bootstrap/Modal";
import Phone from "../../assests/phone.png";
import Info from "../../assests/info.png";
// import SmartListTable from './SmartListTable';

export default function SmartList() {
  const [addContact, setAddContact] = useState(false);
  const [pipeline, setPipeline] = useState(false);

  const addContactClose = () => setAddContact(false);
  const addContactShow = () => setAddContact(true);

  const pipelineClose = () => setPipeline(false);
  const pipelineShow = () => setPipeline(true);
  return (
    <div className="smartlist-maincontainer">
      <p>All</p>
      <hr />
      <div className="header-content-container">
        <div className="leftside-header-container">
          <img className="leftside-image" onClick={addContactShow} src={Plus} />
          <img className="leftside-image" onClick={pipelineShow} src={Funnel} />
          <img className="leftside-image" src={Android} />
          <img className="leftside-image" src={Message} />
          <img className="leftside-image" src={Mail} />
          <img className="leftside-image" src={AddTag} />
          <img className="leftside-image" src={RemoveTag} />
        </div>
        <div
          className="rightside-header-container"
          style={{ display: "flex", width: "50%" }}
        >
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Columns
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className="dropdown-container">
                  <input type="checkbox" />
                  <div style={{ marginLeft: "5%" }}>Name</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <div className="dropdown-container">
                  <input type="checkbox" />
                  <div className="dropdown-name">Creacted</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <div className="dropdown-container">
                  <input type="checkbox" />
                  <div className="dropdown-name">Email</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <div className="dropdown-container">
                  <input type="checkbox" />
                  <div className="dropdown-name">Last Activity</div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <div className="dropdown-container">
                  <input type="checkbox" />
                  <div className="dropdown-name">Phone</div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="rightside-input-container">
            <img className="input-search-image" src={Search} />
            <input className="input-field" placeholder="Quick Search" />
          </div>
          <button className="button-container">
            <div>More Filter</div>
            <img className="button-image" src={Filter} />
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#bfd4f2" }}>
        {/* <SmartListTable/> */}
      </div>
      <Modal show={addContact} onHide={addContactClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plus-main-container">
            <div className="personal-logo-container">
              <div className="leftside-profile-box">+</div>
              <div className="rightside-content">
                <p>Personal logo</p>
                <p>The proposed size is 512*512px</p>
                <p>no bigger than 2.5mb</p>
                <div className="rightside-button-container">
                  <button className="change-button">Change</button>
                  <button className="delete-button">Delete</button>
                </div>
              </div>
            </div>
            <div className="firstlastname-container">
              <div>
                <p className="first-content">First Name</p>
                <input className="first-field" placeholder="First Name" />
              </div>
              <div className="last-container">
                <p className="first-content">Last Name</p>
                <input className="first-field" placeholder="Last Name" />
              </div>
            </div>
            <div className="email-input-container">
              <p className="text-heading">Email</p>
              <input className="text-inputfield" placeholder="Email" />
            </div>
            <div className="email-input-container">
              <p className="text-heading">Phone</p>
              <input className="text-inputfield" placeholder="Phone" />
            </div>
            <div className="email-input-container">
              <p className="text-heading">Contact</p>
              <select className="dropdown-field">
                <option value="lead">Lead</option>
                <option value="customer">Customer</option>
              </select>
              {/* <Dropdown>
            <Dropdown.Toggle variant="light" style={{width:'100%',textAlign:'start'}}>
              Lead
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Customer
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Lead
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
            </div>
            <div className="email-input-container">
              <p className="text-heading">Time Zone</p>
              <select className="dropdown-field">
                <option value="lead">Choose One</option>
              </select>
            </div>
            <div className="channel-container">
              <div className="channel-header-container">
                <h5>DND all channels</h5>
                <input type="checkbox" />
              </div>
              <h6 className="spanline">
                <span>OR</span>
              </h6>
              <div className="bottom-field">
                <div className="left-bottom">
                  <img className="bottom-image" src={Mail} />
                  <p className="bottom-text">Email</p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="bottom-field">
                <div className="left-bottom">
                  <img className="bottom-image" src={Message} />
                  <p className="bottom-text">Message</p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="bottom-field">
                <div className="left-bottom">
                  <img className="bottom-image" src={Phone} />
                  <p className="bottom-text">Calls & Voicemails</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>
            <div className="bottom-container">
              <button className="close-btn" onClick={addContactClose}>
                Close
              </button>
              <button className="save-btn" onClick={addContactClose}>
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={pipeline} onHide={pipelineClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="pipeline-header-container">
              <img className="info-image" src={Info} />
              <p className="info-name">Info</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select one or more contact to start this operation</p>
          <div className="pipeline-body-btn-container">
            <button className="pipeline-btn" onClick={pipelineClose}>
              Ok
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
