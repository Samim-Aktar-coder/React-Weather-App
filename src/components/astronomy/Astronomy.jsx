import React, { useContext } from "react";
import "./astronomy.css";
import { DataContext } from "../../data/DataProvider";
import { BsFillCloudMoonFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { IoPartlySunnySharp } from "react-icons/io5";

function Astronomy() {
  const { state } = useContext(DataContext);

  if (state.data.forecast) {
    var todayAstronomy = state.data.forecast.forecastday[0].astro;
  }

  return (
    state.data.forecast && (
      <div className='astronomy-container'>
        <div className='astronomy-item'>
          <h3>Sunrise & Sunset</h3>
          <div className='astronomy-data'>
            <div>
              <IoMdSunny />
              <p>{todayAstronomy.sunrise}</p>
            </div>
            <div>
              <IoPartlySunnySharp />
              <p>{todayAstronomy.sunset}</p>
            </div>
          </div>
        </div>
        <div className='astronomy-item'>
          <h3>Moonrise & Moonset</h3>
          <div className='astronomy-data'>
            <div>
              <BsFillMoonStarsFill />
              <p>{todayAstronomy.moonrise}</p>
            </div>
            <div>
              <BsFillCloudMoonFill />
              <p>{todayAstronomy.moonset}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Astronomy;
