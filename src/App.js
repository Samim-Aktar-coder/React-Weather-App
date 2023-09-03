import './App.css';
import Header from './components/header/Header';
import TodaysWeather from './components/todaysweather/TodaysWeather';
import DataProvider from './data/DataProvider';
// import { createClient } from 'pexels';
// const client = createClient('GvRNfxvaY8yJdqSFPvICFLOrcgtMrKUn7vsR2RgaT8STXk6kUkLKtfPx');

// let query = 'mumbai';
// client.photos.search({ query }).then(photo => console.log(photo.photos[Math.floor(Math.random() * photo.photos.length)].src.landscape));

function App() {
  return (
    <DataProvider>

      <div className='container'>
        <Header />
        <div className="main">
          <div className="main-left">
            <TodaysWeather />
          </div>
          <div className="main-right"></div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
