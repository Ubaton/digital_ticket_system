import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Services from "./components/pages/Services/Services";
import Ticket from "./components/Ticket/Ticket";
import OfferSelection from "./components/Selection/OfferSelection";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Checkout from "./components/CheckOut/CheckOut";

const App = () => {
  // Define state to hold the selected offer
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Define onSelectOffer function to handle the selected offer
  const onSelectOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const selectedItems = [];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/ticket"
          element={<Ticket selectedHaircut={selectedOffer} />} // Pass selectedOffer as a prop to Ticket
        />
        <Route
          path="/offerselection"
          element={<OfferSelection onSelectOffer={onSelectOffer} />}
        />
        <Route
          path="/checkout"
          element={<Checkout selectedItems={selectedItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
