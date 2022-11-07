import React from "react";
import "./Header.css";
import Notification from "../../assests/notification.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-card">
        <img src={Notification} className="notification-img" />
        <div className="name">MK</div>
      </div>
    </div>
  );
}

export default Header;
