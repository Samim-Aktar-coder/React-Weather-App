import React, { useContext } from "react";
import "./todaysWeather.css";
import { DataContext } from "../../data/DataProvider";
import DetailCard from "./DetailCard";

export default function TodaysWeather() {
  const { state } = useContext(DataContext);

  let location = state.data.location;
  let current = state.data.current;
  if (state.data.forecast) {
    var todayWeatherDetails = state.data.forecast.forecastday[0].hour;
  }

  return (
    location && (
      <div className='today-weather'>
        <div className='todays-weather-data'>
          <img
            src='//cdn.weatherapi.com/weather/64x64/day/119.png'
            alt='weather-img'
            className='weather-img'
          />
          <div className='weather-data-item'>
            <h2>{location.name}</h2>
            <p>{location.country}</p>
          </div>
          <div className='weather-data-item'>
            <h2>
              {state.tempUnit === "celcius" ? current.temp_c : current.temp_f}
              &#176;
              <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
            </h2>
            <p>Temperature</p>
          </div>
        </div>

        <div className='todays-weather-details'>
          {todayWeatherDetails.map((detail) => (
            <DetailCard
              key={detail.time}
              time={detail.time.slice(-5)}
              icon={detail.condition.icon}
              tempC={detail.temp_c}
              tempF={detail.temp_f}
            />
          ))}
        </div>
      </div>
    )
  );
}
