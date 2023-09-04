import React, { useContext } from "react";
import "./todaysWeather.css";
import { DataContext } from "../../data/DataProvider";
import { Tooltip } from "react-tooltip";

function DetailCard({ time, icon, weatherText, tempC, tempF }) {
  const { state } = useContext(DataContext);

  return (
    <div className='detail-card'>
      <p>{time}</p>
      <img
        src={icon}
        alt='weather-icon'
        data-tooltip-id='my-tooltip'
        data-tooltip-content={weatherText}
        data-tooltip-place='top'
      />
      <p>
        {state.tempUnit === "celcius" ? tempC : tempF}&#176;
        <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
      </p>
      <Tooltip
        id='my-tooltip'
        style={{
          backgroundColor: "#026a5f",
          color: "#fff",
          borderRadius: ".5rem",
        }}
      />
    </div>
  );
}

export default DetailCard;
