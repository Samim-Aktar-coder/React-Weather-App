import React from "react";
import "../../App.css";
import { TodaysWeather, CityImage, Forecast, Astronomy } from "../";

export default function Main() {
  return (
    <div className='main'>
      <div className='main-left'>
        <TodaysWeather />
        <CityImage />
      </div>
      <div className='main-right'>
        {/* <Mapbox /> //! I will add it later. */}
        <Forecast />
        <Astronomy />
      </div>
    </div>
  );
}
