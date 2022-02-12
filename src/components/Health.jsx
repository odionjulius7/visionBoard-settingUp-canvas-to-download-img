import React from "react";
import { useNavigate, Link } from "react-router-dom";

// import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useContext, useEffect } from "react";
import { VisionContext } from "../VisionContext";

export default function Health() {
  let navigate = useNavigate();
  const { count, setCount, goals, data, addGoals } = useContext(VisionContext);

  useEffect(() => {
    setCount(1);
  }, []);

  const addNewGoal = (id) => {
    if (goals === null || goals.length < 5) {
      addGoals(id);
      navigate("/goals");
    }
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="board-goals-title boxh">
          {" "}
          <Link to="/board" className="back-link">
            <i
              style={{ paddingRight: "10px" }}
              className="fas fa-arrow-left"
            ></i>
          </Link>{" "}
          <span>Health</span>
        </div>

        <section className="border-goal-section">
          {data[count].map((item) => {
            const { id, name, img } = item;
            // console.log(id, name, img);
            return (
              <div
                key={id}
                onClick={() => addNewGoal(id)}
                style={{
                  background: `url(${img})`,
                  margin: "15px",
                  backgroundSize: "cover",
                }}
                className="box11 boxtext1"
              >
                <span>{name}</span>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
