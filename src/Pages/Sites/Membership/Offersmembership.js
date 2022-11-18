import React from "react";
import Table from "react-bootstrap/Table";
import Plus from "../../../assests/plus.png";
import Cart from "../../../assests/cart3.svg";
import Dollar from "../../../assests/currency-dollar.svg";
import BarChart from "../../../assests/bar-chart-fill.svg";

const Offersmembership = () => {
  return (
    <div className="offersmembership-main-container">
      <div className="offersmembership-card">
        <div className="offersmembership-text-holder">
          <p className="offersmembership-text-yourproduct"> Your Products </p>
        </div>
        <button className="offersmembership-createproduct-btn">
          <div className="offersmembership-createproductbtn-holder">
            <img className="offersmembership-plus-img" src={Plus} alt="" />
            <p className="offersmembership-btn-text">Create Product </p>
          </div>
        </button>
      </div>
      <div className="offersmembership-cards-body">
        <div className="offersmembership-main-card">
          <div className="offersmembership-cards-body-holder">
            <div className="offersmembership-cards-img-holder">
              <img
                className="offersmembership-cards-img"
                src={Cart}
                alt="Cart"
              />
            </div>
            <div className="offersmembership-cards-text-holder">
              <p className="offersmembership-card-text-p"> Units Sold </p>
              <h5> 0 </h5>
            </div>
          </div>
          <div className="offersmembership-cards-text-lastseen">
            Last 30 Days
          </div>
          <div className="offersmembership-div"></div>
        </div>
        <div className="offersmembership-main-card">
          <div className="offersmembership-cards-body-holder">
            <div className="offersmembership-cards-img-holder">
              <img
                className="offersmembership-cards-img"
                src={Dollar}
                alt="Dollar"
              />
            </div>
            <div className="offersmembership-cards-text-holder">
              <p className="offersmembership-card-text-p"> Units Sold </p>
              <h5> 0 </h5>
            </div>
          </div>
          <div className="offersmembership-cards-text-lastseen">
            Last 30 Days
          </div>
          <div className="offersmembership-div"></div>
        </div>
        <div className="offersmembership-main-card">
          <div className="offersmembership-cards-body-holder">
            <div className="offersmembership-cards-img-holder">
              <img
                className="offersmembership-cards-img"
                src={BarChart}
                alt="BarChart"
              />
            </div>
            <div className="offersmembership-cards-text-holder">
              <p className="offersmembership-card-text-p"> Units Sold </p>
              <h5> 0 </h5>
            </div>
          </div>
          <div className="offersmembership-cards-text-lastseen">
            Last 30 Days
          </div>
          <div className="offersmembership-div"></div>
        </div>
      </div>
      <div className="offersmembership-table-main">
        <div className="offersmembership-table-nav">
          <p className="offersmembership-table-published-nav">Published</p>
          <p>Draft</p>
        </div>
        <hr style={{ marginTop: "1%" }} />

        <div className="offersmembership-table-div">
          <Table>
            <thead>
              <tr className="offersmembership-heading">
                <th>TITLE</th>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>NET REVENUE</th>
                <th>ACTION</th>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Offersmembership;
