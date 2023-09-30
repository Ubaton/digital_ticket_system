import React, { useState } from "react";
import { Scissors } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const OfferSelection = ({ onSelectOffer }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const navigate = useNavigate();

  const [offers] = useState([
    {
      id: 1,
      name: "Classic Cut",
      description: "Timeless and versatile haircut.",
      date: null,
      time: null,
      price: 30,
    },
    {
      id: 2,
      name: "Premium Haircut",
      price: 40,
      date: null,
      time: null,
      description: "Premium haircut package with additional services",
    },
    {
      id: 3,
      name: "Deluxe Haircut",
      price: 50,
      date: null,
      time: null,
      description: "Luxurious haircut package with exclusive treatments",
    },
    {
      id: 4,
      name: "Gold Haircut",
      price: 60,
      date: null,
      time: null,
      description: "Gold-level haircut with extra pampering",
    },
    {
      id: 5,
      name: "Platinum Haircut",
      price: 70,
      date: null,
      time: null,
      description: "Platinum-level haircut with VIP treatment",
    },
    {
      id: 6,
      name: "Kids Haircut",
      price: 25,
      date: null,
      time: null,
      description: "Haircut for kids under 12 years old",
    },
    {
      id: 7,
      name: "Senior Haircut",
      price: 25,
      date: null,
      time: null,
      description: "Haircut for seniors aged 60 and above",
    },
    {
      id: 8,
      name: "Balayage & Haircut",
      price: 80,
      date: null,
      time: null,
      description: "Balayage coloring and haircut combo",
    },
    {
      id: 9,
      name: "Mens Grooming",
      price: 35,
      date: null,
      time: null,
      description: "Grooming and styling for men",
    },
    {
      id: 10,
      name: "Bridal Package",
      price: 120,
      date: null,
      time: null,
      description: "Complete bridal hair and makeup package",
    },
    {
      id: 11,
      name: "Hair Spa",
      price: 45,
      date: null,
      time: null,
      description: "Hair spa treatment for rejuvenation",
    },
    {
      id: 12,
      name: "Brazilian Blowout",
      price: 75,
      date: null,
      time: null,
      description: "Brazilian blowout for smooth and shiny hair",
    },
  ]);

  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);

    // Capture all the necessary data
    const bookingData = {
      selectedHaircut: offer,
      confirmedDate: new Date().toLocaleDateString(),
      confirmedTime: new Date().toLocaleTimeString(),
    };

    onSelectOffer(offer);

    // Pass the data to the Ticket component
    navigate("/ticket", { state: bookingData });
  };

  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="container py-24 mx-auto text-customColor-colortext">
        <h2 className="text-2xl font-semibold mb-4 m-4 ">Select an Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => handleSelectOffer(offer)}
              className={`${
                selectedOffer && selectedOffer.id === offer.id
                  ? "border-4 border-customColor-hover"
                  : ""
              } bg-customColor-cardcolor p-4 rounded-lg shadow-lg cursor-pointer transition duration-300`}
            >
              <span className="flex flex-row items-center justify-center space-x-2">
                <h3 className="text-xl font-semibold">{offer.name}</h3>
                <Scissors />
              </span>
              <p className="">Price: R {offer.price}</p>
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
