import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Settings from '../../assests/settings.png'


function Reputation() {
    const navigate =useNavigate()
  return (
    <div>
      <div
        style={{ backgroundColor: "white", position: "sticky", top: "45px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
            marginTop:'auto'
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px",cursor:'pointer' }}>Reputation</p>
          <p style={{ fontSize: "15px",cursor:'pointer' }} onClick={()=>navigate('')}>Overview</p>
          <p style={{ fontSize: "15px",cursor:'pointer' }} onClick={()=>navigate('/reputation/request')}>Requests</p>
          <p style={{ fontSize: "15px",cursor:'pointer' }}>Reviews </p>
          <p style={{ fontSize: "15px",cursor:'pointer' }}>Listings</p>
          <div style={{borderLeft:'1px solid gray',height:'20px',marginTop:'15px'}}></div>
          <img src={Settings} style={{ width: "20px", height: "20px",marginTop:'15px',cursor:'pointer' }} />
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Reputation;
