import React from "react";
import Home from "./components/Home";
import Course from "./components/Course";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
 

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
