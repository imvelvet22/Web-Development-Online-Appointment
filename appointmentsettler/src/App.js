import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/header/Services";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import AppointmentTab from './components/header/Appointment';
import Slip from './components/header/slip'; // Make sure the path to slip.js is correct



function App() {
  return (
    <div className ="App">
      

      <Router>
        <Header />
        <Slider/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<AppointmentTab />} />
          <Route path="/slip" element={<Slip />} />
        </Routes>
      
      </Router>
 
    </div>
  );
}

export default App;