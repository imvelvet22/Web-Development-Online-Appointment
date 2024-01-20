import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/header/Services";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";



function App() {
  return (
    <div className ="App">
      

      <Router>
        <Header />
        <Slider/>
        <Routes>
          <Route path="/about" element={<Hero />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      
      </Router>
 
    </div>
  );
}

export default App;