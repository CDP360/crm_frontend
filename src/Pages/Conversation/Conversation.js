import React, { useState } from "react";
import "./Conversation.css";
import { Link } from "react-scroll";
import Edit from "../../assests/edit.png";
import Filter from "../../assests/filter.jpg";
import Search from "../../assests/search.png";
function Conversation() {
  const [state, setState] = useState(true);

  return (
    <>
      <div style={{ position: "sticky", top: "60px",backgroundColor:'white' }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" }} className="header">
            <h1>Conversation</h1>
            <Link
              smooth={true}
              duration={500}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p onClick={() => setState(true)}>conversation</p>
            </Link>
            <Link
              smooth={true}
              duration={500}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p onClick={() => setState(false)}> Manualactions</p>
            </Link>
            <Link
              smooth={true}
              duration={500}
              style={{ marginTop: "3%", marginLeft: "3%" }}
            >
              <p>Templeate</p>
            </Link>
            <Link style={{ marginTop: "3%", marginLeft: "3%" }}>
              <p>TriggersLinks</p>
            </Link>
          </div>
        </div>
      </div>
      {state ? (
        <>
          <div
            style={{
              width: "25%",
              paddingLeft: "10px",
              height: "84%",
              backgroundColor: "#f2f7fa",
              marginTop:'1.5%'
            }}
          >
            <div className="point" style={{ display: "flex" }}>
              <Link smooth={true} duration={500}>
                <p>Unread</p>
              </Link>
              <Link smooth={true} duration={500} style={{ marginLeft: "3%" }}>
                <p>Recents</p>
              </Link>
              <Link smooth={true} duration={500} style={{ marginLeft: "3%" }}>
                <p>All</p>
              </Link>
            </div>
            <hr style={{ width: "331px", marginLeft: "-4%" }} />
            <div style={{ display: "flex" }}>
              <p>Messages</p>
              <img
                src={Filter}
                alt=""
                style={{
                  width: "10%",
                  height: "23px",
                  marginTop: "4%",
                  marginLeft: "39%",
                  backgroundColor: "#f2f7fa",
                }}
              />
              <img
                src={Edit}
                alt=""
                style={{
                  width: "10%",
                  height: "23px",
                  marginTop: "4%",
                  marginLeft: "10%",
                }}
              />
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "-2%",
                }}
              >
                <img
                  src={Search}
                  style={{ width: "20px", height: "20px", marginTop: "5px" }}
                />
                <p style={{ marginTop: "6px", marginLeft: "8%" }}>Search</p>
              </button>
            </div>
            <p
              style={{
                fontSize: "small",
                fontWeight: "100",
                marginLeft: "25%",
              }}
            >
              No conversations to show
            </p>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <h1>Manual Actions</h1>

            <button
              style={{
                width: "14%",
                height: "42px",
                borderRadius: "8px",
                marginTop: "2%",
                marginLeft: "37%",
                backgroundColor: "white",
              }}
            >
              SelectCampaign/Workflow
            </button>
            <button
              style={{
                width: "14%",
                height: "42px",
                borderRadius: "8px",
                marginTop: "2%",
                marginLeft: "2%",
                backgroundColor: "white",
              }}
            >
              Select Assignee
            </button>
            <button
              style={{
                width: "9%",
                height: "42px",
                borderRadius: "8px",
                marginTop: "2%",
                marginLeft: "2%",
                backgroundColor: "lightgreen",
              }}
            >
              LetsStart
            </button>
          </div>
          <div style={{ marginLeft: "85%" }}>
            <button
              style={{
                width: "44%",
                height: "35px",
                borderRadius: "11%",
                border: "grey",
              }}
            >
              Previous
            </button>
            <button
              style={{
                width: "33%",
                height: "35px",
                borderRadius: "11%",
                border: "grey",
              }}
            >
              next
            </button>
          </div>
          <div style={{ marginLeft: "85%" }}>
            <button
              style={{
                width: "44%",
                height: "35px",
                borderRadius: "11%",
                border: "grey",
              }}
            >
              Previous
            </button>
            <button
              style={{
                width: "33%",
                height: "35px",
                borderRadius: "11%",
                border: "grey",
              }}
            >
              next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Conversation;