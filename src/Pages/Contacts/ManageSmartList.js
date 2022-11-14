import React from "react";
import Glopal from "../../assests/web.png";
import AddPeople from "../../assests/add-user.png";
import SharedPeople from "../../assests/group-people.png";
import "./styles/ManageSmartList.scss";

function ManageSmartList() {
  return (
    <div className="manage-main-container">
      <p>All</p>
      <hr />
      <p className="manage-heading">SmartLists</p>
      <div className="manage-body-container">
        <img className="glopal-img" src={Glopal} />
        <p>Glopal List</p>
        <img className="other-img" src={AddPeople} />
        <p>Shared By You</p>
        <img className="other-img" src={SharedPeople} />
        <p>Shared With You</p>
      </div>
    </div>
  );
}

export default ManageSmartList;
