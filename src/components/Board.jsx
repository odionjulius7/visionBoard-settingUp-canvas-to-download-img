import React, { useContext, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { VisionContext } from "../VisionContext";

export default function Board() {
  const { setShowbar, showbar } = useContext(VisionContext);
  useEffect(() => {
    setShowbar(false);
  }, []);
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <h2 className="board-title">
          <span>CHOOSE CATEGORY</span>
        </h2>

        <section className="board-main-section">
          <Link className="link" to="/finance1">
            <div className="box1 boxtext">
              <span>Finance</span>
            </div>
          </Link>
          <Link className="link" to="/health">
            <div className="box2 boxtext">
              <span>Health</span>
            </div>
          </Link>
          <Link className="link" to="/education">
            <div className="box3 boxtext">
              <span>Education</span>
            </div>
          </Link>
          <Link className="link" to="/career">
            <div className="box4 boxtext">
              <span>Career</span>
            </div>
          </Link>
          <Link className="link" to="/family">
            <div className="box5 boxtext">
              <span>Family</span>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
