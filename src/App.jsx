import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePages from "./pages/HomePages";

import ServicesPages from "./pages/ServicesPages";
import UsHealthCarePages from "./pages/UsHealthCarePages";
import Careerpages from "./pages/Careerpages";

import AboutPages from "./pages/AboutPages";
import FeaturesPages from "./pages/FeaturesPages";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/features" element={<FeaturesPages />} />
        <Route path="/services" element={<ServicesPages />} />
        <Route path="/us-health-care" element={<UsHealthCarePages />} />
        <Route path="/career" element={<Careerpages />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
