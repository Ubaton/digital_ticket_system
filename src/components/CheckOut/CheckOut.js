import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleCheckout = async () => {
    // Validate and confirm booking time constraints here
    const isValidBookingTime = true; // Replace with your booking time validation logic

    if (isValidBookingTime) {
      try {
        // Prepare the order data to send to your backend (example)
        const orderData = {
          selectedHaircut, // The selected haircut data
          shippingInfo, // The shipping information
          totalPrice, // The total price
        };

        // Send a POST request to your backend to submit the order
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          // Order successfully submitted
          toast.success("Order placed successfully!");
          // Optionally, you can redirect the user to a thank-you page or clear the cart.
          // For example, you can use react-router to navigate:
          // useNavigate.push('/thankyou');
        } else {
          // Handle errors from the backend
          const errorData = await response.json();
          toast.error(`Error: ${errorData.message}`);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        toast.error(
          "An error occurred while processing your order. Please try again later."
        );
        console.error(error);
      }
    } else {
      // Display an error message using react-toastify.
      toast.error(
        "Booking time constraints not met. Please choose a valid time."
      );
    }
  };

  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 w-full overflow-y-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl bg-primary2 rounded-lg">
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
              Total Price: R {totalPrice}
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
