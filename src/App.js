import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataProvider from './data/DataProvider';
import Main from './components/main/Main';
import Layout from './components/main/Layout';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;


// https://api.weatherapi.com/v1/forecast.json?key=eeb723d55d594056a3a165917232508&q=mumbai&days=8&aqi=yes