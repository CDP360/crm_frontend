import React from "react";
import Dashboard from "../../../../assests/dashboard-banner.jpeg";
import Email from "../../../../assests/email-img.svg";
import People from "../../../../assests/people.png";
import Fileupload from "../../../../assests/fileupload.svg";
import Dollar from "../../../../assests/dollar.svg";
import Bookmark from "../../../../assests/bookmark.svg";
// import "../../styles/sites.scss";
// import "../../../../Pages/Sites/styles/sites.scss";

const CreateProduct = () => {
  return (
    <div className="createproduct-card ">
      <div className="createproduct-card-body">
        <div className="createproduct-img-holder">
          <div>
            <img
              className="createproduct-createproductbanner-img"
              // style={{ borderRadius: "0.5rem" }}
              src={Dashboard}
              alt="Dashboard"
            />
          </div>
          <div className="createproduct-createproductbanner-p">
            <div>
              <p style={{ width: "11rem" }}>
                Create Digital Products in Minutes.
              </p>
            </div>
            <div>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Pick a Product Template and start building!
              </p>
            </div>
          </div>
        </div>
        <div className="createproduct-gird">
          <div className="createproduct-gird-col-1">
            <div className="createproduct-gird-col-img-holder">
              <img
                className="createproduct-gird-col-1-email-img"
                src={Bookmark}
                alt="Bookmark"
              />
            </div>
            <div className="createproduct-gird-col-1-text">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Sprint Course
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Short courses to build gateway to memberships.
              </p>
              <button
                style={{
                  color: "#2d8cf0",
                  //   borderColor: "#2d8cf0",
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                }}
              >
                start Building
              </button>
            </div>
          </div>
          <div className="createproduct-gird-col-2">
            <div
              style={{ background: " rgb(40, 131, 222)" }}
              className="createproduct-gird-col-img-holder"
            >
              <img
                className="createproduct-gird-col-1-email-img"
                src={Bookmark}
                alt="Bookmark"
              />
            </div>
            <div className="createproduct-gird-col-1-text">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Marathon Course
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Train and upskill your audience within your niche.
              </p>
              <button
                style={{
                  color: "#2d8cf0",
                  //   borderColor: "#2d8cf0",
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                }}
              >
                start Building
              </button>
            </div>
          </div>
          <div className="createproduct-gird-col-1">
            <div
              style={{ background: "rgb(56, 202, 59)" }}
              className="createproduct-gird-col-img-holder"
            >
              <img
                className="createproduct-gird-col-1-email-img"
                src={Bookmark}
                alt="Bookmark"
              />
            </div>
            <div className="createproduct-gird-col-1-text">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Membership
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Nurture and mentor your network.
              </p>
              <button
                style={{
                  color: "#2d8cf0",
                  //   borderColor: "#2d8cf0",
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                }}
              >
                start Building
              </button>
            </div>
          </div>
          <div className="createproduct-gird-col-2">
            <div
              style={{ background: "rgb(160, 174, 192)" }}
              className="createproduct-gird-col-img-holder"
            >
              <img
                className="createproduct-gird-col-1-email-img"
                src={Bookmark}
                alt="Bookmark"
              />
            </div>
            <div className="createproduct-gird-col-1-text">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Build your own
              </p>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#515a6e",
                }}
              >
                Build a custom product that matches your content.
              </p>
              <button
                style={{
                  color: "#2d8cf0",
                  //   borderColor: "#2d8cf0",
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                }}
              >
                start Building
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
