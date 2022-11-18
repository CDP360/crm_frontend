import React from "react";
import Search from "../../../assests/search.svg";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

const Buildersurvey = () => {
  return (
    <div className="builderform-main-container">
      <div className="builderform-body">
        <h2 className="builderform-builder-text">Builder</h2>
        <button className="builderform-btn">Create New Survey</button>
      </div>
      <hr style={{ marginTop: "3%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "0.5rem",
          borderRadius: "5px",
          marginRight: "2%",
        }}
      >
        <div style={{ background: "white", width: "2rem" }}>
          <img
            style={{ marginTop: "0.75rem", marginLeft: "0.5rem" }}
            src={Search}
            alt="Search"
          />
        </div>
        <div>
          <input
            style={{ border: "none", width: "18rem", height: "2.5rem" }}
            placeholder="Search form."
          />
        </div>
      </div>
      <div style={{ padding: "2rem", fontWeight: "500", fontSize: "0.75rem" }}>
        <Table striped>
          <thead>
            <tr style={{ cursor: "pointer", color: "#6b7280" }}>
              <th>NAME</th>
              <th>FORM ID</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Form4</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Dropdown as={ButtonGroup}>
                  <Button>Edit</Button>

                  <Dropdown.Toggle split id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item>Copy</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Form4</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Dropdown as={ButtonGroup}>
                  <Button>Edit</Button>

                  <Dropdown.Toggle split id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item>Copy</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>Home Buyer Info Form</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>
                <Dropdown as={ButtonGroup}>
                  <Button>Edit</Button>

                  <Dropdown.Toggle split id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item>Copy</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Buildersurvey;
