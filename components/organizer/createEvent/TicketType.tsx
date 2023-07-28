import React from "react";

export const TicketType = () => {
  return (
    <div className="flex gap-1">
      <div className="w-3/5">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Ticket Name
        </label>
        <input
          className="input-validated w-full"
          type="text"
          placeholder="Enter Event Venue"
        />
      </div>
      <div className="w-2/5">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Price
        </label>
        <input
          className="input-validated w-full"
          type="text"
          placeholder="Enter Event Venue"
        />
      </div>
    </div>
  );
};
