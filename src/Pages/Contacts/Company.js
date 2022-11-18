import React, { useState } from "react";
import Plus from "../../assests/plus.png";
import Search from "../../assests/search.png";
import Empty from "../../assests/empty-box.png";
import "./styles/company.scss";
import Modal from "react-bootstrap/Modal";

function Company() {
  const [addCompany, setAddCompany] = useState(false);

  const addCompanyClose = () => setAddCompany(false);
  const addCompanyShow = () => setAddCompany(true);
  return (
    <div className="company-main-container">
      <div className="company-header-container">
        <h3>Company List</h3>
        <button className="header-button-container" onClick={addCompanyShow}>
          <img src={Plus} className="button-plus-image" />
          <p className="button-name">New Company</p>
        </button>
      </div>
      <div className="search-input-container">
        <div className="search-img-container">
          <img className="search-img" src={Search} />
        </div>
        <input className="input-text" placeholder="Search by company name" />
      </div>
      <div className="body-header-name">
        <p>Company Name</p>
        <p>Phone</p>
        <p>Email</p>
        <p>Created By</p>
        <p>Created Date</p>
      </div>
      <div className="body-container">
        <img className="empty-img" src={Empty} />
        <p>You don’t have any companies yet.</p>
        <p className="addnewcompany" onClick={addCompanyShow}>Add New Company</p>
      </div>
      <Modal show={addCompany} onHide={addCompanyClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Add New Company</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addcompany-popup-container">
            <div>
              <p className="textfield-name">Company Name*</p>
              <input className="inputfield-common" placeholder="Company Name" />
              <p className="textfield-name">Email</p>
              <input className="inputfield-common" placeholder="Email" />
              <p className="textfield-name">Description</p>
              <textarea
                className="textareafield"
                placeholder="Description"
              ></textarea>
              <p className="textfield-name">State</p>
              <input className="inputfield-common" placeholder="State" />
              <p className="textfield-name">Postal Code</p>
              <input className="inputfield-common" placeholder="Postal Code" />
            </div>
            <div className="leftside-inputfield">
              <p className="textfield-name">Phone Number</p>
              <input className="inputfield-common" placeholder="Phone number" />
              <p className="textfield-name">Websites</p>
              <input className="inputfield-common" placeholder="Websites" />
              <p className="textfield-name">Street Address</p>
              <textarea
                className="textareafield"
                placeholder="Street Address"
              ></textarea>
              <p className="textfield-name">City</p>
              <input className="inputfield-common" placeholder="City" />
              <p className="textfield-name">Country</p>
              <input className="inputfield-common" placeholder="Country" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="popup-footer-container">
            <button className="cancel-btn" onClick={addCompanyClose}>
              Cancel
            </button>
            <button className="addcompany-btn-container">
              <img className="popup-plus-img" src={Plus} />
              <p className="popup-addcompany-name">Add Company</p>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Company;
