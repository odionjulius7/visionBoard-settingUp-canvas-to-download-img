import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaMinusCircle } from "react-icons/fa";
// import { FaPlusCircle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

import Footer from "./Footer";
import Header from "./Header";

import { useContext, useState } from "react";
import { VisionContext } from "../VisionContext";

import { Store } from "react-notifications-component";
// import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function Goal() {
  let navigate = useNavigate();
  const { name, email, setName, setEmail, goals, removeGoal } =
    useContext(VisionContext);
  const [next, setNext] = useState(false);

  const handleDownload = () => {
    if (name === "" || email === "") {
      Store.addNotification({
        title: "Warning!",
        message: "Input Your Name/Email",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
        animationOut: ["animate__animated animate__fadeOut"],

        dismiss: {
          duration: 4000,
          onScreen: true,
        },
      });
    } else {
      navigate("/download");
    }
  };

  return (
    <div>
      <div className={next === true ? "app-wrapper next" : "app-wrapper next1"}>
        <Header />

        {/* DO CHANGES */}
        <main>
          <h2 className="board-title">
            <span>YOUR GOALS</span>
          </h2>

          <section className="border-goal-section">
            {goals.map((item) => {
              return (
                <div
                  key={item.id}
                  className="box11 boxtext1"
                  style={{ background: `url(${item.img})`, margin: "15px" }}
                >
                  {/* <i className="fas fa-minus-circle new-minus"></i> */}
                  <FaMinusCircle
                    className="new-minus"
                    onClick={() => removeGoal(item.id)}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
            {goals.length >= 5 ? null : (
              <Link to="/board" className="link">
                <div className="addGoal">
                  {/* <i className="addGoal__icon fas fa-plus-circle"></i> */}
                  <FiPlusCircle className="addGoal__icon" />
                </div>
              </Link>
            )}
          </section>

          <div class="text-center mt-50">
            <span onClick={() => setNext(true)} className="btn boardLink">
              CONTINUE
            </span>
          </div>
        </main>

        <Footer />
      </div>

      {/* modal */}

      {next === true ? (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "white",
            padding: "50px 20px",
            maxWidth: "450px",
            fontFamily: "Houschka_Rounded",
            fontWeight: "100",
          }}
        >
          <p
            style={{
              color: "#cc0125",
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: "5px",
              marginTop: "0px",
              borderBottom: "2px solid #cc0125",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            YOU'RE ALMOST DONE
          </p>

          <div
            style={{
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "40px",
              color: "#cc0125",
              textAlign: "center",
            }}
          >
            <form>
              <div style={{ display: "flex" }}>
                <label>Name:</label>
                <input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #cc0125",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ display: "flex" }}>
                <label>Email:</label>
                <input
                  type="email"
                  style={{
                    border: "none",
                    borderBottom: "1px solid #cc0125",
                    width: "100%",
                  }}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <p className="mb-10">
                Would you like us to be your accountability partner?
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ paddingRight: "4px" }}>
                  {" "}
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="GO FOR IT!"
                  />
                  <label htmlFor="vehicle1">GO FOR IT!</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="NOT SURE!"
                  />
                  <label htmlFor="vehicle1">GO FOR IT!</label>
                </div>
              </div>
              <span onClick={handleDownload} className="btn boardLink mt-20">
                EXPORT YOUR VISION
              </span>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
