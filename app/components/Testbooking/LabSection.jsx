"use client";

import { useState } from "react";
import {
  Star, ChevronDown, ChevronUp, BadgeCheck, X,
  ClipboardList, Droplets, Clock, FlaskConical, Truck,
} from "lucide-react";

export default function LabsSection({ allLabs, test, relatedTests }) {
  const [sortBy, setSortBy] = useState("Lowest Price");
  const [showAll, setShowAll] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  const sortedLabs = [...allLabs].sort((a, b) => {
    if (sortBy === "Lowest Price") return a.price - b.price;
    if (sortBy === "Highest Rated") return b.rating - a.rating;
    return parseInt(b.booked) - parseInt(a.booked);
  });

  const visibleLabs = showAll ? sortedLabs : sortedLabs.slice(0, 3);

  return (
    <div className="flex gap-5">

      {/* ── LEFT: LABS ONLY ── */}
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          {/* 🔥 Banner */}
          {bannerOpen && (
            <div className="flex items-center justify-between px-5 py-2.5 bg-blue-50 border-b border-blue-100">
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <BadgeCheck size={15} />
                <span>
                  Compare <strong>{allLabs.length} labs</strong> • Choose best price & rating
                </span>
              </div>
              <button onClick={() => setBannerOpen(false)}>
                <X size={14} className="text-blue-400 hover:text-blue-600" />
              </button>
            </div>
          )}

          {/* 🔥 CONTENT */}
          <div className="p-5">

            {/* Header + Sort */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-700">
                All Labs ({allLabs.length})
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm"
              >
                <option>Lowest Price</option>
                <option>Highest Rated</option>
                <option>Most Booked</option>
              </select>
            </div>

            {/* 🔥 LAB CARDS */}
            <div className="space-y-3">
              {visibleLabs.map((lab, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-shadow hover:shadow-sm
                    ${lab.best ? "border-green-200 bg-green-50/30" : "border-gray-100 bg-white"}`}
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold ${lab.color}`}>
                      {lab.abbr}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-900">{lab.name}</span>

                        {lab.best && (
                          <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                            Best Price
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-400 flex-wrap">
                        <span className="flex items-center gap-0.5 text-yellow-500">
                          <Star size={11} fill="currentColor" stroke="none" />
                          {lab.rating}
                        </span>
                        <span>•</span>
                        <span>{lab.reportTime}</span>
                        <span>•</span>
                        <span>{lab.booked} booked</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <p className="text-[20px] font-bold text-gray-900">
                      ₹{lab.price}
                    </p>

                    <p className="text-xs text-gray-400">
                      <span className="line-through">₹{lab.originalPrice}</span>
                      <span className="text-green-600 ml-1">
                        {lab.discount}% OFF
                      </span>
                    </p>

                    <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold">
                      Book with Lab →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥 VIEW ALL */}
            {allLabs.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-blue-600 font-medium"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={15} /> Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={15} /> View All Labs ({allLabs.length})
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDEBAR (OPTIONAL CLEAN) ── */}
      <div className="w-[290px] shrink-0 hidden lg:flex flex-col gap-4">

        {/* Minimal Info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-900 mb-3">Test Overview</h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>{test.includes}</strong> tests included</p>
            <p>Blood sample</p>
            <p>Reports in 24 hrs</p>
            <p>No fasting required</p>
          </div>
        </div>

        {/* Related Tests */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-900 mb-3">Related Tests</h3>

          <div className="flex flex-wrap gap-2">
            {relatedTests.map((rel, i) => (
              <a
                key={i}
                href={`/test/${rel.slug}`}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-lg transition"
              >
                {rel.name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}