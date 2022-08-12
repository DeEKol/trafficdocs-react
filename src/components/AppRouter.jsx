import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Counterparty from '../pages/Counterparty';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} key="/about" />
      <Route path='/counterparty' element={<Counterparty />} key="/counterparty" />
    </Routes>
  )
}

export default AppRouter;