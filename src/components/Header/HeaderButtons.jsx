import React from "react";
import { useState } from "react";
import LoginModal from "../Modals/PostNewNoteModal";
import { Link } from "react-router-dom";
const HeaderButtons = () => {
  let [toggleBtn_Flag, setToggleBtn_Flag] = useState("");
  const changeTheme = (number) => {
    const toggleBtn = document.querySelector(".toggle" + number);
    const AppBody = document.querySelector(".AppBody");
    const lightTheme = document.querySelector(
      ".togglePlace >.bi-brightness-high"
    );
    const darkTheme = document.querySelector(".togglePlace >.bi-moon");
    const togglePlace = document.querySelector(".togglePlace");
    toggleBtn.classList.toggle("active");
    if (toggleBtn_Flag == "light") {
      togglePlace.classList.remove("dark");
      AppBody.classList.remove("dark");
      lightTheme.classList.add("active");
      darkTheme.classList.remove("active");
      setToggleBtn_Flag("");
    } else if (toggleBtn_Flag != "light") {
      lightTheme.classList.remove("active");
      darkTheme.classList.add("active");
      togglePlace.classList.remove("dark");
      AppBody.classList.add("dark");
      setToggleBtn_Flag("light");
    }
  };
  return (
    <ul className="headerButtons col-lg-5 m-0 row justify-content-around justify-content-lg-around px-5 align-items-center">
      <li className="w-auto">
        <i className="bi bi-search"></i>
      </li>
      <li className="w-auto">
        <Link to={"/addNewNote"} className="pointer w-100 h-100 d-inline-block">Post New Note</Link>
      </li>

      <li className="w-auto">
        <Link to={"/admin"} className="pointer w-100 h-100 d-inline-block">Admin</Link>
      </li>
      <label className="w-auto togglePlace" id="toggle">
        <i className="bi bi-brightness-high active"></i>
        <input
          type="checkbox"
          htmlFor="toggle"
          className="toggle toggle1 toggleTheme"
          onClick={() => changeTheme(1)}
        />
        <i className="bi bi-moon"></i>
      </label>
    </ul>
  );
};

export default HeaderButtons;
