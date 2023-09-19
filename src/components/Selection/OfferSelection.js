import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Scissors } from "lucide-react";

const OfferSelection = ({ selectedOffer, onSelectOffer }) => {
  const [offers] = useState([
    {
      id: 1,
      name: "Standard Haircut",
      price: 30,
      description: "Basic haircut package",
    },
    {
      id: 2,
      name: "Premium Haircut",
      price: 40,
      description: "Premium haircut package with additional services",
    },
    {
      id: 3,
      name: "Deluxe Haircut",
      price: 50,
      description: "Luxurious haircut package with exclusive treatments",
    },
  ]);

  return (
    <div className="bg-primary h-screen">
      <Navbar />
      <div className="container py-24 mx-auto text-customColor-colortext">
        <h2 className="text-2xl font-semibold mb-4 m-4 ">Select an Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => onSelectOffer(offer)}
              className={`${
                selectedOffer && selectedOffer.id === offer.id
                  ? "border-4 border-amber-500"
                  : ""
              } bg-customColor-cardcolor p-4 rounded-lg shadow-lg cursor-pointer transition duration-300`}
            >
              <span className="flex flex-row items-center justify-center space-x-2">
                <h3 className="text-xl font-semibold">{offer.name}</h3>
                <Scissors />
              </span>
              <p className="">Price: ${offer.price}</p>
              {selectedOffer && selectedOffer.id === offer.id && (
                <div className="mt-4">
                  <p className="font-semibold">Description:</p>
                  <p>{offer.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSelection;
