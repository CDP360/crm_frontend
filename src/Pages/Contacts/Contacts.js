 import React from 'react'
 import { useNavigate, Outlet } from 'react-router-dom';
 import Settings from "../../assests/settings.png";


 function Contacts() {
    const navigate = useNavigate();
   return (
     <div style={{marginTop:'2%'}}>
        <div
        style={{ backgroundColor: "white", position: "sticky", top: "60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50%",
            marginTop: "auto",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Contacts
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            onClick={() => navigate("")}
          >
            Smart Lists
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Bulk Actions
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Restore
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Tasks
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Company
          </p>
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Manage Smart Lists
          </p>
          <div style={{ borderLeft: "1px solid gray", height: "20px" }}></div>
          <img
            src={Settings}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
      <Outlet />
     </div>
   )
 }
 
 export default Contacts