import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataProvider from './data/DataProvider';
import Main from './components/main/Main';
import Layout from './components/main/Layout';
import TodaysDetails from './components/todaysweather/TodaysDetails';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='/weather-details' element={<TodaysDetails />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;

