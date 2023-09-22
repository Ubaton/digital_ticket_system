import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Award from "../assets/icons/Award.png";
import { useLocation } from "react-router-dom";
// import TicketElements from "./TicketelElments";

const Ticket = () => {
  const location = useLocation();
  const selectedHaircut = location.state && location.state.selectedHaircut;

  if (!selectedHaircut) {
    return (
      <div className="bg-primary overflow-y-auto max-h-screen">
        <Navbar />
        <div className="flex flex-col space-y-2 justify-center items-center h-screen">
          <div className="pt-2">
            <div className=" relative bg-customColor-cardcolor h-72 w-[17.2rem] text-customColor-colortext p-6 shadow-lg m-4">
              <span>
                <h1 className="flex flex-row items-center gap-4 text-4xl font-bold mb-4">
                  Your Ticket <img className="w-8" src={Award} alt="Award" />
                </h1>
              </span>
              <div className="border-2 border-dashed border-customColor-colortext"></div>
              <p>No haircut selected.</p>
              <div className="border-2 border-dashed border-customColor-colortext"></div>
              <div className="mt-4 text-sm">
                <p className="font-semibold">Confirmed On</p>
                Date: {new Date().toLocaleDateString()}
                <br />
                Time: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* <div className="absolute flex flex-row items-center justify-center pr-12 rotate-90">
            <TicketElements count={11} />
          </div> */}

          <Link to="/services">
            <button className="bg-customColor-action hover:bg-customColor-hover text-zinc-700 py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300">
              Go Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Display the selected haircut data if it is selected
  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="flex flex-col space-y-2 justify-center items-center h-screen">
        <div className="relative bg-customColor-cardcolor text-customColor-colortext p-6 shadow-lg m-4">
          <span>
            <h1 className="flex flex-row items-center gap-4 text-4xl font-bold mb-4">
              Your Ticket <img className="w-8" src={Award} alt="Award" />
            </h1>
          </span>
          <div className="border-2 border-dashed border-customColor-colortext"></div>
          <div className="p-4">
            <p>Name: {selectedHaircut.name}</p>
            <p>Description: {selectedHaircut.description}</p>
            <p>Date: {selectedHaircut.date}</p>
            <p>Time: {selectedHaircut.time}</p>
            <p>Price: R{selectedHaircut.price}</p>
          </div>
          <div className="border-2 border-dashed border-customColor-colortext"></div>
          <div className="mt-4 text-sm">
            <p className="font-semibold">Confirmed On</p>
            Date: {new Date().toLocaleDateString()}
            <br />
            Time: {new Date().toLocaleTimeString()}
          </div>
          {/* <div className="absolute flex flex-row items-center justify-center pr-12 rotate-90">
            <TicketElements count={11} />
          </div> */}
        </div>
        <Link to="/services">
          <button className="bg-customColor-action hover:bg-customColor-hover text-zinc-700 py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300">
            Confirm Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
