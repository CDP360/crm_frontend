import React from "react";
import Plus from "../../../assests/plus.png";
import "../styles/sites.scss";

const Productsmembership = () => {
  return (
    <div className="productmembership-main-container">
      <div className="productmembership-card">
        <div className="productmembership-text-holder">
          <p className="productmembership-text-yourproduct"> Your Products </p>
        </div>
        <button className="productmembership-createproduct-btn">
          <div className="productmembership-createproductbtn-holder">
            <img className="productmembership-plus-img" src={Plus} alt="" />
            <p className="productmembership-btn-text">Create Product </p>
          </div>
        </button>
      </div>
      {/* <div> */}
      <p className="productmembership-getstarted-text">
        Get started by creating a new product!{" "}
      </p>
      {/* </div> */}
    </div>
  );
};

export default Productsmembership;
