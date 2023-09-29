import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Checkout = ({ selectedHaircut, totalPrice }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
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
      <div className="flex flex-col items-center justify-center pt-20 w-full overflow-y-auto h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-4 p-4">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <h3 className="text-lg font-semibold mb-2">Selected Item:</h3>
            <p>
              {selectedHaircut ? (
                <span>
                  {selectedHaircut.name} - {selectedHaircut.price} R
                </span>
              ) : (
                "No item selected"
              )}
            </p>
            <p className="text-lg font-semibold mt-4">
              Total Price: {totalPrice} R
            </p>
          </div>
          <div className="mt-4 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Shipping Information:
            </h3>
            <form>
              <div className="mb-4">
                <label className="block border-customColor-colortext text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block border-customColor-colortext text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block border-customColor-colortext text-sm font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block border-customColor-colortext text-sm font-bold mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 transition duration-300"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
