import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import "./header.css";
import profileImg from "../../img/profile.jpg";

export default function Header() {
  const [theme, setTheme] = useState("");
  const [tempUnit, setTempUnit] = useState("");

  let dateObj = new Date();
  let dayIndex = dateObj.getDay();
  let date = dateObj.getDate();
  let monthIndex = dateObj.getMonth();
  let year = dateObj.getFullYear();

  let daysList = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  let monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = daysList[dayIndex];
  let month = monthsList[monthIndex];

  const toggleTheme = () => {
    if (theme === "") {
      setTheme("light");
    } else {
      setTheme("");
    }
  };
  const toggleTempUnit = () => {
    if (tempUnit === "") {
      setTempUnit("fahrenheit");
    } else {
      setTempUnit("");
    }
  };

  return (
    <div className='header'>
      <div className='left'>
        <div className='profile'>
          <img src={profileImg} alt='' className='profile-img' />
          <div className='profile-data'>
            <p>Hi Everybody</p>
            <h3>
              {day}, {date} {month}, {year}
            </h3>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='input-control'>
          <input type='search' className='input' placeholder='Search city' />
          <FiSearch />
        </div>

        <div className={`toggle-theme ${theme}`} onClick={toggleTheme}>
          <FaSun />
          <BsMoonStarsFill />
        </div>

        <div
          className={`toggle-temp-unit ${tempUnit}`}
          onClick={toggleTempUnit}
        >
          <p>C&#176;</p>
          <p>F&#176;</p>
          <span></span>
        </div>
      </div>
    </div>
  );
}
