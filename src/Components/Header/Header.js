import React from "react";
import Notification from "../../assests/notification.png";
import "./styles/header.scss";

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
