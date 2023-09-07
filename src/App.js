import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataProvider from './data/DataProvider';
import {Main,Layout,TodaysDetails} from './components'

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

