import React, { useState } from "react";
import DownArrow from "../assests/downArrow.png";
import UpArrow from "../assests/arrowUp.png";
import Search from "../assests/search.png";
import Launchpad from "../assests/forward.png";
import Dashboard from "../assests/dashboard.png";
import Calender from "../assests/calendar.png";
import Conversation from "../assests/conversation.png";
import Contact from "../assests/contact.png";
import Opportunities from "../assests/opportunity.png";
import Payment from "../assests/payment.png";
import Marketing from "../assests/marketing.png";
import Automation from "../assests/automation.png";
import Sites from "../assests/sites.png";
import Reputation from "../assests/reputation.png";
import Reporting from "../assests/reporting.png";
import KnowledgeBase from "../assests/knowledgeBase.png";
import OnboardingVideo from "../assests/onboardingVideo.png";
import Setting from "../assests/settings.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate=useNavigate()
    const [data, setData] = useState(true);

    const settings=()=>{
      setData(false)
      navigate('settings/businessInfo')
    }

    const goBack=()=>{
      setData(true)
      navigate(-1)
    }
  return (
    <div style={{ width: "16%", paddingLeft: "10px", height: "100vh",position:'sticky',top:'0px' }}>
      <img
        src="https://assets.cdn.msgsndr.com/dJs02EcmedN7BV0yEpv4/media/62eb92ccef6fa889c148e24d.jpeg"
        style={{
          display: "block",
          width: "50%",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <button
        style={{
          borderRadius: "16px",
          border: "none",
          background: "#a7a5a5bd",
          width: "100%",
          height: "30px",
          marginTop: "7%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p style={{ marginTop: "5px" }}>OL -- Lidcombe, NSW</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column",marginTop:'4px' }}>
            <img src={UpArrow} style={{ width: "10px", height: "10px" }} />
            <img src={DownArrow} style={{ width: "10px", height: "10px" }} />
          </div>
        </div>
      </button>
      <div
        style={{
          marginTop: "10%",
          height: "30px",
          display: "flex",
          padding: "5px",
        }}
      >
        <button
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "#f0f1f2",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Search}
            style={{ width: "20px", height: "20px", marginTop: "5px" }}
          />
          <p style={{ marginTop: "6px", marginLeft: "8%" }}>Search</p>
          <button
            style={{
              marginLeft: "30%",
              marginTop: "4px",
              width: "100px",
              height: "20px",
              fontSize: "10px",
              backgroundColor: "gray",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Ctrl k
          </button>
        </button>
        <div>
          <button
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#f0f1f2",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/07/Lightning-bolt-icon-on-transparent-background-PNG.png"
              style={{ width: "20px", marginTop: "5px" }}
            />
          </button>
        </div>
      </div>
      {data ? (
      <>
      <div
        style={{
          marginTop: "5%",
          padding: "10px",
          height: "62%",
          overflow: "auto",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex" }} onClick={()=>navigate('')}>
          <img src={Launchpad} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }} 
          >
            Launchpad
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }} onClick={()=>navigate('dashboard')}>
          <img src={Dashboard} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }} 
          >
            Dashboard
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Conversation} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Conversation
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }} onClick={()=>navigate('calendar')}>
          <img src={Calender} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Calender
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Contact} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Contact
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Opportunities} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Opportunities
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Payment} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Payment
          </p>
        </div>
        <hr />
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Marketing} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Marketing
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Automation} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Automation
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Sites} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Sites
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }} onClick={()=>navigate('reputation')}>
          <img src={Reputation} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Reputation
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={Reporting} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Reporting
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={KnowledgeBase} style={{ width: "20px", height: "20px" }} />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            KnowledgeBase
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img
            src={OnboardingVideo}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }}
          >
            Onboarding Videos
          </p>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "20px", padding: "10px" }} onClick={settings}>
        <img src={Setting} style={{ width: "20px", height: "20px" }} />
        <p style={{ marginTop: "auto", marginLeft: "10px", fontSize: "14px" }} >
          Settings
        </p>
      </div>
      </>
      ):(
        <div
                style={{
                  marginTop: "5%",
                }}
              >
                <div style={{position:'sticky',top:0,backgroundColor:'white'}}>
                <button
                  style={{
                    borderRadius: "16px",
                    border: "none",
                    background: "#a7a5a5bd",
                    width: "40%",
                    height: "30px",
                    marginTop: "7%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div onClick={goBack}>
                      <p style={{ marginTop: "5px" }}>
                        Go Back
                      </p>
                    </div>
                  </div>
                </button>
                <div>
                  <h1>Settings</h1>
                </div>
                </div>
                <div style={{overflow: "auto",
                  cursor: "pointer",height:'59vh'}}>
                <div style={{ display: "flex" }}>
                  <p>
                    MY BUSINESS <hr />
                  </p>
                </div>
                <div
                  style={{
                    // marginTop: "10%",
                    height: "30px",
                    display: "flex",
                  }}
                >
                  <button
                    style={{
                      display: "flex",
                      width: "100%",
                      backgroundColor: "#f0f1f2",
                      marginLeft: "-4%",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <p style={{ marginTop: "6px", marginLeft: "8%" }}>
                      Buisness Info
                    </p>
                  </button>
                </div>
                <div>
                  <p>Pipelines</p>
                  <p>BUSINESS SERVICES</p>
                </div>
                <div>
                  <p>Calenders</p>
                  <p>Phone Numbers</p>
                  <p>Reoutation Management</p>
                  <p>Profile</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p>
                    OTHER SETTINGS
                    <hr />
                  </p>
                </div>
                <div>
                  <p>Custom Fields</p>
                  <p>Custom Values</p>
                  <p>Domains</p>
                  <p>Media</p>
                  <p>URL Redirects</p>
                  <p>Integrations</p>
                  <p>Email Services</p>
                  <p>Tags</p>
                </div>
                </div>
      </div>
      )}
      
    </div>
    
  );
}

export default Sidebar;


// import React, { useState } from "react";
// import DownArrow from "../assests/downArrow.png";
// import UpArrow from "../assests/arrowUp.png";
// import Search from "../assests/search.png";
// import Launchpad from "../assests/forward.png";
// import Dashboard from "../assests/dashboard.png";
// import Calender from "../assests/calendar.png";
// import Conversation from "../assests/conversation.png";
// import Contact from "../assests/contact.png";
// import Opportunities from "../assests/opportunity.png";
// import Payment from "../assests/payment.png";
// import Marketing from "../assests/marketing.png";
// import Automation from "../assests/automation.png";
// import Sites from "../assests/sites.png";
// import Reputation from "../assests/reputation.png";
// import Reporting from "../assests/reporting.png";
// import KnowledgeBase from "../assests/knowledgeBase.png";
// import OnboardingVideo from "../assests/onboardingVideo.png";
// import Setting from "../assests/settings.png";
// import { useNavigate } from "react-router-dom";

// function Sidebar() {
//   const navigate = useNavigate();
//   const [data, setData] = useState(true);

//   return (
    // <div style={{ width: "17%", paddingLeft: "10px", height: "800px" }}>
    //   <img
    //     src="https://assets.cdn.msgsndr.com/dJs02EcmedN7BV0yEpv4/media/62eb92ccef6fa889c148e24d.jpeg"
    //     style={{
    //       display: "block",
    //       width: "50%",
    //       marginTop: "10px",
    //       marginLeft: "auto",
    //       marginRight: "auto",
    //     }}
    //   />
    //   <button
    //     style={{
    //       borderRadius: "16px",
    //       border: "none",
    //       background: "#a7a5a5bd",
    //       width: "100%",
    //       height: "30px",
    //       marginTop: "7%",
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-around" }}>
    //       <div>
    //         <p style={{ marginTop: "5px" }}>OL -- Lidcombe, NSW</p>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           marginTop: "4px",
    //         }}
    //       >
    //         <img src={UpArrow} style={{ width: "10px", height: "10px" }} />
    //         <img src={DownArrow} style={{ width: "10px", height: "10px" }} />
    //       </div>
    //     </div>
    //   </button>
    //   <div
    //     style={{
    //       marginTop: "10%",
    //       height: "30px",
    //       display: "flex",
    //       padding: "5px",
    //     }}
    //   >
    //     <button
    //       style={{
    //         display: "flex",
    //         width: "100%",
    //         backgroundColor: "#f0f1f2",
    //         borderRadius: "10px",
    //         border: "none",
    //         cursor: "pointer",
    //       }}
    //     >
    //       <img
    //         src={Search}
    //         style={{ width: "20px", height: "20px", marginTop: "5px" }}
    //       />
    //       <p style={{ marginTop: "6px", marginLeft: "8%" }}>Search</p>
    //       <button
    //         style={{
    //           marginLeft: "30%",
    //           marginTop: "4px",
    //           width: "45px",
    //           height: "20px",
    //           fontSize: "10px",
    //           backgroundColor: "gray",
    //           border: "none",
    //           borderRadius: "5px",
    //         }}
    //       >
    //         Ctrl k
    //       </button>
    //     </button>
    //     <div>
    //       <button
    //         style={{
    //           width: "100%",
    //           height: "30px",
    //           backgroundColor: "#f0f1f2",
    //           borderRadius: "5px",
    //           border: "none",
    //           cursor: "pointer",
    //         }}
    //       >
    //         <img
    //           src="https://image.similarpng.com/very-thumbnail/2021/07/Lightning-bolt-icon-on-transparent-background-PNG.png"
    //           style={{ width: "20px", marginTop: "5px" }}
    //           />
    //       </button>
    //     </div>
    //   </div>
    //   {data ? (
    //     <>
    //       {" "}
    //       <div
    //         style={{
    //           marginTop: "5%",
    //           padding: "10px",
    //           height: "62%",
    //           overflow: "auto",
    //           cursor: "pointer",
    //         }}
    //       >
    //         <div style={{ display: "flex" }}>
    //           <img src={Launchpad} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //             onClick={() => navigate("/launchpad")}
    //           >
    //             Launchpad
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Dashboard} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Dashboard
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img
    //             src={Conversation}
    //             style={{ width: "20px", height: "20px" }}
    //           />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //             onClick={() => navigate("/conversation")}
    //           >
    //             Conversation
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Calender} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Calender
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Contact} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Contact
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img
    //             src={Opportunities}
    //             style={{ width: "20px", height: "20px" }}
    //           />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Opportunities
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Payment} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Payment
    //           </p>
    //         </div>
    //         <hr />
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Marketing} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Marketing
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Automation} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Automation
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Sites} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Sites
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Reputation} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Reputation
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img src={Reporting} style={{ width: "20px", height: "20px" }} />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Reporting
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img
    //             src={KnowledgeBase}
    //             style={{ width: "20px", height: "20px" }}
    //           />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             KnowledgeBase
    //           </p>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "10px" }}>
    //           <img
    //             src={OnboardingVideo}
    //             style={{ width: "20px", height: "20px" }}
    //           />
    //           <p
    //             style={{
    //               marginTop: "auto",
    //               marginLeft: "10px",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Onboarding Videos
    //           </p>
    //         </div>
    //       </div>
    //       <div style={{ display: "flex", marginTop: "20px", padding: "10px" }}>
    //         <img src={Setting} style={{ width: "20px", height: "20px" }} />
    //         <p
    //           style={{
    //             marginTop: "auto",
    //             marginLeft: "10px",
    //             fontSize: "14px",
    //           }}
    //           onClick={() => setData(false)}
    //         >
    //           Settings
    //         </p>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <div
    //         style={{
    //           marginTop: "5%",
    //           padding: "10px",
    //           height: "62%",
    //           overflow: "auto",
    //           cursor: "pointer",
    //         }}
    //       >
    //         <button
    //           style={{
    //             borderRadius: "16px",
    //             border: "none",
    //             background: "#a7a5a5bd",
    //             width: "50%",
    //             height: "30px",
    //             marginTop: "7%",
    //           }}
    //         >
    //           <div style={{ display: "flex", justifyContent: "space-around" }}>
    //             <div>
    //               <p style={{ marginTop: "5px" }} onClick={() => setData(true)}>
    //                 Go Back
    //               </p>
    //             </div>
    //           </div>
    //         </button>
    //         <div>
    //           <h1>Settings</h1>
    //         </div>
    //         <div style={{ display: "flex" }}>
    //           <p>
    //             MY BUSINESS <hr />
    //           </p>
    //         </div>
    //         <div
    //           style={{
    //             marginTop: "10%",
    //             height: "30px",
    //             display: "flex",
    //           }}
    //         >
    //           <button
    //             style={{
    //               display: "flex",
    //               width: "220px",
    //               backgroundColor: "#f0f1f2",
    //               marginLeft: "-4%",
    //               border: "none",
    //               cursor: "pointer",
    //             }}
    //           >
    //             <p style={{ marginTop: "6px", marginLeft: "8%" }}>
    //               Buisness Info
    //             </p>
    //           </button>
    //         </div>
    //         <div>
    //           <p>Pipelines</p>
    //           <p>BUSINESS SERVICES</p>
    //         </div>
    //         <div>
    //           <p>Calenders</p>
    //           <p>Phone Numbers</p>
    //           <p>Reoutation Management</p>
    //           <p>Profile</p>
    //         </div>
    //         <div style={{ display: "flex" }}>
    //           <p>
    //             OTHER SETTINGS
    //             <hr />
    //           </p>
    //         </div>
    //         <div>
    //           <p>Custom Fields</p>
    //           <p>Custom Values</p>
    //           <p>Domains</p>
    //           <p>Media</p>
    //           <p>URL Redirects</p>
    //           <p>Integrations</p>
    //           <p>Email Services</p>
    //           <p>Tags</p>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
//   );
// }

// export default Sidebar;