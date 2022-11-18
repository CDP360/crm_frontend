import React, { useState } from "react";
import Back from "../../../assests/left.png";
import Next from "../../../assests/right.png";
import Down from "../../../assests/downArrow.png";
import Tag from "../../../assests/tag.png";
import Puzzle from "../../../assests/puzzle.png";
import Filter from "../../../assests/filter.png";
import Mail from "../../../assests/mail.png";
import Message from "../../../assests/message.png";
import Phone from "../../../assests/phone.png";

import { useLocation, useNavigate } from "react-router-dom";

function ContactDetails() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [showContacts, hideContacts] = useState(true);
  const [showGeneral, hideGeneral] = useState(false);
  const [showAdditional, hideAdditional] = useState(false);
  const [showTag, hideTag] = useState(false);
  const [showCampaigns, hideCampaigns] = useState(false);
  const [showOpportunities, hideOpportunities] = useState(false);
  const [showContactPage,hideContactPage]=useState(true)

  return (
    <div style={{ width: "30%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2%",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={Back}
            style={{ width: "20px" }}
            onClick={() => navigate("/contacts")}
          />
          <p style={{ marginBottom: "auto" }}>{location.state.firstName}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ marginBottom: "auto" }}>1 of 5 selected</p>
          <img src={Next} style={{ width: "20px" }} />
        </div>
      </div>
      <hr style={{ marginTop: "auto" }} />
      <div style={{ display: "flex", justifyContent: "space-around",cursor:'pointer' }}>
        <p onClick={()=>hideContactPage(true)}>Contact</p>
        <p onClick={()=>hideContactPage(false)}>Company</p>
      </div>
      <hr style={{ marginTop: "auto" }} />
      {showContactPage?(
        <div style={{ height: "71vh", overflow: "auto" }}>
        <div style={{ display: "flex", paddingLeft: "5%" }}>
          <input type="checkbox" style={{ width: "20px" }} />
          <p style={{ marginBottom: "auto", marginLeft: "3%" }}>
            Hide empty fields
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            cursor: "pointer",
          }}
          onClick={() => hideContacts(!showContacts)}
        >
          <div>
            {showContacts ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
          <p
            style={{
              marginBottom: "auto",
              marginLeft: "3%",
              color: "skyblue",
              fontWeight: "bold",
            }}
          >
            Contacts
          </p>
        </div>
        {showContacts ? (
          <div style={{ paddingLeft: "5%" }}>
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>First Name</p>
            <input
              value={location.state.firstName}
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Last Name</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Email</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Phone</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>
              Date Of Birth
            </p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>
              Contact Source
            </p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>
              Contact Type
            </p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
          </div>
        ) : (
          <></>
        )}
        <hr />
        <div
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            cursor: "pointer",
          }}
          onClick={() => hideGeneral(!showGeneral)}
        >
          <div>
            {showGeneral ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
          <p
            style={{
              marginBottom: "auto",
              marginLeft: "3%",
              color: "skyblue",
              fontWeight: "bold",
            }}
          >
            General Info
          </p>
        </div>
        {showGeneral ? (
          <div style={{ paddingLeft: "5%" }}>
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>
              Business Name
            </p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>
              Street Address
            </p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>City</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Country</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>State</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Postal Code</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Websites</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
            <p style={{ marginTop: "3%", marginBottom: "auto" }}>Time Zone</p>
            <input
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
              }}
            />
          </div>
        ) : (
          <></>
        )}
        <hr />
        <div
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            cursor: "pointer",
          }}
          onClick={() => hideAdditional(!showAdditional)}
        >
          <div>
            {showAdditional ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
          <p
            style={{
              marginBottom: "auto",
              marginLeft: "3%",
              color: "skyblue",
              fontWeight: "bold",
            }}
          >
            Additional Info
          </p>
        </div>
        {showAdditional ? (
          <p style={{ paddingLeft: "10%", paddingTop: "3%" }}>
            No fields added to this folder
          </p>
        ) : (
          <></>
        )}
        <hr style={{ marginBottom: "auto" }} />
        <div style={{ padding: "5%", backgroundColor: "#f0f1f2" }}>
          <p style={{ marginBottom: "auto" }}>ACTIONS</p>
        </div>
        <hr style={{ marginTop: "auto" }} />
        <div
          onClick={() => hideTag(!showTag)}
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Tag} style={{ width: "20px" }} />
            <p
              style={{
                marginBottom: "auto",
                marginLeft: "3%",
                color: "skyblue",
                fontWeight: "bold",
              }}
            >
              Tags
            </p>
          </div>
          <div style={{ marginRight: "5%" }}>
            {showTag ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
        </div>
        {showTag ? (
          <div style={{ paddingLeft: "5%" }}>
            <input
              placeholder="Add Tags"
              style={{
                width: "95%",
                padding: "1%",
                border: "1px solid darkgray",
                borderRadius: "5px",
                marginTop: "3%",
              }}
            />
          </div>
        ) : (
          <></>
        )}
        <hr />
        <div
          onClick={() => hideCampaigns(!showCampaigns)}
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Puzzle} style={{ width: "20px" }} />
            <p
              style={{
                marginBottom: "auto",
                marginLeft: "3%",
                color: "skyblue",
                fontWeight: "bold",
                width: "200px",
              }}
            >
              Campaigns / Workflows
            </p>
          </div>
          <div style={{ marginRight: "5%" }}>
            {showCampaigns ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
        </div>
        {showCampaigns ? (
          <div style={{ paddingLeft: "5%", marginTop: "3%" }}>
            <p>Active</p>
            <p
              style={{
                backgroundColor: "#f0f1f2",
                width: "15%",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              + Add
            </p>
            <p>Past</p>
          </div>
        ) : (
          <></>
        )}
        <hr />
        <div
          onClick={() => hideOpportunities(!showOpportunities)}
          style={{
            display: "flex",
            marginTop: "3%",
            paddingLeft: "5%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Filter} style={{ width: "20px" }} />
            <p
              style={{
                marginBottom: "auto",
                marginLeft: "3%",
                color: "skyblue",
                fontWeight: "bold",
                width: "200px",
              }}
            >
              Opportunities
            </p>
          </div>
          <div style={{ marginRight: "5%" }}>
            {showOpportunities ? (
              <img src={Down} style={{ width: "20px" }} />
            ) : (
              <img src={Next} style={{ width: "20px" }} />
            )}
          </div>
        </div>
        {showOpportunities ? (
          <div style={{ paddingLeft: "5%", marginTop: "3%" }}>
            <p
              style={{
                backgroundColor: "#f0f1f2",
                width: "15%",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              + Add
            </p>
          </div>
        ) : (
          <></>
        )}
        <hr />
        <div style={{ backgroundColor: "#f0f1f2", padding: "5%" }}>
          <p>Offers</p>
          <select
            style={{ width: "100%", padding: "1%", backgroundColor: "white" }}
            disabled
          >
            <option>Select Offers</option>
          </select>
          <p style={{ marginTop: "3%" }}>DND</p>
          <div>
            <div
              style={{
                padding: "3%",
                border: "1px solid lightgray",
                backgroundColor: "white",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ marginBottom: "auto" }}>DND all channels</p>
                <input type="checkbox" />
              </div>
              <h6
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid black",
                  lineHeight: "0.1em",
                  margin: "10px 0 20px",
                }}
              >
                <span style={{ backgroundColor: "white", padding: "0 10px" }}>
                  OR
                </span>
              </h6>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "6%", height: "60%" }} src={Mail} />
                  <p style={{ marginLeft: "5%" }}>Email</p>
                </div>
                <input type="checkbox" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "6%", height: "60%" }} src={Message} />
                  <p style={{ marginLeft: "5%" }}>Text Messages</p>
                </div>
                <input type="checkbox" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "6%", height: "60%" }} src={Phone} />
                  <p style={{ marginLeft: "5%" }}>Calls & Voicemails</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            backgroundColor: "#f0f1f2",
            padding: "8%",
            fontSize: "12px",
          }}
        >
          Created on: Fri Nov 11 2022 16:18:05 GMT+0530
        </p>
        <div style={{ padding: "5%", textAlign: "center" }}>
          <button
            style={{
              width: "90%",
              padding: "1%",
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "10px",
              height: "30px",
            }}
          >
            View Audit Logs
          </button>
        </div>
      </div>
      ):(
        <div style={{padding:'5%'}}>
            <p>Add Company</p>
            <input style={{width:'100%',padding:'2%'}} placeholder='Search Company'/>
            <div>
                
            </div>
        </div>
      )}
      
    </div>
  );
}

export default ContactDetails;
