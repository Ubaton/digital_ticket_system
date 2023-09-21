import React from "react";
import Navbar from "../../Navbar/Navbar";

const About = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className="container py-24 mx-auto p-4 overflow-y-auto relative">
        <h1 className="text-3xl font-semibold text-customColor-colortext mb-4">
          About Our Hair Salon Booking App
        </h1>
        <p className="text-customColor-colortext mb-6">
          Welcome to our Hair Salon Booking App! We are excited to introduce you
          to our innovative application that makes booking haircuts a breeze.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="container">
            <h2 className="text-2xl font-semibold text-customColor-colortext mb-4">
              Features:
            </h2>
            <ul className="list-disc pl-6 text-customColor-colortext mb-6">
              <li>Discover a variety of haircut styles.</li>
              <li>Select your preferred haircut with date and time.</li>
              <li>View detailed information about each haircut style.</li>
              <li>Book your appointment with ease.</li>
              <li>Receive a digital ticket with your booking details.</li>
              <li>Confirm your booking with a single click.</li>
            </ul>
          </div>

          <div className="container">
            <h2 className="text-2xl font-semibold text-customColor-colortext mb-4">
              How to Use:
            </h2>
            <ol className="list-decimal pl-6 text-customColor-colortext mb-6">
              <li>Explore the list of available haircut styles.</li>
              <li>Click on a style to view its details.</li>
              <li>Select your preferred date and time for the appointment.</li>
              <li>Click the "Book Now" button to reserve your spot.</li>
              <li>Review your booking details on the digital ticket.</li>
              <li>Click "Confirm Booking" to finalize your appointment.</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-customColor-colortext mb-4">
          Contact Us:
        </h2>
        <p className="text-customColor-colortext mb-6">
          If you have any questions, feedback, or need assistance, please feel
          free to contact our customer support team. We are here to help you!
        </p>

        <p className="text-customColor-colortext">
          Thank you for choosing our Hair Salon Booking App. We look forward to
          providing you with the best haircut experience.
        </p>
      </div>
    </div>
  );
};

export default About;
