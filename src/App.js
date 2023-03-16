import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './components/Pages/Browse';
import YourAccount from "./components/Pages/YourAccount";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='/YourAccount' element={<YourAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
