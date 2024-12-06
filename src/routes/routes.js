import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Projects from "../pages/Projects/Projects.js";
import Experiences from "../pages/Experiences/Experiences.js"

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
