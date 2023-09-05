import React, { useContext } from "react";
import "./todaysWeather.css";
import { DataContext } from "../../data/DataProvider";
import DetailCard from "./DetailCard";
import MyLoader from "../../data/ContentLoader";
import { TfiMoreAlt } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

export default function TodaysWeather() {
  const { state } = useContext(DataContext);

  let location = state.data.location;
  let current = state.data.current;
  if (state.data.forecast) {
    var todayWeatherDetails = state.data.forecast.forecastday[0].hour;
  }

  return (
    <>
      {location ? (
        <div className='today-weather'>
          <div className='todays-weather-data'>
            <img
              src={current.condition.icon}
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
            <Link to='/weather-details'>
              <TfiMoreAlt
                data-tooltip-id='more'
                data-tooltip-content='More about todays weather'
                data-tooltip-place='top'
              />
            </Link>

            <Tooltip
              id='more'
              style={{
                backgroundColor: "#00ab9a",
                color: "#fff",
                borderRadius: ".5rem",
              }}
            />
          </div>

          <div className='todays-weather-details'>
            {todayWeatherDetails.map((detail) => (
              <DetailCard
                key={detail.time}
                time={detail.time.slice(-5)}
                weatherText={detail.condition.text}
                icon={detail.condition.icon}
                tempC={detail.temp_c}
                tempF={detail.temp_f}
              />
            ))}
          </div>
        </div>
      ) : (
        <MyLoader />
      )}
    </>
  );
}
