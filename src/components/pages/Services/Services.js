import React, { useState } from "react";
import DateSelection from "../../Selection/DateSelection";
import TimeSelection from "../../Selection/TimeSelection";
import haircutData from "./Dataservices";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Services = () => {
  const { haircutStylesData, setHaircutStylesData } = haircutData;
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const handleDateChange = (date, haircutId) => {
    setHaircutStylesData((prevStyles) =>
      prevStyles.map((style) =>
        style.id === haircutId ? { ...style, date } : style
      )
    );
  };

  const handleTimeChange = (time, haircutId) => {
    setHaircutStylesData((prevStyles) =>
      prevStyles.map((style) =>
        style.id === haircutId ? { ...style, time } : style
      )
    );
  };

  // Function to filter haircut styles based on the search query
  const filteredStyles = haircutStylesData.filter((style) =>
    style.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-primary overflow-y-auto max-h-screen">
      <Navbar />
      <div className="container py-24 mx-auto p-4 overflow-y-auto relative">
        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search Haircuts"
            className="w-full  px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 sticky top-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-3 top-2">
            <Search size={24} color="#999" />
          </div>
        </div>

        {/* Haircut Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-customColor-colortext">
          {filteredStyles.map((style) => (
            <div
              key={style.id}
              className={`${
                style.name.toLowerCase().includes(searchQuery.toLowerCase())
                  ? ""
                  : ""
              } bg-customColor-cardcolor p-4 rounded-lg shadow-lg  transition duration-300`}
            >
              <h2 className="text-2xl text-customColor-colortext font-semibold mb-2">
                {style.name}
              </h2>
              <p className=" text-customColor-colortext ">
                {style.description}
              </p>
              <div className="flex items-center justify-center ">
                {" "}
                <img
                  src={style.image}
                  alt={style.name}
                  className="p-2 w-20 h-auto"
                />
              </div>

              {/* Date and Time Selection */}
              <DateSelection
                selectedDate={style.date}
                onSelectDate={(date) => handleDateChange(date, style.id)}
              />
              <TimeSelection
                selectedTime={style.time}
                onSelectTime={(time) => handleTimeChange(time, style.id)}
              />
              <div className="flex-row items-center justify-center inline-flex py-2">
                <Link to="/ticket">
                  <button
                    // onClick={() => /* Add your booking logic here */}
                    className="bg-customColor-action hover:bg-customColor-hover text-white  py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300"
                  >
                    Book Now
                  </button>
                </Link>
                <span className="text-2xl pl-14">R{style.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {filteredStyles.map((style) => (
        <Link
          key={style.id}
          to={`/services/${style.id}`} // Link to the specific haircut style
          className="block text-customColor-colortext py-2"
        ></Link>
      ))}
    </div>
  );
};

export default Services;
