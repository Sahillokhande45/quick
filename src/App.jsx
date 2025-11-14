import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePages from "./pages/HomePages";
const App = () => {
  return (
   
       <div>
       
        <Navbar/>
       <Routes>
        <Route path="/" element={<HomePages/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Services />} />
        <Route path="/contact" element={< Features/>} />
        <Route path="/contact" element={< UsHealthCare/>} />
        <Route path="/contact" element={< Career/>} />
        <Route path="/contact" element={< Contact/>} /> */}
        
      </Routes>
    </div>
  );
};

export default App;
  