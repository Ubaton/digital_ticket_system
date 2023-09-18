import { CalendarDays } from "lucide-react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelection = ({ selectedDate, onSelectDate }) => {
  const handleDateChange = (date) => {
    onSelectDate(date); // Call the provided callback with the selected date
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Date :
      </label>
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-700"
          calendarClassName="absolute z-10 mt-2"
        />
        <span className="absolute right-2 top-2 text-gray-400">
          <CalendarDays className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default DateSelection;
