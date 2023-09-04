import React from "react";
import "../../App.css";
import TodaysWeather from '../todaysweather/TodaysWeather'
import CityImage from '../cityImage/CityImage'
import Forecast from '../forecast/Forecast'
import Astronomy from '../astronomy/Astronomy'

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
