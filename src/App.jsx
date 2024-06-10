import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import DogLibrary from "./pages/doglibrary/DogLibrary";
import RainyDays from "./pages/rainydays/Rainydays";
import ScienceMuseum from "./pages/csm/Csm";
import Footer from "./components/Footer";
import Weddingphotogr from "./pages/weddingphotogr/Weddingphotogr";
import Gavel from "./pages/gavel/Gavel";
import Holidaze from "./pages/holidaze/Holidaze";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doglibrary" element={<DogLibrary />} /> 
          <Route path="/gavel" element={<Gavel />} /> 
          <Route path="/holidaze" element={<Holidaze />} /> 
          <Route path="/csm" element={<ScienceMuseum />} />
          <Route path="/Weddingphotogr" element={<Weddingphotogr/>} />
          <Route path="/rainydays" element={<RainyDays />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
