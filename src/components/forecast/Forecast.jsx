import React, { useContext, useState } from "react";
import "./forecast.css";
import { DataContext } from "../../data/DataProvider";
import { Tooltip } from "react-tooltip";

export default function Forecast() {
  const [days, setDays] = useState("");
  const { state } = useContext(DataContext);

  if (state.data.forecast) {
    var threeDaysForecast = state.data.forecast.forecastday.slice(1, 4);
    var sevnDaysForecast = state.data.forecast.forecastday.slice(1, 8);
  }

  const toggleDays = () => {
    if (days === "") {
      setDays("seven");
    } else {
      setDays("");
    }
  };

  return (
    state.data.forecast && (
      <div className='forecast-container'>
        <div className='forecast-heading'>
          <h2>Forecast</h2>
          <div className={`toggle-days ${days}`} onClick={toggleDays}>
            <p>3 days</p>
            <p>7 days</p>
            <span></span>
          </div>
        </div>

        <div className='forecast-list'>
          {days === ""
            ? threeDaysForecast.map((day) => (
                <div className='forecast-day' key={day.date}>
                  <div className='forecast-day-left'>
                    <img
                      src={day.day.condition.icon}
                      alt='weather-icon'
                      data-tooltip-id='my-tooltip'
                      data-tooltip-content={day.day.condition.text}
                      data-tooltip-place='top'
                    />
                    <Tooltip />
                    <p>
                      {state.tempUnit === "celcius"
                        ? day.day.avgtemp_c
                        : day.day.avgtemp_f}
                      &#176;
                      <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
                    </p>
                    <p className='slash'>/</p>
                    <p>{day.day.avghumidity}%</p>
                  </div>

                  <div className='forecast-day-right'>
                    <p>{day.date}</p>
                  </div>
                </div>
              ))
            : sevnDaysForecast.map((day) => (
                <div className='forecast-day' key={day.date}>
                  <div className='forecast-day-left'>
                    <img
                      src={day.day.condition.icon}
                      alt='weather-icon'
                      data-tooltip-id='my-tooltip'
                      data-tooltip-content={day.day.condition.text}
                      data-tooltip-place='top'
                    />
                    <Tooltip />
                    <p>
                      {state.tempUnit === "celcius"
                        ? day.day.avgtemp_c
                        : day.day.avgtemp_f}
                      &#176;
                      <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
                    </p>
                    <p className='slash'>/</p>
                    <p>{day.day.avghumidity}%</p>
                  </div>

                  <div className='forecast-day-right'>
                    <p>{day.date}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    )
  );
}
