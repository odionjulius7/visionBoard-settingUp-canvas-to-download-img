import React from "react";

import html2canvas from "html2canvas";

import Logo from "../images/favicon.png";

import QUOTEIMG from "../images/vision-board-APPROVED.png";
import Footer from "./Footer";
import Header from "./Header";

import { useContext } from "react";
import { VisionContext } from "../VisionContext";
import { FaWindows } from "react-icons/fa";

export default function Download() {
  const { name, email, goals } = useContext(VisionContext);
  console.log(goals);

  // using html2canvas to capture any html element(e.g div, img, link)
  // as an image and to download as a png/jpg
  const onDownloads = () => {
    // u can go to the html2canvas site
    const a = html2canvas(document.getElementById("screenShot")).then(function (
      canvas
    ) {
      // document.body.appendChild(canvas);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); // setting the download here
      // console.log(image);
      window.location.href = image;

      //     const dataUrl = canvas.toDataURL("png");
      // console.log(dataUrl);
      // const win = window.open(dataUrl, '_blank'); // to change location away from the present windows
      // just like href(target="_blank") but with value/data you are sending with it
    });
  };

  return (
    <div>
      <div className="app-wrapper">
        <Header />

        <div className="download-canvas" id="screenShot">
          <img className="logo-image" src={Logo} alt="logo" />
          <div
            style={{
              background: `url(${QUOTEIMG})`,
            }}
            className="sub-canvas"
          >
            <h4 className="canvas-header">MY VISION BOARD</h4>
            <div className="canvas-content">
              {goals.map((item) => {
                return (
                  <div
                    className="canvas-indie-img"
                    key={item.id}
                    style={{
                      background: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // flex: "1 1 40%",
                    }}
                  >
                    <p className="canvas-indie-title">{item.name}</p>
                  </div>
                );
              })}
            </div>
            <p className="canvas-name">
              Believe in yourself and Go for It, {name}
            </p>
          </div>
        </div>

        <div
          class="share-button text-center mt-4 d-flex"
          style={{
            display: "flex",
            width: "200px",
            marginRight: "auto",
            marginLeft: "auto",
            justifyContent: "space-between",
          }}
        >
          {goals.length > 0 ? (
            <div className="share-text mt-3 mb-1" style={{ color: "white" }}>
              Share
            </div>
          ) : null}

          {goals.length > 0 ? (
            <a style={{ color: "white" }} className="share-button mr-3">
              <i class="fab fa-facebook-square"></i>
            </a>
          ) : null}

          {goals.length > 0 ? (
            <a style={{ color: "white" }} className="share-button mr-3">
              <i class="fab fa-twitter-square"></i>
            </a>
          ) : (
            <span style={{ color: "white" }}>loading....</span>
          )}
          {goals.length > 0 ? (
            <button
              style={{
                backgroundColor: "yellow",
                display: "block",
                borderRadius: "10px",
                border: "none",
                paddingLeft: "5px",
                paddingRight: "5px",
                color: "#cc0125",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={onDownloads}
            >
              DOWNLOAD
            </button>
          ) : null}
        </div>

        <Footer style={{ marginTop: "900px" }} />
      </div>
    </div>
  );
}
