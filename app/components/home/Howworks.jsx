"use client";

import {
  Search,
  ClipboardList,
  MapPin,
  CalendarDays,
  Home,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    desc: "Search symptoms or tests",
  },
  {
    icon: ClipboardList,
    title: "Choose Test",
    desc: "See test details, preparation & price",
  },
  {
    icon: MapPin,
    title: "Compare Labs",
    desc: "Compare labs & choose the best",
  },
  {
    icon: CalendarDays,
    title: "Book & Pay",
    desc: "Choose time, book online",
  },
  {
    icon: Home,
    title: "Sample Pickup",
    desc: "We collect from your home",
  },
  {
    icon: BarChart3,
    title: "Get Reports",
    desc: "Fast reports in 6/12/24 hours",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-4">
      <div className="mx-auto max-w-[1380px] bg-[#F3F7FC] rounded-2xl px-6 py-6 shadow-sm border border-gray-200">
        
        {/* TITLE */}
        <h2 className="text-center text-[18px] font-semibold text-gray-800 mb-6">
          How It Works
        </h2>

        {/* STEPS */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 min-w-[180px]">
              
              {/* STEP CARD */}
              <div className="flex flex-col items-center text-center">
                
                {/* ICON */}
                <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm">
                  <step.icon className="w-5 h-5 text-[#0A4185]" />
                </div>

                {/* TEXT */}
                <p className="mt-3 text-sm font-medium text-gray-800">
                  {index + 1}. {step.title}
                </p>
                <p className="text-xs text-gray-500 leading-snug mt-1">
                  {step.desc}
                </p>
              </div>

              {/* ARROW */}
              {index !== steps.length - 1 && (
                <ArrowRight className="text-gray-400 w-4 h-4" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}