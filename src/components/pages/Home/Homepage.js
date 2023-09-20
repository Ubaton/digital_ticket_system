import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Homepage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col justify-center items-center h-full">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-4 md:gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-6xl text-customColor-colortext font-bold mb-2">
                Welcome to Our Barbershop
                <br />
                Cut your Hair with Pride
              </h1>
              <p className="text-lg text-zinc-50 text-left mb-8 pt-2">
                Choose from our haircut styles below:
              </p>
              <Link to="/services">
                <button className="w-full md:w-auto text-zinc-950 bg-customColor-action hover:bg-customColor-hover py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300">
                  Choose Haircut
                </button>
              </Link>
            </div>
            <div className="w-80 h-80 mx-auto md:ml-auto">
              <img src={Logo} alt="Logo" className="max-w-full" />
            </div>
          </div>
        </div>

        {/* Latest Offers Section */}
        <section className="bg-customColor-cardcolor w-full text-customColor-colortext p-4 rounded-lg shadow-lg mt-20 md:mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Latest Offers</h2>
          <p>Check out our special offers and promotions for a limited time.</p>
          <Link to="/offerselection" className="text-amber-500 hover:underline">
            View Offers
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
