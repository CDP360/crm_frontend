import React from "react";
import Notification from "../assests/notification.png";

function Header() {
  return (
    <div style={{ position: "sticky",top:'0px',height:'3%' }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1%",
          backgroundColor: "white",
        }}
      >
        <img
          src={Notification}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "orange",
            borderRadius: "100%",
            padding: "5px",
            marginRight: "1%",
          }}
        />
        <div
          style={{
            marginTop: "1px",
            backgroundColor: "orange",
            borderRadius: "100%",
            padding: "4px",
          }}
        >
          MK
        </div>
      </div>
    </div>
  );
}

export default Header;
