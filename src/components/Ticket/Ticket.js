import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Ticket = ({ selectedHaircut }) => {
  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="flex flex-col space-y-2 justify-center items-center h-screen">
        <div className="bg-customColor-cardcolor text-customColor-colortext border border-gray-700 rounded-lg p-6 shadow-lg m-4">
          <h1 className="text-xl font-bold mb-4">Your Ticket</h1>
          {selectedHaircut ? (
            <div>
              <p>Name: {selectedHaircut.name}</p>
              <p>Description: {selectedHaircut.description}</p>
              <p>Date: {selectedHaircut.date}</p>
              <p>Time: {selectedHaircut.time}</p>
              <p>Price: R{selectedHaircut.price}</p>
            </div>
          ) : (
            <p>No haircut selected.</p>
          )}
          <div className="mt-4 text-sm">
            <p className="font-semibold">Confirmed On</p>
            Date: {new Date().toLocaleDateString()}
            <br />
            Time: {new Date().toLocaleTimeString()}
          </div>
        </div>
        <Link to="">
          <button className="bg-customColor-action hover:bg-customColor-hover text-white py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300">
            Confirm Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
