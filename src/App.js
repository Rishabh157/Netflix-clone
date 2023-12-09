import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRegister from './components/Pages/HomeRegister';
import Login from './components/Pages/Login';
import Browse from './components/Pages/Browse';
import SingleWatchPage from './components/Pages/SingleWatchPage';
import YourAccount from "./components/Pages/YourAccount";
import Person from './components/Pages/Person';
import FilterScreen from './components/Pages/FilterScreen';

const MainIndexPaths = [
  '/',
  '/signup/registration',
  '/signup/regform',
  '/signup',
  '/signup/planform',
  '/signup/paymentPicker',
  '/signup/creditoption',
]

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {MainIndexPaths?.map((path, index) => <Route path={path} key={index} element={<HomeRegister />} />)}
        <Route path='/login' element={<Login />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/account' element={<YourAccount />} />
        <Route path='/watch/:id' element={<SingleWatchPage />} />
        <Route path='/browse/:filterName' element={<FilterScreen />} />
        <Route path='/person/:id/:name' element={<Person />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
