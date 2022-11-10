import React, { useState } from "react";
import "./styles/sidebar.scss";
import DownArrow from "../../assests/downArrow.png";
import UpArrow from "../../assests/arrowUp.png";
import Search from "../../assests/search.png";
import Launchpad from "../../assests/forward.png";
import Dashboard from "../../assests/dashboard.png";
import Calender from "../../assests/calendar.png";
import Conversation from "../../assests/conversation.png";
import Contact from "../../assests/contact.png";
import Opportunities from "../../assests/opportunity.png";
import Payment from "../../assests/payment.png";
import Marketing from "../../assests/marketing.png";
import Automation from "../../assests/automation.png";
import Sites from "../../assests/sites.png";
import Reputation from "../../assests/reputation.png";
import Reporting from "../../assests/reporting.png";
import KnowledgeBase from "../../assests/knowledgeBase.png";
import OnboardingVideo from "../../assests/onboardingVideo.png";
import Setting from "../../assests/settings.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [data, setData] = useState(true);

  const settings = () => {
    setData(false);
    navigate("settings/businessInfo");
  };

  const goBack = () => {
    setData(true);
    navigate(-1);
  };
  return (
    <div className="sidebar-container">
      <img
        className="logo"
        src="https://assets.cdn.msgsndr.com/dJs02EcmedN7BV0yEpv4/media/62eb92ccef6fa889c148e24d.jpeg"
      />
      <button className="account-container">
        <p className="account-name">OL -- Lidcombe, NSW</p>
        <div className="arrow-container">
          <img src={UpArrow} className="arrow-img" />
          <img src={DownArrow} className="arrow-img" />
        </div>
      </button>
      <div className="search-container">
        <button className="search-button">
          <img className="search-img" src={Search} />
          <p className="search-name">Search</p>
          <button className="control-button">Ctrl k</button>
        </button>
        <button className="thunder-button">
          <img
            className="thunder-img"
            src="https://image.similarpng.com/very-thumbnail/2021/07/Lightning-bolt-icon-on-transparent-background-PNG.png"
          />
        </button>
      </div>
      {data ? (
        <>
          <div className="sidebar-contant">
            <div className="sidebar-option" onClick={() => navigate("")}>
              <img src={Launchpad} className="sidebar-img" />
              <p className="sidebar-name">Launchpad</p>
            </div>
            <div
              className="sidebar-option"
              onClick={() => navigate("dashboard")}
            >
              <img src={Dashboard} className="sidebar-img" />
              <p className="sidebar-name">Dashboard</p>
            </div>
            <div className="sidebar-option">
              <img src={Conversation} className="sidebar-img" />
              <p className="sidebar-name">Conversation</p>
            </div>
            <div
              className="sidebar-option"
              onClick={() => navigate("calendar")}
            >
              <img src={Calender} className="sidebar-img" />
              <p className="sidebar-name">Calender</p>
            </div>
            <div className="sidebar-option">
              <img src={Contact} className="sidebar-img" />
              <p className="sidebar-name">Contact</p>
            </div>
            <div className="sidebar-option">
              <img src={Opportunities} className="sidebar-img" />
              <p className="sidebar-name">Opportunities</p>
            </div>
            <div className="sidebar-option">
              <img src={Payment} className="sidebar-img" />
              <p className="sidebar-name">Payment</p>
            </div>
            <hr />
            <div className="sidebar-option">
              <img src={Marketing} className="sidebar-img" />
              <p className="sidebar-name">Marketing</p>
            </div>
            <div className="sidebar-option">
              <img src={Automation} className="sidebar-img" />
              <p className="sidebar-name">Automation</p>
            </div>
            <div className="sidebar-option" onClick={() => navigate("sites")}>
              <img src={Sites} className="sidebar-img" />
              <p className="sidebar-name">Sites</p>
            </div>
            <div
              className="sidebar-option"
              onClick={() => navigate("reputation")}
            >
              <img src={Reputation} className="sidebar-img" />
              <p className="sidebar-name">Reputation</p>
            </div>
            <div className="sidebar-option">
              <img src={Reporting} className="sidebar-img" />
              <p className="sidebar-name">Reporting</p>
            </div>
            <div className="sidebar-option">
              <img src={KnowledgeBase} className="sidebar-img" />
              <p className="sidebar-name">KnowledgeBase</p>
            </div>
            <div className="sidebar-option">
              <img src={OnboardingVideo} className="sidebar-img" />
              <p className="sidebar-name">Onboarding Videos</p>
            </div>
          </div>
          <div className="sidebar-setting" onClick={settings}>
            <img src={Setting} className="sidebar-img" />
            <p className="sidebar-name">Settings</p>
          </div>
        </>
      ) : (
        <>
          <div className="setting-container">
            <button className="goback-btn">
              <div onClick={goBack}>
                <p>Go Back</p>
              </div>
            </button>
            <div>
              <h4>Settings</h4>
            </div>
          </div>
          <div className="settings-content">
            <p className="settings-name">MY BUSINESS</p>
            <p>Buisness Info</p>
            <p onClick={() => navigate("pipelines")}>Pipelines</p>
            <p className="settings-name">BUSINESS SERVICES</p>
            <p>Calenders</p>
            <p>Phone Numbers</p>
            <p>Reoutation Management</p>
            <p>Profile</p>
            <p className="settings-name">OTHER SETTINGS</p>
            <p>Custom Fields</p>
            <p>Custom Values</p>
            <p>Domains</p>
            <p>Media</p>
            <p>URL Redirects</p>
            <p>Integrations</p>
            <p>Email Services</p>
            <p>Tags</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;