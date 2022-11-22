import React, { useState } from "react";
import Product from "../../../../assests/product-banner.jpg";
import Email from "../../../../assests/email-img.svg";
import People from "../../../../assests/people.png";
import Fileupload from "../../../../assests/fileupload.svg";
import Dollar from "../../../../assests/dollar.svg";
import Bookmark from "../../../../assests/bookmark.svg";
import Modal from "react-bootstrap/Modal";

// import "../../styles/sites.scss";
// import "../../../../Pages/Sites/styles/sites.scss";

const CreateProduct = () => {
  const [createProduct, setCreateProduct] = useState(false);

  const createProductShow = () => {
    setCreateProduct(true);
  };
  const createProductClose = () => setCreateProduct(false);

  return (
    <div className="createproduct-card ">
      <div className="createproduct-card-body">
        <div className="createproduct-img-holder">
          <div>
            <img
              className="createproduct-createproductbanner-img"
              // style={{ borderRadius: "0.5rem" }}
              src={Product}
              alt="Product"
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
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                  color: "#2d8cf0",
                }}
                onClick={createProductShow}
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
                  cursor: "pointer",
                  border: "1px solid #2d8cf0",
                  background: "white",
                  fontWeight: "500",
                  color: "#2d8cf0",
                }}
              >
                start Building
              </button>
            </div>
          </div>
          <Modal
            show={createProduct}
            onHide={createProductClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <p
                  style={{
                    fontSize: "1rem",
                    fontSize: "16px",
                    color: "#17233d",
                    fontWeight: "500",
                  }}
                >
                  Generate Sprint Course Product
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p
                style={{
                  fontSize: ".875rem",
                  fontWeight: "500",
                  color: "#515a6e",
                }}
              >
                What is the name of this product?
              </p>
              <input
                style={{
                  width: "100%",
                  padding: "1%",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                }}
                placeholder="Sprint Course"
              />
            </Modal.Body>
            <Modal.Footer style={{ border: "none" }}>
              <button
                // onClick={createFolderClose}
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                  width: "8rem",
                  padding: "1%",
                  color: "#515a6e",
                  cursor: " pointer",
                  fontSize: ".875rem",
                  fontWeight: "500",
                }}
              >
                Cancel
              </button>
              <button
                // onClick={createFolderClose}
                style={{
                  backgroundColor: "#2d8cf0",
                  border: "1px solid #2d8cf0",
                  borderRadius: "5px",
                  width: "8rem",
                  padding: "1%",
                  color: "white",
                  cursor: " pointer",
                  fontSize: ".875rem",
                  fontWeight: "500",
                }}
              >
                Create Product
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
