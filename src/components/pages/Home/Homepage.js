import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Homepage = () => {
  return (
    <div className="bg-primary h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-24">
            <div>
              <h1 className="text-4xl text-customColor-colortext md:text-6xl text-left font-bold mb-2">
                Welcome to Our
                <br /> Barbershop Cut your Hair with
                <br />
                Pride
              </h1>
              <p className="text-lg text-zinc-50 text-left mb-8 pt-2">
                Choose from our haircut styles below:
              </p>
            </div>
            <div className="w-60 h-60">
              <img src={Logo} alt="Logo" className="max-w-full " />
            </div>
          </div>
        </div>

        <div className=" pt-20 ">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
            <Link to="/services">
              <button className="w-full md:w-auto text-zinc-950 bg-customColor-action hover:bg-customColor-hover py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border--700 transition duration-300">
                Choose Haircut
              </button>
            </Link>
          </div>

          {/* Latest Offers Section */}
          <section className=" bg-customColor-cardcolor text-customColor-colortext p-4 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold mb-2">Latest Offers</h2>
            <p>
              Check out our special offers and promotions for a limited time.
            </p>
            <Link
              to="/offerselection"
              className="text-amber-500 hover:underline"
            >
              View Offers
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
