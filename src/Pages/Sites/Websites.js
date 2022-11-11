import React from "react";
import Search from "../../assests/search.png";
import Folder from "../../assests/folder.png";
import Plus from "../../assests/plus.png";
import Emptybox from "../../assests/empty-box.png";

const Websites = () => {
  return (
    <div className="website-main-container">
      <div>
        <p className="website-main-para">Websits</p>
      </div>
      <div className="website-body">
        <button className="website-searchbtn ">
          <div className="website-inner-searchbtn">
            <img className="website-search-img" src={Search} alt="" />
            <p className="website-search-p">Search</p>
          </div>
        </button>
        <button className="website-Createfolderbtn">
          <div className="website-inner-Createfolderbtn">
            <img className="website-Createfolderbtn-img" src={Folder} alt="" />
            <p className="website-Createfolderbtn-p">Create Folder</p>
          </div>
        </button>
        <button className="website-NewWebsitesbtn">
          <div className="website-inner-NewWebsitesbtn">
            <img className="website-NewWebsitesbtn-img" src={Plus} alt="" />
            <p className="website-NewWebsitesbtn-p">New Website</p>
          </div>
        </button>
      </div>
      <div className="website-card">
        <div className="website-inner-card">
          <img className="emptybox-img " src={Emptybox} alt="Emptybox" />
          <p>No Websites! Get started by clicking on the New Website button.</p>
        </div>
      </div>
    </div>
  );
};

export default Websites;
