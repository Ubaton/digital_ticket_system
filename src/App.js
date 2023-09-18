import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Services from "./components/pages/Services/Services";
import Ticket from "./components/Ticket/Ticket";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export default App;
