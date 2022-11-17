import React from "react";
import "./styles/dashboard.scss";
import DownArrow from "../../assests/downArrow.png";
import Filter from "../../assests/filter.png";
import Circle from "../../assests/circle.png";
import List from "../../assests/menu.png";
import Phone from "../../assests/phone.png";
import Sms from "../../assests/sms.png";

function Dashboard() {
  return (
    <div className="main-dashboard-container">
      <div className="firstrow-card-container">
        <div className="firstrow-card-content">
          <div className="firstrow-card-content-inside">
            <p>Opportunities</p>
            <p className="date">3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr className="underline" />
          <p className="centertext">1</p>
          <div className="firstrow-card-content-footer">
            <div>
              <p className="closed">Closed</p>
              <p className="open">Open</p>
              <p className="lost">Lost</p>
            </div>
            <div>
              <p className="footer-number">0</p>
              <p className="footer-number">1</p>
              <p className="footer-number">0</p>
            </div>
          </div>
        </div>
        <div className="firstrow-card-content">
          <div className="firstrow-card-content-inside">
            <p>Pipeline Value</p>
            <p className="date">3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr className="underline" />
          <p className="centertext">A$0.00</p>
          <div className="firstrow-card-content-footer">
            <div>
              <p className="closed">Closed</p>
              <p className="open">Open</p>
              <p className="lost">Lost</p>
            </div>
            <div>
              <p className="footer-number">0</p>
              <p className="footer-number">1</p>
              <p className="footer-number">0</p>
            </div>
          </div>
        </div>
        <div className="firstrow-card-content">
          <div className="firstrow-card-content-inside">
            <p>Conversion Rate</p>
            <p className="date">3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr className="underline" />
          <div className="centertext">0.00%</div>
        </div>
      </div>
      <div className="secondrow-card-container">
        <div className="first-card-container">
          <div className="first-cardheader-container">
            <div>Funnel</div>
            <select className="promotion-select">
              <option value="YOUR PROMOTION Pipeline (1)">
                YOUR PROMOTION Pipeline (1)
              </option>
            </select>
            {/* <img src={DownArrow} style={{ width: "20px" }} /> */}
            <div className="date">3 May, 2022 - 4 Nov, 2022</div>
          </div>
          <hr className="underline" />
          <img className="center-image" src={Filter} />
          <div className="footer-points-container">
            <div>
              <div className="points-dot-blue"></div>
              <div className="points-dot-green"></div>
              <div className="points-dot-red"></div>
              <div className="points-dot-yellow"></div>
              <div className="points-dot-skyblue"></div>
            </div>
            <div>
              <div className="point-content">(1) New Leads - A$ 0.00</div>
              <div className="point-content">
                (0) Hot Leads - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">
                (0) Booking Requested - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">
                (0) Booking Confirmed - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">(0) Won - A$ 0.00 (0.00%)</div>
            </div>
          </div>
        </div>
        <div className="second-card-container">
          <div className="second-cardheader-container">
            <div>Stages Distribution</div>
            {/* <div style={{ display: "flex", cursor: "pointer" }}>
              <div>YOUR PROMOTION Pipeline (1)</div>
              <img src={DownArrow} style={{ width: "20px" }} />
            </div> */}
            <select className="promotion-select">
              <option value="YOUR PROMOTION Pipeline (1)">
                YOUR PROMOTION Pipeline (1)
              </option>
            </select>
            <div className="date">3 May, 2022 - 4 Nov, 2022</div>
          </div>
          <hr className="underline" />
          <img className="center-image" src={Circle} />
          <div className="footer-points-container">
            <div>
              <div className="points-dot-blue"></div>
              <div className="points-dot-green"></div>
              <div className="points-dot-red"></div>
              <div className="points-dot-yellow"></div>
              <div className="points-dot-skyblue"></div>
              <div className="points-dot-orange"></div>
            </div>
            <div>
              <div className="point-content">(1) New Leads - A$ 0.00</div>
              <div className="point-content">
                (0) Hot Leads - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">
                (0) Booking Requested - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">
                (0) Booking Confirmed - A$ 0.00 (0.00%)
              </div>
              <div className="point-content">(0) Won - A$ 0.00 (0.00%)</div>
              <div className="point-content">
                (0) Lost/abandoned - A$ 0.00 (0.00%)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdrow-card-container">
        <div className="firstcard-container">
          <div className="firstcard-header-container">
            <div>Manual Actions</div>
            {/* <div style={{ display: "flex", cursor: "pointer" }}>
              <div>Select Campaign / Workflow</div>
              <img
                src={DownArrow}
                style={{ width: "15px", marginLeft: "5px", marginTop: "5px" }}
              />
            </div> */}
            <select className="promotion-select">
              <option value="YOUR PROMOTION Pipeline (1)">
                YOUR PROMOTION Pipeline (1)
              </option>
            </select>
            <select className="promotion-select">
              <option value="Select Assignee">Select Assignee</option>
              <option value="All">All</option>
              <option value="CDP360 sales">CDP360 sales</option>
              <option value="D S">D S</option>
              <option value="Etouchworld Support">Etouchworld Support</option>
              <option value="Gabriel Santos">Gabriel Santos</option>
              <option value="Nathiya Narmadha">Nathiya Narmadha</option>
            </select>
            {/* <img
              src={DownArrow}
              style={{ width: "15px", marginLeft: "5px", marginTop: "5px" }}
            /> */}
          </div>
          <hr className="underline" />
          <div className="card-body">
            <div className="circle-container">
              <div className="first-circle"></div>
              <img src={List} className="content-img" />
              <p className="content-text">Total Pending</p>
            </div>
            <div className="circle-container">
              <div className="second-circle"></div>
              <img src={Phone} className="content-img" />
              <p className="content-text">Phone</p>
            </div>
            <div className="circle-container">
              <div className="third-circle"></div>
              <img src={Sms} className="content-img" />
              <p className="content-text">SMS</p>
            </div>
          </div>
          <div>
            <p className="footer-content">Go to Manual Actions</p>
          </div>
        </div>
        <div className="secondcards-container">
          <div className="secondcard-content">
            <p className="content-text">Tasks</p>
            <hr className="underline" />
            <div className="subcontent-container">
              <img src={List} className="subimage" />
              <p className="subcontent">No tasks assigned to you.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-card-container">
        <div className="forthcard-content">
          <p>Lead Source Report</p>
          <p className="date">3 May, 2022 - 4 Nov, 2022</p>
        </div>
        <hr className="underline" />
        <div className="table-header">
          <p>Source</p>
          <p>Total Leads</p>
          <p>Total Values</p>
          <p>Open</p>
          <p>Won</p>
          <p>Lost</p>
          <p>Win %</p>
        </div>
        <hr className="underline" />
        <div className="table-content">
          <p style={{ width: "4%" }}></p>
          <p>1</p>
          <p> A$0.00</p>
          <p>1</p>
          <p>0</p>
          <p>0</p>
          <p>0 %</p>
        </div>
        {/* <hr/>
      <table style={{width:'100%'}}>
        <tr>
            <td>Source</td>
            <td>Total Leads</td>
            <td>Total Values</td>
            <td>Open</td>
            <td>Won</td>
            <td>Lost</td>
            <td>Win %</td>
        </tr>
        <tr>
            <td></td>
            <td>1</td>
            <td>A$0.00</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0 %</td>
        </tr>
      </table> */}
      </div>
    </div>
  );
}

export default Dashboard;
