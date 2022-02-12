import React, { useContext, useEffect } from "react";

import { VisionContext } from "../VisionContext";

import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const { goals, setShowbar, showbar } = useContext(VisionContext);
  useEffect(() => {
    setShowbar(true);
  }, []);

  return (
    <div className="app-wrapper">
      {/* <div ref={modalRef} onClick={removeVideo} className=""></div> */}
      <Header />
      <main>
        <div className="banner">
          <div className="banner__text">
            <h1>Vision Board helps you visualize your goals.</h1>
            <h1>To achieve it, you have to</h1>
            <h1>GO FOR IT!</h1>

            {/* <i
              ref={removeRef}
              class="fas fa-times-circle close none"
              onClick={removeVideo}
            ></i> */}

            <span
              // onClick={playVideo}
              className="banner_btn btn btn--red btn--lg mt-20"
            >
              WATCH VIDEO
            </span>
          </div>
        </div>

        <h2 className="milk-header">
          <span>Why do you need a Vision Board?</span>
        </h2>

        <div className="milk-drop-wrapper">
          <div className="milk-drop">
            <span className="milk-drop__header">1.</span>
            <div className="milk-drop__body">
              Writing down your goals is powerful. it makes you think deeper
              about what you want
            </div>
          </div>
          <div className="milk-drop">
            <span className="milk-drop__header">2.</span>
            <div className="milk-drop__body">
              It helps you set realistic goals and measure your goals
            </div>
          </div>
          <div className="milk-drop">
            <span className="milk-drop__header">3.</span>
            <div className="milk-drop__body">
              It acts as your daily reminder and you can evaluate your actions
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to={goals.length >= 5 ? "/goals" : "/board"}
            className="btn mt-70 mx-auto"
          >
            CREATE YOUR VISION BOARD
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
