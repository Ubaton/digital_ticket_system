import React from "react";

const TimeSelection = ({ selectedTime, onSelectTime }) => {
  // Define the available time options
  const timeOptions = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="mt-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Time:
      </label>
      <select
        value={selectedTime || ""} // Ensure it's not null
        onChange={(e) => onSelectTime(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="">Select a time</option>
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelection;
