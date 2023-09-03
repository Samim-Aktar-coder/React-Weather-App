import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import "./header.css";
import profileImg from "../../img/profile.jpg";
import { DataContext } from "../../data/DataProvider";
import axios from "axios";

export default function Header() {
  const [city, setCity] = useState("Mumbai");
  const [theme, setTheme] = useState("");
  const [tempUnit, setTempUnit] = useState("");

  const { state, dispatch } = useContext(DataContext);

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
    let body = document.body;
    if (theme === "") {
      setTheme("light");
      body.classList.add("light");
    } else {
      setTheme("");
      body.classList.remove("light");
    }
  };
  const toggleTempUnit = () => {
    if (tempUnit === "") {
      setTempUnit("fahrenheit");
      dispatch({
        ...state,
        type: "FETCH_SUCCESS",
        payload: state.data,
        tempUnit: "fahrenheit",
      });
    } else {
      setTempUnit("");
      dispatch({
        ...state,
        type: "FETCH_SUCCESS",
        payload: state.data,
        tempUnit: "celcius",
      });
    }
  };


  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=eeb723d55d594056a3a165917232508&q=${city}&aqi=yes&days=8`
      )
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          city: city,
          tempUnit: state.tempUnit,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
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
        <form className='input-control' onSubmit={handleSubmit}>
          <input
            type='search'
            className='input'
            value={city}
            onChange={handleChange}
            placeholder='Search city'
          />
          <FiSearch type='submit' />
          <p className='err-msg'>{state.error ? state.error : ""}</p>
        </form>

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
