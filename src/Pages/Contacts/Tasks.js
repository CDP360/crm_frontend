import React, { useState } from "react";
import "./styles/tasks.scss";
import Plus from "../../assests/plus.png";
import Search from "../../assests/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import Reload from "../../assests/reload.png";
import Modal from "react-bootstrap/Modal";

function Tasks() {
  const [newtask, setNewTask] = useState(false);

  const newtaskClose = () => setNewTask(false);
  const newtaskShow = () => setNewTask(true);
  return (
    <div className="task-main-container">
      <div className="task-header-container">
        <h3>Tasks List</h3>
        <button className="header-button-container" onClick={newtaskShow}>
          <img src={Plus} className="button-plus-image" />
          <p className="button-name">New Task</p>
        </button>
      </div>
      <div className="searchinput-row-container">
        <div className="search-input-container">
          <div className="search-img-container">
            <img className="search-img" src={Search} />
          </div>
          <input className="input-text" placeholder="Search by task name" />
        </div>
        <div className="search-leftside-container">
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="light">Contact</Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="droppage-container">
                  <p className="clearname">Clear all</p>
                  <div className="search-input-container">
                    <div className="search-img-container">
                      <img className="search-img" src={Search} />
                    </div>
                    <input
                      className="input-text"
                      placeholder="Search Contact"
                    />
                  </div>
                  <div className="dropdown-boxfull-container">
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test controller</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test value data</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">value depends</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                  </div>
                  <div className="dropdown-btn-container">
                    <button className="drop-cancelbtn">Cancel</button>
                    <button className="drop-applybtn">Apply</button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="light">Assignee</Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="droppage-container">
                  <p className="clearname">Clear all</p>
                  <div className="search-input-container">
                    <div className="search-img-container">
                      <img className="search-img" src={Search} />
                    </div>
                    <input
                      className="input-text"
                      placeholder="Search Contact"
                    />
                  </div>
                  <div className="dropdown-boxfull-container">
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test controller</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test value data</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">value depends</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                    <div className="dropdown-boxcontent">
                      <input type="checkbox" className="checkbox-drop" />
                      <p className="single-letter">T</p>
                      <p className="letter-fullname">Test</p>
                    </div>
                  </div>
                  <div className="dropdown-btn-container">
                    <button className="drop-cancelbtn">Cancel</button>
                    <button className="drop-applybtn">Apply</button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="light">
                Status<span className="jointname">All</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Pending</Dropdown.Item>
                <Dropdown.Item>Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown>
              <Dropdown.Toggle variant="light">
                Sort By <span className="jointname">Due Date(Desc)</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Due Date(Desc)</Dropdown.Item>
                <Dropdown.Item>Due Date(Asc)</Dropdown.Item>
                <Dropdown.Item>Date Added(Asc)</Dropdown.Item>
                <Dropdown.Item>Date Added(Desc)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <img className="reload-img" src={Reload} />
        </div>
      </div>
      <div className="body-header-name">
        <div className="firsthead-container">
          <input className="header-box" type="checkbox" />
          <p className="header-firstname">Name & Description</p>
        </div>
        <p>Contact</p>
        <p>Assignee</p>
        <p>Due Date</p>
        <p>Status</p>
      </div>
      <div className="body-container">
        <button className="previous-btn">Previous</button>
        <button className="nxt-btn">Next</button>
      </div>
      <Modal show={newtask} onHide={newtaskClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="modal-inputtext">Title*</p>
            <input className="modal-inputfield" placeholder="Task Title" />
            <p className="modal-inputtext">Description</p>
            <textarea
              className="modal-textarea"
              placeholder="Task Description"
            />
            <p className="modal-inputtext">Assignee</p>
            <input className="modal-inputfield" placeholder="Select Assignee" />
            <p className="modal-inputtext">Contact*</p>
            <input className="modal-inputfield" placeholder="Select Contact" />
            <p className="modal-inputtext">Due Date*</p>
            <input
              className="modal-datefield"
              placeholder="Thu,17 Nov 2022 8:00"
            />
            <div className="modal-btn-container">
              <button className="cancel-btn" onClick={newtaskClose}>
                Cancel
              </button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Tasks;
