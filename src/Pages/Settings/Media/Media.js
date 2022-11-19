import React from "react";
import Button from "react-bootstrap/Button";

function Media() {
  return (
    <div
      style={{ marginTop: "5%", backgroundColor: "#f0f5fc", height: "83vh" }}
    >
      <div style={{ padding: "30px" }}>
        <p style={{ fontSize: "larger" }}>Media</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "95%",
          height: "400px",
          marginLeft: "3%",
          borderRadius: "1%",
        }}
      >
        <div>
          {" "}
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.L4MEoLH89ba7VVq7UIc-vQAAAA&pid=Api&P=0"
            style={{
              width: "10%",
              height: "84px",
              marginLeft: "42%",
              marginTop: "13%",
            }}
          />
        </div>
        <div>
          <Button
            variant="success"
            style={{ marginLeft: "40%", marginTop: "2%" }}
          >
            Open media library
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Media;
