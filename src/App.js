import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Services from "./components/pages/Services/Services";
import Ticket from "./components/Ticket/Ticket";
import OfferSelection from "./components/Selection/OfferSelection";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

const App = () => {
  // Define onSelectOffer function here
  const onSelectOffer = (selectedOffer) => {
    // Handle the selected offer
    console.log("Selected Offer: ", selectedOffer);
    // You can perform any further actions here, such as updating state
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route
          path="/offerselection"
          element={<OfferSelection onSelectOffer={onSelectOffer} />} // Pass the onSelectOffer function to OfferSelection
        />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
