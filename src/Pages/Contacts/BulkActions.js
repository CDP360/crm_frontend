import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import './styles/bulkactions.scss'

function BulkActions() {
  return (
    <div className="bulkactions-main-container">
      <div className="bulkactions-body-container">
        <div className="bulkactions-header"
        >
          <Dropdown className="bulkactions-dropdown">
            <Dropdown.Toggle variant="light">All Actions</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-content">
              <Dropdown.Item>All Actions</Dropdown.Item>
              <Dropdown.Item>Bulk Email</Dropdown.Item>
              <Dropdown.Item>Bulk SMS</Dropdown.Item>
              <Dropdown.Item>Bulk Campaign</Dropdown.Item>
              <Dropdown.Item>Bulk Workflow</Dropdown.Item>
              <Dropdown.Item>Bulk Review Request</Dropdown.Item>
              <Dropdown.Item>Bulk Oppotunities</Dropdown.Item>
              <Dropdown.Item>Bulk Add Tag</Dropdown.Item>
              <Dropdown.Item>Bulk Remove Tag</Dropdown.Item>
              <Dropdown.Item>Bulk Delete Contact</Dropdown.Item>
              <Dropdown.Item>Import</Dropdown.Item>
              <Dropdown.Item>Export</Dropdown.Item>
              <Dropdown.Item>Merge Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="bulkactions-dropdown">
            <Dropdown.Toggle variant="light">All Users</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All Users</Dropdown.Item>
              <Dropdown.Item>CDP360 Sales</Dropdown.Item>
              <Dropdown.Item>D S</Dropdown.Item>
              <Dropdown.Item>Etouchworld Support</Dropdown.Item>
              <Dropdown.Item>Gabriel Santos</Dropdown.Item>
              <Dropdown.Item>Nathiya Narmadha</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="bulkactions-dropdown">
            <Dropdown.Toggle variant="light">Any Status</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All Status</Dropdown.Item>
              <Dropdown.Item>Queued</Dropdown.Item>
              <Dropdown.Item>Processing</Dropdown.Item>
              <Dropdown.Item>Completed</Dropdown.Item>
              <Dropdown.Item>Cancelled</Dropdown.Item>
              <Dropdown.Item>Paused</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="bulkactions-date">
            Sat, 15th Oct-Web, 14th Dec
          </p>
        </div>
        <hr className="underline" />
        <div className="bulkactions-content">
          <p>Name</p>
          <p>Bulk Operation (Type)</p>
          <p>Status</p>
          <p>Created (Date and Time)</p>
          <p>User</p>
          <p>Completed (Date and Time)</p>
          <p>Statistics</p>
          <p>Actions</p>
        </div>
      </div>
    </div>
  );
}

export default BulkActions;
