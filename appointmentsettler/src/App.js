import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/header/Services';
import Products from './components/Products/Products'; // Update the path to your Products component
import "./App.css";
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import AppointmentTab from './components/header/Appointment';
<<<<<<< HEAD
import Virtual from './components/Virtual/Virtual';
import Last from './components/Last/Last';
import Slip from './components/header/slip';
=======
import Virtual from "./components/Virtual/Virtual";
import Last from "./components/Last/Last";


>>>>>>> 5d4731422ba313cb6df66982eb6316baa6d06f42

function App() {
  const isServicesRoute = window.location.pathname === '/services';

  return (
    <div className="App">
      <Router>
        <Header />
<<<<<<< HEAD
=======
        
>>>>>>> 5d4731422ba313cb6df66982eb6316baa6d06f42
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/about" element={<Hero/>} />
          <Route path="/services" element={<Services />} />
          {!isServicesRoute && <Route path="/products" element={<Products />} />}
          <Route path="/appointment" element={<AppointmentTab />} />
        </Routes>
        <Slider />
        <Virtual />
        <Last />
      </Router>
    </div>
  );
}

export default App;