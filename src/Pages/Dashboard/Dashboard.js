import React from "react";
import DownArrow from "../../assests/downArrow.png";
import Filter from "../../assests/filter.png";
import Circle from "../../assests/circle.png";
import List from "../../assests/menu.png";
import Phone from "../../assests/phone.png";
import Sms from "../../assests/sms.png";

function Dashboard() {
  return (
    <div
      style={{ padding: "15px", overflow: "auto", backgroundColor: "#f0f5fc",paddingTop:'25px' }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "32.5%",
            backgroundColor: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "3px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Opportunities</p>
            <p style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div style={{ textAlign: "center", fontSize: "50px",fontWeight:200 }}>1</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>
              <div style={{ color: "green" }}>Closed</div>
              <div style={{ color: "yellow" }}>Open</div>
              <div style={{ color: "red" }}>Lost</div>
            </div>
            <div>
              <div>0</div>
              <div>1</div>
              <div>0</div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "32.5%",
            backgroundColor: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "3px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Pipeline Value</p>
            <p style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div style={{ textAlign: "center", fontSize: "50px",fontWeight:200 }}>A$0.00</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>
              <div style={{ color: "green" }}>Closed</div>
              <div style={{ color: "yellow" }}>Open</div>
              <div style={{ color: "red" }}>Lost</div>
            </div>
            <div>
              <div>A$0.00</div>
              <div>A$0.00</div>
              <div>A$0.00</div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "32.5%",
            backgroundColor: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "3px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Conversion Rate</p>
            <p style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</p>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div style={{ textAlign: "center", fontSize: "50px",fontWeight:200 }}>0.00%</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            width: "48%",
            height: "600px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <div>Funnel</div>
            <div style={{ display: "flex" }}>
              <select style={{ borderColor: "white" }}>
                <option
                  value="YOUR PROMOTION Pipeline (1)"
                  style={{ padding: "10px" }}
                >
                  YOUR PROMOTION Pipeline (1)
                </option>
              </select>
              {/* <img src={DownArrow} style={{ width: "20px" }} /> */}
            </div>
            <div style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div>
            <img
              src={Filter}
              style={{
                width: "50%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "45%",
                marginLeft: "30%",
              }}
            >
              <div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "blue",
                    borderRadius: "100%",
                    marginTop: "7.5px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "green",
                    borderRadius: "100%",
                    marginTop: "7.5px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "red",
                    borderRadius: "100%",
                    marginTop: "7.5px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "yellow",
                    borderRadius: "100%",
                    marginTop: "7.5px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "skyblue",
                    borderRadius: "100%",
                    marginTop: "7.5px",
                    marginRight: "1%",
                  }}
                ></div>
              </div>
              <div>
                <div style={{ fontSize: "14px" }}>(1) New Leads - A$ 0.00</div>
                <div style={{ fontSize: "14px" }}>
                  (0) Hot Leads - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Booking Requested - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Booking Confirmed - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Won - A$ 0.00 (0.00%)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "20px", backgroundColor: "white", width: "51%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <div>Stages Distribution</div>
            <div style={{ display: "flex" }}>
              <div>YOUR PROMOTION Pipeline (1)</div>
              <img src={DownArrow} style={{ width: "20px" }} />
            </div>
            <div style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</div>
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div>
            <img
              src={Circle}
              style={{
                width: "50%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "42%",
                marginLeft: "33%",
              }}
            >
              <div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "blue",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "green",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "red",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "yellow",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "skyblue",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "orange",
                    borderRadius: "100%",
                    marginTop: "8px",
                    marginRight: "1%",
                  }}
                ></div>
              </div>
              <div>
                <div style={{ fontSize: "14px" }}>(1) New Leads - A$ 0.00</div>
                <div style={{ fontSize: "14px" }}>
                  (0) Hot Leads - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Booking Requested - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Booking Confirmed - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Won - A$ 0.00 (0.00%)
                </div>
                <div style={{ fontSize: "14px" }}>
                  (0) Lost/abandoned - A$ 0.00 (0.00%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ marginTop: "20px", backgroundColor: "white", width: "48%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <div>Manual Actions</div>
            <div style={{ display: "flex" }}>
              <div>Select Campaign / Workflow</div>
              <img
                src={DownArrow}
                style={{ width: "15px", marginLeft: "5px", marginTop: "5px" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <select style={{ borderColor: "white" }}>
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
          </div>
          <hr style={{ border: "1px solid #f0f5fc" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "125px",
                  height: "125px",
                  backgroundColor: "orange",
                  borderRadius: "100%",
                }}
              ></div>
              <img src={List} style={{ width: "20px", marginTop: "10px" }} />
              <p style={{ marginTop: "auto" }}>Total Pending</p>
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "125px",
                  height: "125px",
                  backgroundColor: "#3c96f0",
                  borderRadius: "100%",
                }}
              ></div>
              <img src={Phone} style={{ width: "20px", marginTop: "10px" }} />
              <p style={{ marginTop: "auto" }}>Phone</p>
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "125px",
                  height: "125px",
                  backgroundColor: "#81d669",
                  borderRadius: "100%",
                }}
              ></div>
              <img src={Sms} style={{ width: "20px", marginTop: "10px" }} />
              <p style={{ marginTop: "auto" }}>SMS</p>
            </div>
          </div>
          <div>
            <p
              style={{ marginTop: "auto", textAlign: "end", marginRight: "5%" }}
            >
              Go to Manual Actions
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: "20px", backgroundColor: "white", width: "51%" }}
        >
          <div style={{ width: "25%" }}>
            <p style={{ paddingLeft: "30px" }}>Tasks</p>
            <hr style={{ border: "1px solid #f0f5fc" }} />
            <div style={{ textAlign: "center" }}>
              <img src={List} style={{ width: "20px" }} />
              <p style={{ marginTop: "auto", fontSize: "12px" }}>
                No tasks assigned to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "5%",
            paddingRight: "5%",
            marginTop: "20px",
          }}
        >
          <p>Lead Source Report</p>
          <p style={{ color: "blue",cursor:'pointer' }}>3 May, 2022 - 4 Nov, 2022</p>
        </div>
        <hr style={{ border: "1px solid #f0f5fc" }} />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Source</p>
          <p>Total Leads</p>
          <p>Total Values</p>
          <p>Open</p>
          <p>Won</p>
          <p>Lost</p>
          <p>Win %</p>
        </div>
        <hr style={{ border: "1px solid #f0f5fc" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
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
