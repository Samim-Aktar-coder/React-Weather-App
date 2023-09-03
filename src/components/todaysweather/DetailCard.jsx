import React, { useContext } from "react";
import './todaysWeather.css'
import { DataContext } from "../../data/DataProvider";

function DetailCard({ time, icon, tempC, tempF }) {
  const { state } = useContext(DataContext);

  return (
    <div className='detail-card'>
      <p>{time}</p>
      <img src={icon} alt='weather-icon' />
      <p>
        {state.tempUnit === "celcius" ? tempC : tempF}&#176;
        <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
      </p>
    </div>
  );
}

export default DetailCard;
