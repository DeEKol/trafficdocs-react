import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Counterparty from '../pages/Counterparty';
import Docs from '../pages/Docs';
import Trip from '../pages/Trip';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} key="/about" />
      <Route path='/counterparty' element={<Counterparty />} key="/counterparty" />
      <Route path='/trip' element={<Trip />} key="/trip" />
      <Route path='/docs' element={<Docs />} key="/docs" />
    </Routes>
  )
}

export default AppRouter;