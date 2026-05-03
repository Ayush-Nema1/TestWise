"use client";

import { Star, Clock, ChevronRight } from "lucide-react";

export default function LabRow({ lab }) {
  return (
    <div className="flex items-center justify-between bg-[#f8fafd] rounded-lg px-4 py-3 border border-[#e4ecf5]">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-white border border-[#dde6f0] shadow-sm flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-bold text-[#1d6fce]">
            {lab.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-semibold text-gray-800">{lab.name}</p>
            {lab.best && (
              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md">
                Best Price
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-[12px] font-semibold text-gray-700">{lab.rating}</span>
            <span className="text-gray-300 text-xs">·</span>
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-[12px] text-gray-500">Reports in 24 hrs</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Price</p>
          <p className="text-[15px] font-bold text-gray-900">₹{lab.price}</p>
        </div>
        <button className="bg-[#1d6fce] hover:bg-[#1860b5] active:scale-95 transition-all duration-150 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-blue-200">
          Book Now
        </button>
      </div>
    </div>
  );
}