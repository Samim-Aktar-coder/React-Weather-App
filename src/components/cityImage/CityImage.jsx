import React, { useContext, useEffect, useState } from "react";
import "./cityImage.css";
import { DataContext } from "../../data/DataProvider";
import { createClient } from "pexels";

export default function CityImage() {
  const [cityImgUrl, setCityImgUrl] = useState("");
  const { state } = useContext(DataContext);

  let current = state.data.current;

  const imageApiKey = process.env.REACT_APP_CITY_IMAGE_API_KEY;

  const client = createClient(imageApiKey);
  let query = state.city;

  useEffect(() => {
    client.photos.search({ query }).then((photo) => {
      setCityImgUrl(
        photo.photos[Math.floor(Math.random() * photo.photos.length)].src.landscape
      );
    });
  }, [query]);


  return (
    current && (
      <div className='city-img'>
        <img src={cityImgUrl} alt='city-img' />
        <div className='city-weather-data'>
          <div className='city-weather-item'>
            <h4>Feels Like</h4>
            <p>
              {state.tempUnit === "celcius"
                ? current.feelslike_c
                : current.feelslike_f}
              &#176;
              <span>{state.tempUnit === "celcius" ? "C" : "F"}</span>
            </p>
          </div>
          <div className='city-weather-item'>
            <h4>Wind Speed</h4>
            <p>{current.wind_kph}km/h</p>
          </div>
          <div className='city-weather-item'>
            <h4>Cloud</h4>
            <p>{current.cloud}%</p>
          </div>
          <div className='city-weather-item'>
            <h4>Humidity</h4>
            <p>{current.humidity}%</p>
          </div>
        </div>
      </div>
    )
  );
}
