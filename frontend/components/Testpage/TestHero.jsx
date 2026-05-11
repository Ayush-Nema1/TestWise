"use client";

import {
  Search,
  MapPin,
  Grid2x2,
  Activity,
  Droplet,
  Heart,
  FlaskConical,
  UserRound,
} from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "All Tests", icon: Grid2x2 },
  { name: "Full Body", icon: Activity },
  { name: "Vitamins", icon: Droplet },
  { name: "Diabetes", icon: FlaskConical },
  { name: "Heart", icon: Heart },
  { name: "Thyroid", icon: Activity },
  { name: "Women's Health", icon: UserRound },
];

export default function TestTop() {
  return (
    <section className="w-full bg-[#f6f8fc] border-b border-[#e6eef8]">

      <div className="max-w-[1180px] mx-auto px-6 py-3">

        {/* TOP ROW */}
        <div className="flex items-center  gap-4">

          {/* TITLE */}
          <h1 className="text-[16px] font-semibold text-gray-800 whitespace-nowrap">
            Find the right test
          </h1>

          {/* SEARCH */}
          <div className="flex-1 flex items-center bg-white rounded-lg border border-[#e3ebf5] h-[38px] shadow-[0_2px_6px_rgba(0,0,0,0.04)] max-w-[680px] transition-all focus-within:border-[#1d6fce] focus-within:shadow-[0_3px_10px_rgba(29,111,206,0.12)]">

            <div className="pl-3 text-gray-400">
              <Search className="w-3.5 h-3.5" />
            </div>

            <input
              placeholder="Search tests, symptoms or packages..."
              className="flex-1 px-2 text-[12.5px] outline-none bg-transparent "
            />

            <button className="flex items-center gap-1 px-3 h-full text-[#1d6fce] border-l border-[#edf2f7] text-[12px] hover:bg-[#f5f9ff] transition">
              <MapPin className="w-3.5 h-3.5" />
              Near Me
            </button>

            <button className="bg-[#2b6cb0] hover:bg-[#245a95] text-white px-5 h-full text-[12.5px] font-medium rounded-r-lg transition">
              Search
            </button>
          </div>

        
        </div>

        {/* CATEGORIES */}
        <div className="flex items-center gap-2.5 mt-3 overflow-x-auto">

          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <div
                key={i}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[12px] cursor-pointer whitespace-nowrap transition-all
                ${
                  i === 0
                    ? "bg-[#1d6fce] text-white shadow-sm"
                    : "bg-white border border-[#e6eef8] text-gray-700 hover:bg-[#f1f5f9]"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    i === 0 ? "text-white" : "text-gray-500"
                  }`}
                />
                {cat.name}
              </div>
            );
          })}

          {/* MORE */}
          <div className="ml-1 text-gray-500 text-[12px] cursor-pointer hover:text-black">
            More →
          </div>

        </div>

      </div>
    </section>
  );
}