// import React, { useState, useEffect } from "react";

// const Checkout = ({ selectedItems }) => {
//   const [shippingInfo, setShippingInfo] = useState({
//     name: "",
//     address: "",
//     city: "",
//     postalCode: "",
//   });

//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     // Calculate total price based on selected items' prices
//     const calculateTotalPrice = () => {
//       const total = selectedItems.reduce((acc, item) => acc + item.price, 0);
//       return total;
//     };

//     setTotalPrice(calculateTotalPrice());
//   }, [selectedItems]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo({ ...shippingInfo, [name]: value });
//   };

//   const handleCheckout = () => {
//     // Validate and confirm booking time constraints here
//     const isValidBookingTime = true; // Replace with your booking time validation logic

//     if (isValidBookingTime) {
//       // Perform checkout logic, e.g., submit order, calculate total, etc.
//       // You can implement this function based on your backend and business logic.
//       // For now, we'll simply display a success message.
//       alert("Order placed successfully!");
//     } else {
//       alert("Booking time constraints not met. Please choose a valid time.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
//       <h3 className="text-lg font-semibold mb-2">Selected Items:</h3>
//       <ul>
//         {selectedItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.price} R
//           </li>
//         ))}
//       </ul>
//       <p className="text-lg font-semibold mt-4">Total Price: {totalPrice} R</p>
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Shipping Information:</h3>
//         <form>{/* Shipping info fields (same as previous code) */}</form>
//       </div>
//       <button
//         onClick={handleCheckout}
//         className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 transition duration-300"
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default Checkout;
