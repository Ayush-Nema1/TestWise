"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function CompareMedicine() {
  const [query, setQuery] = useState("");

  const medicines = [
    { name: "Generic", price: 12, color: "text-green-600" },
    { name: "Crocin", price: 25, color: "text-blue-600" },
    { name: "Calpol", price: 35, color: "text-red-500" },
    { name: "Calpol", price: 35, color: "text-green-600" },
  ];

  return (
    <div className="w-full">
      
      {/* Top Accent (trust feel) */}
      <div className="h-1 w-10 bg-green-500 rounded-full mb-3"></div>

      {/* Title */}
      <h2 className="text-base font-semibold text-gray-800 mb-1">
        Compare Medicine Prices
      </h2>
      <p className="text-gray-500 text-xs mb-3">
        Find the best deals on your prescriptions.
      </p>

      {/* Search */}
      <div className="flex items-center border rounded-md px-2 py-1.5 mb-4 bg-gray-50">
        <Search className="text-gray-400 w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Search medicine..."
          className="outline-none w-full text-xs bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Prices */}
      <div className="grid grid-cols-4 gap-2 mb-4 text-center">
        {medicines.map((med, index) => (
          <div key={index}>
            <p className={`text-sm font-semibold ${med.color}`}>
              ₹{med.price}
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              {med.name}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-md text-xs font-medium transition">
        Compare Prices
      </button>
    </div>
  );
}