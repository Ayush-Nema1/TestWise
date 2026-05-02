import Image from "next/image";
import { House } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Pill } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Clock,  Tag, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-6 md:px-12 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Your Health.
            <br />
            <p className="text-blue-600"><span  className="text-green-600"> Your </span> Choice.</p>
          </h1>

          <p className="mt-4 text-gray-500 text-lg max-w-lg">
            Book lab tests with home sample collection and compare medicine prices to save big.
          </p>

          {/* FEATURE BADGES */}
          <div className="flex flex-wrap gap-2 mt-6">
  {[
    { icon: <Clock size={14} className="text-blue-600" />, label: "Reports in 6 Hours" },
    { icon: <House size={14} className="text-blue-600" />, label: "Home Sample Collection" },
    { icon: <ShieldCheck size={14} className="text-blue-600" />, label: "Certified Labs" },
    { icon: <Tag size={14} className="text-blue-600" />, label: "Best Price Guarantee" },
  ].map((item) => (
    <span key={item.label} className="flex items-center gap-2 bg-white border border-[#E2EAF4] px-4 py-1.5 rounded-full text-sm font-medium text-[#1C2B45]">
      {item.icon} {item.label}
    </span>
  ))}
</div>


          {/* SEARCH BAR */}
          <div className="mt-8 flex items-center bg-white rounded-xl shadow-md overflow-hidden max-w-xl border border-blue-100">
            <span className="pl-4 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search tests, symptoms, medicines..."
              className="flex-1 px-3 py-3 outline-none text-gray-700 text-sm"
            />
            <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition text-sm font-semibold">
              Search
            </button>
          </div>

          {/* POPULAR */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-400 font-semibold">Popular:</span>
            {["Lactose Intolerance", "Full Body Checkup", "Vitamin D", "Allergy", "Hair Loss"].map((item) => (
              <span
                key={item}
                className="bg-white border border-blue-100 px-3 py-1 rounded-full text-blue-600 cursor-pointer hover:bg-blue-50 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative flex justify-center items-end min-h-[430px]">

          {/* Blob 1 — large soft teal/blue */}
          <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] opacity-60 bottom-0 right-4 z-0 blur-sm" />

          {/* Blob 2 — small accent green top-left of image area */}
          <div className="absolute w-[160px] h-[160px] bg-gradient-to-br from-green-100 to-emerald-200 rounded-[40%_60%_50%_50%/60%_40%_55%_45%] opacity-50 top-10 left-6 z-0 blur-sm" />

          {/* Hero image — on top */}
          <div className="relative w-full h-[430px] z-10">
            <Image
              src="/herooo.png"
              alt="Hero"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* TRUST CARD */}
          {/* <div className="absolute top-4 right-0 z-20 bg-white rounded-2xl shadow-lg p-5 text-center w-48 border border-blue-50">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 text-xl">🛡️</div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Trusted by</p>
            <p className="text-2xl font-extrabold text-blue-600 leading-tight">1,00,000+</p>
            <p className="text-xs text-gray-500 mt-1 leading-snug">Health Conscious<br />Indians</p>
            <div className="border-t border-gray-100 mt-3 pt-3">
              <p className="text-yellow-400 text-sm tracking-widest">★★★★★</p>
              <p className="text-[11px] text-gray-400 mt-1">4.8/5 · 12,000+ reviews</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* BOTTOM FEATURE BAR */}
      {/* BOTTOM FEATURE BAR */}
<div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl px-6 py-4">
  <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-[#E8EFF8]">
    {[
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#16A34A" strokeWidth="1.5"/>
            <path d="M7 11.5L10 14.5L15 8.5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        bg: "bg-green-50",
        label: "Fast Reports in", bold: "6 Hours*"
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 3L4 7V11C4 15 7.5 18.5 11 19C14.5 18.5 18 15 18 11V7L11 3Z" stroke="#16A34A" strokeWidth="1.5" fill="#DCFCE7"/>
            <path d="M8 11H14M11 8V14" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        bg: "bg-green-50",
        label: "Home", bold: "Sample Collection"
      },
      {
        icon: <Pill size={20} className="text-violet-600" />,
        bg: "bg-violet-50",
        label: "Lowest", bold: "Medicine Prices"
      },
      {
        icon: <Lock size={20} className="text-orange-500" />,
        bg: "bg-orange-50",
        label: "100% Secure", bold: "Transactions"
      },
      {
        icon: <ShieldCheck size={20} className="text-blue-600" />,
        bg: "bg-blue-50",
        label: "Verified", bold: "Labs Only"
      },
      {
        icon: <Headset size={20} className="text-blue-600" />,
        bg: "bg-blue-50",
        label: "24/7", bold: "Support"
      },
    ].map((item) => (
      <div key={item.bold} className="flex items-center gap-3 px-4 py-2">
        <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
          {item.icon}
        </div>
        <p className="text-[13px] text-[#1C2B45] leading-snug">
          {item.label} <span className="font-bold block">{item.bold}</span>
        </p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}