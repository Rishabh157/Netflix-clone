import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRegister from './components/Pages/HomeRegister';

import Browse from './components/Pages/Browse';
import YourAccount from "./components/Pages/YourAccount";

const MainIndexPaths = ['/',
  '/signup/registration',
  'signup/regform',
  'signup',
  'signup/paymentPicker',
  'signup/creditoption',
]

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {MainIndexPaths?.map((path, index) => <Route path={path} key={index} element={<HomeRegister />} />)}
        <Route path='/browse' element={<Browse />} />
        <Route path='/YourAccount' element={<YourAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
