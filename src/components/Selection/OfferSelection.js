import React, { useState } from "react";
import { Scissors } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const OfferSelection = ({ onSelectOffer }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);

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
    {
      id: 4,
      name: "Gold Haircut",
      price: 60,
      description: "Gold-level haircut with extra pampering",
    },
    {
      id: 5,
      name: "Platinum Haircut",
      price: 70,
      description: "Platinum-level haircut with VIP treatment",
    },
    {
      id: 6,
      name: "Kids Haircut",
      price: 25,
      description: "Haircut for kids under 12 years old",
    },
    {
      id: 7,
      name: "Senior Haircut",
      price: 25,
      description: "Haircut for seniors aged 60 and above",
    },
    {
      id: 8,
      name: "Balayage & Haircut",
      price: 80,
      description: "Balayage coloring and haircut combo",
    },
    {
      id: 9,
      name: "Mens Grooming",
      price: 35,
      description: "Grooming and styling for men",
    },
    {
      id: 10,
      name: "Bridal Package",
      price: 120,
      description: "Complete bridal hair and makeup package",
    },
    {
      id: 11,
      name: "Hair Spa",
      price: 45,
      description: "Hair spa treatment for rejuvenation",
    },
    {
      id: 12,
      name: "Brazilian Blowout",
      price: 75,
      description: "Brazilian blowout for smooth and shiny hair",
    },
  ]);

  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="container py-24 mx-auto text-customColor-colortext">
        <h2 className="text-2xl font-semibold mb-4 m-4 ">Select an Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => {
                setSelectedOffer(offer);
                onSelectOffer(offer); // Call the onSelectOffer function when an offer is clicked
              }}
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
