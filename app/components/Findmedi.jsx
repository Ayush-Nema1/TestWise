"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function CompareMedicine() {
  const [query, setQuery] = useState("");

  const medicines = [
    { name: "Generic", price: 12 },
    { name: "Crocin", price: 25 },
    { name: "Calpol", price: 35 },
    { name: "Calpol", price: 35 },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col h-full">

      {/* Accent */}
      <div className="h-1 w-12 bg-green-500 rounded-full mb-4"></div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Find the best deals on your prescriptions.
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Find the best deals on your prescriptions.
      </p>

      {/* Search */}
      <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 mb-5 bg-white focus-within:ring-2 focus-within:ring-green-500">
        <Search className="text-gray-400 w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Search medicine..."
          className="outline-none w-full text-sm bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Prices */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {medicines.map((med, index) => (
          <div
            key={index}
            className={`rounded-xl py-3 px-2 text-center border transition ${
              index === 0
                ? "border-green-400 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <p className="text-base font-semibold text-green-600">
              ₹{med.price}
            </p>
            <p className="text-[11px] text-gray-500 mt-1 truncate">
              {med.name}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-auto bg-green-600 hover:bg-green-700 text-white w-full py-2.5 rounded-xl text-sm font-medium transition">
        View Best Price
      </button>
    </div>
  );
}