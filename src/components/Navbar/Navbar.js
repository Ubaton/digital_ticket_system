import {
  Contact,
  Home,
  Scissors,
  Star,
  X,
  Menu,
  TicketIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoTop from "../assets/images/Logotop.png";
import Cart from "../assets/icons/haircut.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-800 rounded-b-lg p-4 z-10 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center w-20 ">
          <Link to="/">
            <img src={LogoTop} alt="BarberShop" />
          </Link>
        </div>

        {/* Mobile Menu Button (hidden on desktop) */}
        <div className="block sm:hidden">
          <div className="flex flex-row">
            <Link
              to="#"
              className="text-customColor-colortext hover:text-gray-300"
            >
              <img src={Cart} alt="" className="mr-2 w-6 h-6" />
            </Link>
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {isOpen ? (
                <X className="text-customColor-colortext" />
              ) : (
                <Menu className="text-customColor-colortext" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden sm:flex space-x-4">
          <Link
            to="/"
            className="text-customColor-colortext hover:text-customColor-hover"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-customColor-colortext hover:text-customColor-hover"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-customColor-colortext hover:text-customColor-hover"
          >
            About
          </Link>
          <Link
            to="/ticket"
            className="text-customColor-colortext hover:text-customColor-hover"
          >
            Ticket
          </Link>
          <Link
            to="/contact"
            className="text-customColor-colortext hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="text-customColor-colortext hover:text-gray-300"
          >
            <img src={Cart} alt="" className="mr-2 w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu (shown on mobile when the button is clicked) */}
      {isOpen && (
        <div className="sm:hidden mt-2">
          <Link to="/" className="block text-customColor-colortext py-2">
            <span className="flex">
              <Home className="mr-2" />
              Home
            </span>
          </Link>
          <Link
            to="/services"
            className="block text-customColor-colortext py-2"
          >
            <span className="flex">
              <Scissors className="mr-2" /> Services
            </span>
          </Link>
          <Link to="/about" className="block text-customColor-colortext py-2">
            <span className="flex">
              <Star className="mr-2" />
              About
            </span>
          </Link>
          <Link
            to="/ticket"
            className="text-customColor-colortext hover:text-customColor-hover"
          >
            <span className="flex">
              <TicketIcon className="mr-2" />
              Ticket
            </span>
          </Link>
          <Link to="/contact" className="block text-customColor-colortext py-2">
            <span className="flex">
              <Contact className="mr-2" /> Contact
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
