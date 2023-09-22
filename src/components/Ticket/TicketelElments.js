import React from "react";

const TicketElements = ({ count }) => {
  const elements = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="bg-customColor-cardcolor w-6 h-6 rotate-45"
    ></div>
  ));

  return (
    <div className="absolute flex flex-row items-center space-x-[16rem]">
      <div className="container">{elements}</div>
      <div className="container">{elements}</div>
    </div>
  );
};

export default TicketElements;
