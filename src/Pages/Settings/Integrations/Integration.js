import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Integration() {
  const [data, setData] = useState(true);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          position: "sticky",
          marginLeft: "15%",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "15%",
            marginTop: "auto",
            marginLeft: "2%",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>
            Integrations
          </p>
          <p
            style={{
              fontSize: "15px",
              cursor: "pointer",
              color: "skyblue",
              marginLeft: "6%",
            }}
            onClick={() => setData(true)}
          >
            integrations
          </p>
          <p
            style={{
              fontSize: "15px",
              cursor: "pointer",
              color: "skyblue",
              marginLeft: "6%",
            }}
            onClick={() => setData(false)}
          >
            FacebookFormFieldsMapping
          </p>
          <p
            style={{
              fontSize: "15px",
              cursor: "pointer",
              color: "skyblue",
              marginLeft: "6%",
            }}
          >
            TikTokFormFieldsMapping
          </p>
        </div>
      </div>
      {data ? (
        <>
          {" "}
          <div
            style={{
              backgroundColor: "#f0f5fc",
            }}
          >
            <div style={{ display: "flex", padding: "2%" }}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "22%",
                  height: "350px",
                  marginLeft: "3%",
                }}
              >
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl&pid=Api&P=0"
                  style={{
                    width: "17%",
                    height: "53px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p
                  style={{
                    fontSize: "large",
                    color: "grey",
                    marginLeft: "7%",
                    marginTop: "11%",
                  }}
                >
                  Connect your location's Google Account
                </p>
                <img
                  src="https://androidexample365.com/content/images/2019/11/GoogleSignInLight.png"
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "24%",
                  height: "350px",
                  marginLeft: "3%",
                }}
              >
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.3nfXYNmbv2fR1KwkAtV04QHaHk&pid=Api&P=0"
                  style={{
                    width: "28%",
                    height: "65px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p style={{ color: "grey", marginLeft: "3%" }}>
                  Connect your location's Facebook Account
                </p>
                <Button
                  variant="primary"
                  style={{ marginLeft: "29%", width: "44%" }}
                >
                  connect
                </Button>
                <p style={{ color: "grey", marginTop: "3%", marginLeft: "2%" }}>
                  To use Instagram DM's, you need to connect your Instagram
                  Account with a Facebook Page. Learn More
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "24%",
                  height: "350px",
                  marginLeft: "3%",
                }}
              >
                <img
                  src="https://static.leadconnectorhq.com/pmd/img/logo_medallions/logo-quickbooks.png"
                  style={{
                    width: "27%",
                    height: "74px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p style={{ color: "grey", marginTop: "5%", marginLeft: "5%" }}>
                  Connect your location's QuickBooks Account
                </p>
                <Button
                  variant="success"
                  style={{ marginLeft: "30%", width: "41%", marginTop: "5%" }}
                >
                  Connect
                </Button>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "24%",
                  height: "350px",
                  marginLeft: "1%",
                }}
              >
                <img
                  src="https://static.leadconnectorhq.com/pmd/img/logo_medallions/medallion-clio.png"
                  style={{
                    width: "27%",
                    height: "74px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p
                  style={{ color: "grey", marginTop: "10%", marginLeft: "4%" }}
                >
                  Connect your location's Clio Account
                </p>
                <Button
                  variant="primary"
                  style={{ marginLeft: "29%", width: "44%", marginTop: "10%" }}
                >
                  connect
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "5%", marginLeft: "3%" }}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "22%",
                  height: "350px",
                  marginLeft: "2%",
                }}
              >
                <img
                  src="https://static.leadconnectorhq.com/pmd/img/logo_medallions/medallion-stripe.png"
                  style={{
                    width: "22%",
                    height: "77px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p
                  style={{ marginLeft: "32%", color: "grey", marginTop: "5%" }}
                >
                  Stripe Account
                </p>
                <p style={{ marginLeft: "25%", color: "red", marginTop: "5%" }}>
                  Please use Stripe Connect.
                </p>
                <Button variant="success" style={{ marginLeft: "32%" }}>
                  {" "}
                  Continue
                </Button>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "22%",
                  height: "350px",
                  marginLeft: "3%",
                }}
              >
                <img
                  src="https://static.leadconnectorhq.com/pmd/img/logo_medallions/medallion-shopify.png"
                  style={{
                    width: "28%",
                    height: "65px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p style={{ color: "grey", marginLeft: "3%" }}>
                  Connect your location's Shopify Store
                </p>
                <Button
                  variant="primary"
                  style={{ marginLeft: "29%", width: "44%" }}
                >
                  connect
                </Button>
                <p style={{ color: "grey", marginTop: "3%", marginLeft: "2%" }}>
                  Please create a custom app inside your Shopify store and
                  continue here by clicking Connect. Learn More
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "22%",
                  height: "350px",
                  marginLeft: "3%",
                }}
              >
                <img
                  src="https://static.leadconnectorhq.com/pmd/img/logo_medallions/medallion-tiktok.svg"
                  style={{
                    width: "28%",
                    height: "65px",
                    marginTop: "17%",
                    marginLeft: "36%",
                  }}
                />
                <p style={{ color: "grey", marginLeft: "3%" }}>
                  Connect your location's TikTok Account
                </p>
                <Button
                  variant="primary"
                  style={{ marginLeft: "29%", width: "44%" }}
                >
                  connect
                </Button>
                <p style={{ color: "grey", marginTop: "3%", marginLeft: "2%" }}>
                  Connect to get leads from your TikTok lead generation ads into
                  your CRM. To learn how this works Learn More
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>
            Page access token is either expired or does not have enough
            permissions. Please make sure you have admin access to the pages.
          </p>
        </>
      )}
    </div>
  );
}

export default Integration;
