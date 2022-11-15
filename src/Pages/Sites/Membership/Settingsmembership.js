import React from "react";
import Internet from "../../../assests/internet.svg";
import Phone from "../../../assests/phone.svg";
import Email from "../../../assests/emails.svg";
import gearWide from "../../../assests/gear-wide.svg";

const Settingsmembership = () => {
  return (
    <div className="settingsmembership-main-container">
      <div className="settingsmembership-settings-text-holder">
        <p className="settingsmembership-settings-text">Settings</p>
      </div>
      <div className="settingsmembership-main-card-holder">
        <div className="settingsmembership-card-holder">
          <div className="settingsmembership-card">
            <div className="settingsmembership-card-img-holder">
              <img
                className="settingsmembership-card-img"
                src={Internet}
                alt="Internet"
              />
            </div>
            <div className="settingsmembership-card-text-holder">
              <p className="settingsmembership-card-details-p">Site Details</p>
              <p className="settingsmembership-card-p">
                Control branding and SEO settings of your site
              </p>
            </div>
          </div>
        </div>
        <div className="settingsmembership-card-holder">
          <div className="settingsmembership-card">
            <div className="settingsmembership-card-img-holder">
              <img
                className="settingsmembership-card-img"
                src={gearWide}
                alt="gearWide"
              />
            </div>
            <div className="settingsmembership-card-text-holder">
              <p className="settingsmembership-card-details-p">
                Custom Domains
              </p>
              <p className="settingsmembership-card-p">
                Setup up your custom domain on your membership sites
              </p>
            </div>
          </div>
        </div>
        <div className="settingsmembership-card-holder">
          <div className="settingsmembership-card">
            <div className="settingsmembership-card-img-holder">
              <img
                className="settingsmembership-card-img"
                src={Email}
                alt="Email"
              />
            </div>
            <div className="settingsmembership-card-text-holder">
              <p className="settingsmembership-card-details-p">
                Email Settings
              </p>
              <p className="settingsmembership-card-p">
                Customise your email domain on your settings
              </p>
            </div>
          </div>
        </div>
        <div className="settingsmembership-card-holder">
          <div className="settingsmembership-card">
            <div className="settingsmembership-card-img-holder">
              <img
                className="settingsmembership-card-img"
                src={Phone}
                alt="Phone"
              />
            </div>
            <div className="settingsmembership-card-text-holder">
              <p className="settingsmembership-card-details-p">App Settings</p>
              <p className="settingsmembership-card-p">
                Customise the experience of desktop and mobile progressive apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingsmembership;
