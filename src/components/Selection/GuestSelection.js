import React, { useState } from "react";

const GuestSelection = ({ selectedGuests, onSelectGuests }) => {
  const [guestOptions] = useState([1, 2, 3, 4, 5]); // Define the number of guests

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select Number of Guests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {guestOptions.map((guestCount) => (
          <div
            key={guestCount}
            onClick={() => onSelectGuests(guestCount)}
            className={`${
              selectedGuests === guestCount ? "border-4 border-amber-500" : ""
            } bg-zinc-200 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300`}
          >
            <h3 className="text-xl font-semibold">{guestCount} Guest(s)</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestSelection;
