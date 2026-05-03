"use client";

import { Info, ChevronRight, FlaskConical } from "lucide-react";
import LabRow from "./LabRow";

const CATEGORY_STYLES = {
  blood:    { bg: "bg-red-50",    icon: "text-red-400",    border: "border-red-100" },
  diabetes: { bg: "bg-blue-50",   icon: "text-blue-400",   border: "border-blue-100" },
  thyroid:  { bg: "bg-pink-50",   icon: "text-pink-400",   border: "border-pink-100" },
  vitamin:  { bg: "bg-green-50",  icon: "text-green-400",  border: "border-green-100" },
  heart:    { bg: "bg-rose-50",   icon: "text-rose-400",   border: "border-rose-100" },
  default:  { bg: "bg-[#eef4ff]", icon: "text-[#1d6fce]",  border: "border-blue-100" },
};

const BADGE_STYLES = {
  bestseller:  "bg-emerald-50 text-emerald-700 border border-emerald-200",
  recommended: "bg-[#eef4ff] text-[#1d6fce] border border-blue-200",
  popular:     "bg-orange-50 text-orange-600 border border-orange-200",
};

function TestImage({ category }) {
  const s = CATEGORY_STYLES[category] || CATEGORY_STYLES.default;
  return (
    <div className={`w-[52px] h-[52px] flex-shrink-0 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center`}>
      <FlaskConical className={`w-6 h-6 ${s.icon}`} strokeWidth={1.5} />
    </div>
  );
}

export default function TestCard({ test }) {
  const badgeClass = test.badge ? BADGE_STYLES[test.badge] : null;
  const badgeLabel = test.badge === "bestseller" ? "Bestseller"
    : test.badge === "recommended" ? "Recommended"
    : test.badge === "popular" ? "Popular" : null;

  return (
    <div className="w-full bg-white rounded-xl border border-[#e4ecf5] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-200">

      {/* Top: test info + price */}
      <div className="flex items-start gap-4 px-5 pt-5 pb-4">
        <TestImage category={test.category} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[15px] font-bold text-gray-900 leading-snug">{test.name}</h2>
            {badgeLabel && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md whitespace-nowrap ${badgeClass}`}>
                {badgeLabel}
              </span>
            )}
          </div>
          <p className="text-[12.5px] text-gray-500 mt-1">
            Includes <span className="font-semibold text-gray-700">{test.includes}</span> tests
          </p>
          {test.description && (
            <p className="text-[12.5px] text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
              {test.description}
            </p>
          )}
          <button className="flex items-center gap-1 mt-2 text-[12.5px] font-semibold text-[#1d6fce] hover:text-[#1555a8] transition-colors">
            View Tests Included
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="text-right flex-shrink-0 pl-2">
          <p className="text-[11px] text-gray-400 mb-0.5">Starting from</p>
          <p className="text-[20px] font-bold text-gray-900 leading-none">₹{test.startingPrice}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-[#eef2f8]" />

      {/* Lab Row */}
      <div className="px-5 py-3">
        <LabRow lab={test.bestLab} />
      </div>

      {/* View All Labs */}
      <div className="px-5 pb-4">
        <button className="flex items-center gap-1 text-[12.5px] font-semibold text-[#1d6fce] hover:text-[#1555a8] transition-colors">
          View All Labs ({test.totalLabs})
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}