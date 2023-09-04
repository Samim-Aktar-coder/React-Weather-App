import React, { useContext } from "react";
import "./todaysDetails.css";
import { DataContext } from "../../data/DataProvider";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoArrowUndoSharp } from "react-icons/io5";
import { ImNotification } from "react-icons/im";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function TodaysDetails() {
  const { state } = useContext(DataContext);

  let currentDetails = state.data.current;
  if (state.data.forecast) {
    var todayWeatherDetails = state.data.forecast.forecastday[0].day;
  }

  return (
    state.data.forecast && (
      <div className='weather-details'>
        <Link
          to='..'
          data-tooltip-id='back-home'
          data-tooltip-content='Back to Home'
          data-tooltip-place='top'
        >
          <IoArrowUndoSharp className='back-to-home' />
        </Link>

        <Tooltip
          id='back-home'
          style={{
            backgroundColor: "#30302f",
            color: "#fff",
            borderRadius: ".5rem",
          }}
        />
        <div className='weather-details-item'>
          <h2>
            <BiSolidRightArrow /> General Information :
          </h2>
          <div className='details-container'>
            <div className='detail-item'>
              <p>
                <span>&#8226; Temperature:</span>{" "}
                {state.tempUnit === "celcius"
                  ? currentDetails.temp_c
                  : currentDetails.temp_f}
                &#176;
                <span>{state.tempUnit === "celcius" ? " C" : " F"}</span>
              </p>
              <p>
                <span>&#8226; Feels Like:</span>{" "}
                {state.tempUnit === "celcius"
                  ? currentDetails.feelslike_c
                  : currentDetails.feelslike_f}
                &#176;
                <span>{state.tempUnit === "celcius" ? " C" : " F"}</span>
              </p>
              <p>
                <span>&#8226; Wind Speed:</span> {currentDetails.wind_kph} km/h
              </p>
              <p>
                <span>&#8226; Pressure:</span> {currentDetails.pressure_mb} mb
              </p>
              <p>
                <span>&#8226; Humidity:</span> {currentDetails.humidity}%
              </p>
              <p>
                <span>&#8226; Cloud:</span> {currentDetails.cloud}%
              </p>
            </div>
            <div className='detail-item'>
              <p>
                <span>&#8226; Max. Temperature:</span>{" "}
                {state.tempUnit === "celcius"
                  ? todayWeatherDetails.maxtemp_c
                  : todayWeatherDetails.maxtemp_f}
                &#176;
                <span>{state.tempUnit === "celcius" ? " C" : " F"}</span>
              </p>
              <p>
                <span>&#8226; Min Temperature:</span>{" "}
                {state.tempUnit === "celcius"
                  ? todayWeatherDetails.mintemp_c
                  : todayWeatherDetails.mintemp_f}
                &#176;
                <span>{state.tempUnit === "celcius" ? " C" : " F"}</span>
              </p>
              <p>
                <span>&#8226; Avg. Temperature:</span>{" "}
                {state.tempUnit === "celcius"
                  ? todayWeatherDetails.avgtemp_c
                  : todayWeatherDetails.avgtemp_f}
                &#176;
                <span>{state.tempUnit === "celcius" ? " C" : " F"}</span>
              </p>
              <p>
                <span>&#8226; Avg. Wind Speed:</span>{" "}
                {todayWeatherDetails.maxwind_kph} km/h
              </p>
              <p>
                <span>&#8226; Avg. Humidity:</span>{" "}
                {todayWeatherDetails.avghumidity}%
              </p>
              <p>
                <span>&#8226; Weather Condition:</span>{" "}
                {todayWeatherDetails.condition.text}
              </p>
            </div>
          </div>
        </div>
        <div className='weather-details-item'>
          <h2>
            <BiSolidRightArrow /> Air Quality:
          </h2>
          <div className='details-container'>
            <div className='detail-item'>
              <p>
                <span>&#8226; Carbon Monoxide:</span>{" "}
                {currentDetails.air_quality.co} μg/m3
              </p>
              <p>
                <span>&#8226; Ozone:</span> {currentDetails.air_quality.o3}{" "}
                μg/m3
              </p>
              <p>
                <span>&#8226; Nitrogen dioxide:</span>{" "}
                {currentDetails.air_quality.no2} μg/m3
              </p>
              <p>
                <span>&#8226; Sulphur dioxide:</span>{" "}
                {currentDetails.air_quality.so2} μg/m3
              </p>
              <p>
                <span>&#8226; PM2.5:</span> {currentDetails.air_quality.pm2_5}{" "}
                μg/m3
              </p>
              <p>
                <span>&#8226; PM10:</span> {currentDetails.air_quality.pm10}{" "}
                μg/m3
              </p>
              <p className='air-quality'>
                <span>&#8226; Air Quality(US - EPA standard):</span>{" "}
                {currentDetails.air_quality["us-epa-index"]}{" "}
                <ImNotification />
                <div className='air-quality-info'>
                  <p>&#8226; 1 means Good</p>
                  <p>&#8226; 2 means Moderate</p>
                  <p>&#8226; 3 means Unhealthy for sensitive group</p>
                  <p>&#8226; 4 means Unhealthy</p>
                  <p>&#8226; 5 means Very Unhealthy</p>
                  <p>&#8226; 6 means Hazardous</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
