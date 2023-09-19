import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const OfferSelection = ({ selectedOffer, onSelectOffer }) => {
  const [offers] = useState([
    { id: 1, name: "Standard Haircut", price: 30 },
    { id: 2, name: "Premium Haircut", price: 40 },
    { id: 3, name: "Deluxe Haircut", price: 50 },
  ]);

  return (
    <div className="bg-primary h-screen">
      <Navbar />
      <div className="container py-24 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Select an Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => onSelectOffer(offer)}
              className={`${
                selectedOffer && selectedOffer.id === offer.id
                  ? "border-4 border-amber-500"
                  : ""
              } bg-zinc-200 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300`}
            >
              <h3 className="text-xl font-semibold">{offer.name}</h3>
              <p className="text-gray-700">Price: ${offer.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSelection;
