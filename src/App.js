import './App.css';
import CityImage from './components/cityImage/CityImage';
import Header from './components/header/Header';
import TodaysWeather from './components/todaysweather/TodaysWeather';
import DataProvider from './data/DataProvider';

function App() {
  return (
    <DataProvider>

      <div className='container'>
        <Header />
        <div className="main">
          <div className="main-left">
            <TodaysWeather />
            <CityImage />
          </div>
          <div className="main-right"></div>
        </div>
      </div>

    </DataProvider>
  );
}

export default App;


// https://api.weatherapi.com/v1/forecast.json?key=eeb723d55d594056a3a165917232508&q=mumbai&days=8&aqi=yes