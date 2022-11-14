import { mergeBreakpointsInOrder } from "@mui/system";
import React from "react";
import Dashboard from "../../../assests/dashboard-banner.jpeg";
import Email from "../../../assests/email-img.svg";
import People from "../../../assests/people.png";
import Fileupload from "../../../assests/fileupload.svg";
import Dollar from "../../../assests/dollar.svg";
import BounceLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";

const Dashboardmembership = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="dashboardmember-card">
      {loading ? (
        // <BounceLoader
        //   color="#36d7b7"
        //   loading={loading}
        //   className="dashboard-spinner"
        //   //   style={{ color: "green" }}
        //   size={150}
        //   aria-label="Loading Spinner"
        //   data-testid="loader"
        // />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <BounceLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="dashboardmember-card-body">
          <div className="dashboardmember-img-holder">
            <img
              className="dashboardmember-dashboardbanner-img"
              // style={{ borderRadius: "0.5rem" }}
              src={Dashboard}
              alt="Dashboard"
            />
            <div className="dashboardmember-dashboardbanner-p">
              LET'S GET STARTED!
            </div>
          </div>
          <div className="dashboardmember-gird">
            <div className="dashboardmember-gird-col-1">
              <div className="dashboardmember-gird-col-1-text">
                <p> Opt-ins - Last 30 Days </p>
                <p> 0 </p>
              </div>
              <div className="dashboardmember-gird-col-img-holder">
                <img
                  className="dashboardmember-gird-col-1-email-img"
                  src={Email}
                  alt="Email"
                />
              </div>
            </div>
            <div className="dashboardmember-gird-col-2">
              <div className="dashboardmember-gird-col-1-text">
                <p> Members - Last 30 Days </p>
                <p> 0 </p>
              </div>
              <div className="dashboardmember-gird-col-img-holder">
                <img
                  className="dashboardmember-gird-col-1-email-img"
                  src={People}
                  alt="People"
                />
              </div>
            </div>
            <div className="dashboardmember-gird-col-1">
              <div className="dashboardmember-gird-col-1-text">
                <p> Sales - Last 30 Days </p>
                <p> 0 </p>
              </div>
              <div className="dashboardmember-gird-col-img-holder">
                <img
                  className="dashboardmember-gird-col-1-email-img"
                  src={Fileupload}
                  alt="Fileupload"
                />
              </div>
            </div>
            <div className="dashboardmember-gird-col-2">
              <div className="dashboardmember-gird-col-1-text">
                <p> Checkouts - Last 30 Days </p>
                <p> 0 </p>
              </div>
              <div className="dashboardmember-gird-col-img-holder">
                <img
                  className="dashboardmember-gird-col-1-email-img"
                  src={Dollar}
                  alt="Dollar"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboardmembership;
