import React from "react";
// import { useState } from "react";
import Plus from "../../../../assests/plus.png";
import "../../styles/sites.scss";
import { Outlet, useNavigate } from "react-router-dom";

const Productsmembership = () => {
  // const [createproduct, SetCreateProduct] = useState(false);

  // const createProductShow = () => {
  //   SetCreateProduct(true);
  // };
  const navigate = useNavigate();

  return (
    <div className="productmembership-main-container">
      <div className="productmembership-card">
        <div className="productmembership-text-holder">
          <p className="productmembership-text-yourproduct"> Your Products </p>
        </div>
        <button
          onClick={() => navigate("/sites/products/blueprint")}
          // onClick={createProductShow}
          className="productmembership-createproduct-btn"
        >
          <div className="productmembership-createproductbtn-holder">
            <img className="productmembership-plus-img" src={Plus} alt="" />
            <p className="productmembership-btn-text">Create Product </p>
          </div>
        </button>
        {/* {createproduct && <h2>showing</h2>} */}
      </div>
      <div>
        <p className="productmembership-getstarted-text">
          Get started by creating a new product!
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Productsmembership;
