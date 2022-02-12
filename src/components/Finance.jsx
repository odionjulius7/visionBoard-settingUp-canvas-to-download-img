import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { VisionContext } from "../VisionContext";
import DATA from "../Data.json";

export default function Finance() {
  return (
    <div>
      <main style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="board-goals-title box">
          {" "}
          <Link to="/board" className="back-link">
            <i class="fas fa-arrow-left"></i>
          </Link>{" "}
          <span>Finance</span>
        </div>

        <section className="border-goal-section">
          <div
            onClick={() => {
              addNewGoal(" Save More Money", "box11", "images/smm4.jpg");
            }}
            className="box11 boxtext1"
          >
            <span>Save More Money</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Start a business/side hustle",
                "box12",
                "images/hus.jpg"
              );
            }}
            className="box12 boxtext1"
          >
            <span>Start a business/side hustle</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "  Have a monthly budget",
                "box13",
                "images/Have a monthly budget.jpg"
              );
            }}
            className="box13 boxtext1"
          >
            <span>Have a monthly budget</span>
          </div>

          <div
            onClick={() => {
              addNewGoal("Invest more", "box14", "images/Invest more.jpg");
            }}
            className="box14 boxtext1"
          >
            <span>Invest more</span>
          </div>

          <div
            onClick={() => {
              addNewGoal(
                "Read finance books/blogs",
                "box15",
                "images/Read finance booksblogs.jpg"
              );
            }}
            className="box15 boxtext1"
          >
            <span>Read finance books/blogs</span>
          </div>
        </section>
      </main>
    </div>
  );
}
