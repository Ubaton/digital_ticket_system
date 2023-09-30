import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Checkout = ({ selectedHaircut, totalPrice }) => {
  const [shippingInfo, setShippingInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleCheckout = () => {
    // Validate and confirm booking time constraints here
    const isValidBookingTime = true; // Replace with your booking time validation logic

    if (isValidBookingTime) {
      // Perform checkout logic, e.g., submit order, calculate total, etc.
      // You can implement this function based on your backend and business logic.
      // For now, we'll simply display a success message.
      alert("Order placed successfully!");
    } else {
      alert("Booking time constraints not met. Please choose a valid time.");
    }
  };

  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 w-full overflow-y-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto bg-primary2 rounded-lg">
          <div className="mt-4 p-4">
            <h2 className="text-4xl font-semibold mb-4 text-customColor-colortext">
              Checkout
            </h2>
            <h3 className="text-lg font-semibold mb-2 text-customColor-colortext">
              Selected Item:
            </h3>
            <p className="text-customColor-colortext">
              {selectedHaircut ? (
                <span>
                  {selectedHaircut.name} - {selectedHaircut.price} R
                </span>
              ) : (
                "No item selected"
              )}
            </p>
            <p className="text-lg font-semibold mt-4 text-customColor-colortext">
              Total Price: {totalPrice} R
            </p>
            <div className="pt-8">
              <button
                onClick={handleCheckout}
                className="w-full md:w-auto text-zinc-950 bg-customColor-action hover:bg-customColor-hover py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-700 transition duration-300"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h3 className="text-4xl font-semibold mb-2 text-customColor-colortext">
              Booking for:
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-customColor-colortext text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={shippingInfo.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-primary3 border border-primary2 rounded-md focus:outline-none focus:ring focus:border-primary2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-customColor-colortext text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={shippingInfo.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-primary3 border border-primary2 rounded-md focus:outline-none focus:ring focus:border-primary2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-customColor-colortext text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-primary3 border border-primary2 rounded-md focus:outline-none focus:ring focus:border-primary2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-customColor-colortext text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-primary3 border border-primary2 rounded-md focus:outline-none focus:ring focus:border-primary2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
