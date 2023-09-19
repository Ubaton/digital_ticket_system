import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="flex flex-col space-y-2 justify-center items-center h-screen">
        <div className="bg-white border border-gray-400 rounded-lg p-6 shadow-lg m-4">
          <h1 className="text-xl font-bold mb-4">Your Ticket</h1>
          <div className="text-gray-700">
            {/* Your ticket content goes here */}
            <p>This is your ticket content.</p>
            <p>Feel free to add any details or information you want.</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p className=" font-semibold ">Confairmed On </p>
            Date: {new Date().toLocaleDateString()}
            <br />
            Time: {new Date().toLocaleTimeString()}
          </div>
        </div>
        <Link to="">
          <button className="bg-customColor-action hover:bg-customColor-hover text-white  py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300">
            Confairm Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
