import { CalendarDays } from "lucide-react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelection = ({ selectedDate, onSelectDate }) => {
  const handleDateChange = (date) => {
    onSelectDate(date.toLocaleDateString());
  };

  return (
    <div className="mb-4">
      <label className="block text-customColor-colortext  text-sm font-bold mb-2">
        Select Date :
      </label>
      <div className="relative">
        <DatePicker
          selected={selectedDate || ""}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="w-full px-3 bg-primary3 py-2  border border-primary2 rounded-md focus:outline-none focus:ring focus:border-primary2 text-gray-700"
          calendarClassName="absolute z-10 mt-2"
        />
        <span className="absolute right-2 top-2">
          <CalendarDays className="text-customColor-colortext w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default DateSelection;
