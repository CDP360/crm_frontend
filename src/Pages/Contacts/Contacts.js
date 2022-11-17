import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Settings from "../../assests/settings.png";
import "./styles/contacts.scss";

function Contacts() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="contacts-main-container">
        <div className="contacts-header-container">
          <p className="header-name">Contacts</p>
          <p className="header-subname" onClick={() => navigate("")}>
            Smart Lists
          </p>
          <p className="header-subname" onClick={()=>navigate('/contacts/bulkactions')}>Bulk Actions</p>
          <p className="header-subname" onClick={()=>navigate('/contacts/restore')}>Restore</p>
          <p className="header-subname" onClick={()=>navigate('/contacts/task')}>Tasks</p>
          <p className="header-subname" onClick={()=>navigate('/contacts/company')}>Company</p>
          <p className="header-subname" onClick={()=>navigate('/contacts/managesmartlist')}>Manage Smart Lists</p>
          <div className="underline"></div>
          <img className="setting-img" src={Settings} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Contacts;
