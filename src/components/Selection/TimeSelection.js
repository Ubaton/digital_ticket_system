import React from "react";
import { Clock8 } from "lucide-react";

const TimeSelection = ({ selectedTime, onSelectTime }) => {
  const timeOptions = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ];

  // Sort the time options
  const sortedTimeOptions = timeOptions.sort();

  return (
    <div className="mt-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span className="flex items-center ">
          <Clock8 />
          <span className="px-2">Select Time:</span>
        </span>
      </label>
      <select
        value={selectedTime || ""}
        onChange={(e) => onSelectTime(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="">Select a time</option>
        {sortedTimeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelection;
