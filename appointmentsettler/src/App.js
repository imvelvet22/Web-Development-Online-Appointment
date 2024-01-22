import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/header/Services";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import AppointmentTab from './components/header/Appointment';
<<<<<<< HEAD
import Virtual from "./components/Virtual/Virtual";
import Last from "./components/Last/Last";


=======
import Slip from './components/header/slip'; // Make sure the path to slip.js is correct
>>>>>>> 64a198f75dfce5c3b64f9c58814105b9168b99ba



function App() {
  return (
    <div className ="App">
      

      <Router>
        <Header />
<<<<<<< HEAD
        <Hero />
        <Slider />
=======
        <Slider/>
>>>>>>> 64a198f75dfce5c3b64f9c58814105b9168b99ba
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<AppointmentTab />} />
          <Route path="/slip" element={<Slip />} />
        </Routes>
        <Virtual/>
        <Last />
        
      </Router>
 
    </div>
  );
}

export default App;