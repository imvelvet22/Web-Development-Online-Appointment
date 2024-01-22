import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/header/Services";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import AppointmentTab from './components/header/Appointment';
import Virtual from "./components/Virtual/Virtual";
import Last from "./components/Last/Last";



function App() {
  return (
    <div className ="App">
      

      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/about" element={<Hero/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<AppointmentTab />} />
        </Routes>
        <Virtual/>
        <Last />
        
      </Router>
 
    </div>
  );
}

export default App;