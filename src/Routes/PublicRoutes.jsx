import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/home/Home';
import Account from '../Components/Account';
import Dashboard from '../Components/Dashboard';
import Service from '../Pages/Service';
import WhyUs from '../Pages/WhyUs';
import OurGoals from '../Pages/OurGoals';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account-page" element={<Account />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Service />} />
      <Route path="/why" element={<WhyUs />} />
      <Route path="/goals" element={<OurGoals />} />
    </Routes>
  );
}

export default PublicRoutes;
