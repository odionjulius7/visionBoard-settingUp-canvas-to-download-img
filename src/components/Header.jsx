import React, { useContext } from "react";
import { ReactNotifications } from "react-notifications-component";
import { Link } from "react-router-dom";

import Logo from "../images/favicon.png";
import { VisionContext } from "../VisionContext";

export default function Header() {
  const { goals, setShowbar, showbar } = useContext(VisionContext);

  return (
    <div>
      <ReactNotifications />
      <header className="header-main">
        <div className="logo-section">
          <Link className="logo-section__link" to="/">
            {" "}
            <img className="logo-section__image" src={Logo} alt="logo" />
            <span className="logo-section__text">MY VISION BOARD</span>
          </Link>
        </div>
        {showbar ? (
          <Link
            className="header-button btn boardLink boardnone"
            to={goals.length >= 5 ? "/goals" : "/board"}
          >
            CREATE YOUR VISION BOARD
          </Link>
        ) : null}
      </header>
    </div>
  );
}
