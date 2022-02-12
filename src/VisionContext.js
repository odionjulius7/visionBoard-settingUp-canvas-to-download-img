import React, { useState, createContext, useEffect } from "react";
import DATA from "./Data.json";

export const VisionContext = createContext();

const getLocalStorage = () => {
  let goals = localStorage.getItem("goals");
  if (goals) {
    // check to see if it has value // if yes return the value
    return (goals = JSON.parse(localStorage.getItem("goals")));
    // parse the json vale we get for web use
  } else {
    // if not return an empty array
    return [];
  }
};

const getLocalStorageName = () => {
  let name = localStorage.getItem("name");
  if (name) {
    // check to see if it has value // if yes return the value
    return (name = JSON.parse(localStorage.getItem("name")));
    // parse the json vale we get for web use
  } else {
    // if not return an empty array
    return "";
  }
};

export const VisionContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(DATA);
  const [goals, setGoals] = useState(getLocalStorage());
  const [showbar, setShowbar] = useState(true);
  // const [user, setUser] = useState({});

  const [name, setName] = useState(getLocalStorageName());
  const [email, setEmail] = useState("");

  // const addGoals = (id) => console.log(`hey you click on id: ${data.id}`);

  // const addGoals = (id) => {
  //   let nobj = findGoals(id);
  //   let arr = goals.concat(nobj);
  //   setGoals(arr);
  // };

  // const addUser = (name, email) => {
  //   setUser({ email: email, name: name });
  // };

  // console.log(user);

  const findGoals = (id) => {
    const newgoal = data[count].find((item) => item.id === id);
    return newgoal;
  };

  const addGoals = (id) => {
    let tempData = [...data[count]];
    const index = tempData.indexOf(findGoals(id));
    const singleGoal = tempData[index];
    setGoals([...goals, singleGoal]);
    // console.log(singleGoal);
    // console.log(goals);
  };

  const removeGoal = (id) => {
    const newGoals = goals.filter((item) => item.id !== id);
    setGoals(newGoals);
  };

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
    // the name of our array is goals and need to be stringify for JSON uuse
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    // the name of our array is goals and need to be stringify for JSON uuse
  }, [name]);

  return (
    <VisionContext.Provider
      value={{
        showbar,
        setShowbar,
        name,
        email,
        setName,
        setEmail,
        removeGoal,
        count,
        setCount,
        data,
        setData,
        goals,
        setGoals,
        addGoals,
      }}
    >
      {props.children}
    </VisionContext.Provider>
  );
};
