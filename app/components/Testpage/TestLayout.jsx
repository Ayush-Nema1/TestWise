"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import TestCard from "./TestCard";

const PRICE_OPTIONS = [
  { id: "u500",     label: "Under ₹500" },
  { id: "5to10",   label: "₹500 – ₹1000" },
  { id: "10to20",  label: "₹1000 – ₹2000" },
  { id: "ab2000",  label: "Above ₹2000" },
];

const REPORT_OPTIONS = [
  { id: "r24",   label: "Within 24 hours" },
  { id: "r48",   label: "24 – 48 hours" },
  { id: "r3d",   label: "2 – 3 days" },
  { id: "r3dp",  label: "More than 3 days" },
];

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[15px] h-[15px] rounded border-gray-300 accent-[#1d6fce] cursor-pointer flex-shrink-0"
      />
      <span className="text-[13px] text-gray-600 group-hover:text-gray-900 transition-colors select-none">
        {label}
      </span>
    </label>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5">
      <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-3">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

const DEMO = [
  {
    name: "Complete Blood Count (CBC)", includes: 24, badge: "bestseller", category: "blood",
    description: "Checks your overall health and detects infections, anemia, and more.",
    startingPrice: 199, totalLabs: 12,
    bestLab: { name: "Redcliffe Labs", best: true, rating: 4.6, price: 199 },
  },
  {
    name: "Diabetes Panel", includes: 5, badge: "bestseller", category: "diabetes",
    description: "Know your diabetes risk and monitor blood sugar levels effectively.",
    startingPrice: 399, totalLabs: 10,
    bestLab: { name: "Dr. Lal PathLabs", best: false, rating: 4.5, price: 399 },
  },
  {
    name: "Thyroid Profile (T3, T4, TSH)", includes: 3, badge: "bestseller", category: "thyroid",
    description: "Evaluate thyroid function and detect imbalances early.",
    startingPrice: 349, totalLabs: 8,
    bestLab: { name: "Thyrocare", best: false, rating: 4.4, price: 349 },
  },
  {
    name: "Vitamin D Test", includes: 1, badge: "recommended", category: "vitamin",
    description: "Check your Vitamin D levels and maintain strong bones.",
    startingPrice: 299, totalLabs: 9,
    bestLab: { name: "Redcliffe Labs", best: false, rating: 4.6, price: 299 },
  },
];

export default function TestsLayout({ tests }) {
  const data = tests?.length ? tests : DEMO;
  const [price, setPrice]   = useState({});
  const [report, setReport] = useState({});
  const [home, setHome]     = useState(false);
  const [min, setMin]       = useState("");
  const [max, setMax]       = useState("");
  const [sort, setSort]     = useState("popularity");

  const toggle = (obj, set, k) => set(p => ({ ...p, [k]: !p[k] }));
  const clearAll = () => { setPrice({}); setReport({}); setHome(false); setMin(""); setMax(""); };

  return (
    <div className="w-full bg-gradient-to-b from-[#f4f8fd] to-[#edf2f9] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-7 flex gap-6 items-start">

        {/* ── Sidebar ── */}
        <aside className="w-[235px] hidden md:block flex-shrink-0 sticky top-6">
          <div className="bg-white rounded-xl border border-[#e4ecf5] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5">

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-[15px] h-[15px] text-[#1d6fce]" />
                <h3 className="text-[15px] font-bold text-gray-900">Filters</h3>
              </div>
              <button onClick={clearAll} className="text-[12.5px] font-semibold text-[#1d6fce] hover:text-[#1555a8] transition-colors">
                Clear All
              </button>
            </div>

            <Section title="Price">
              {PRICE_OPTIONS.map(o => (
                <Checkbox key={o.id} label={o.label} checked={!!price[o.id]}
                  onChange={() => toggle(price, setPrice, o.id)} />
              ))}
              <div className="flex items-center gap-2 mt-3">
                <div className="relative flex-1">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">₹</span>
                  <input value={min} onChange={e => setMin(e.target.value)} placeholder="Min"
                    className="w-full pl-6 pr-2 py-1.5 text-[12px] border border-[#dde6f0] rounded-lg outline-none focus:border-[#1d6fce] text-gray-700 bg-[#fafcff]" />
                </div>
                <span className="text-[11px] text-gray-400">to</span>
                <div className="relative flex-1">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">₹</span>
                  <input value={max} onChange={e => setMax(e.target.value)} placeholder="Max"
                    className="w-full pl-6 pr-2 py-1.5 text-[12px] border border-[#dde6f0] rounded-lg outline-none focus:border-[#1d6fce] text-gray-700 bg-[#fafcff]" />
                </div>
              </div>
            </Section>

            <div className="h-px bg-[#eef2f8] my-4" />

            <Section title="Report Time">
              {REPORT_OPTIONS.map(o => (
                <Checkbox key={o.id} label={o.label} checked={!!report[o.id]}
                  onChange={() => toggle(report, setReport, o.id)} />
              ))}
            </Section>

            <div className="h-px bg-[#eef2f8] my-4" />

            <Section title="Home Collection">
              <Checkbox label="Home Collection Available" checked={home} onChange={() => setHome(p => !p)} />
            </Section>

            <button className="w-full mt-4 bg-[#1d6fce] hover:bg-[#1860b5] active:scale-[0.98] transition-all text-white font-semibold text-[13.5px] py-2.5 rounded-lg shadow-sm shadow-blue-200">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* ── Main ── */}
        <main className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[14px] text-gray-500">
              <span className="font-bold text-gray-900 text-[15px]">1200+</span> tests found
            </p>
            <div className="relative">
              <select value={sort} onChange={e => setSort(e.target.value)}
                className="appearance-none pl-3.5 pr-9 py-2 text-[13px] font-medium text-gray-700 bg-white border border-[#d8e5f2] rounded-lg shadow-sm outline-none cursor-pointer hover:border-[#1d6fce] transition-colors">
                <option value="popularity">Sort by: Popularity</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-4">
            {data.map((test, i) => <TestCard key={i} test={test} />)}
          </div>
        </main>
      </div>
    </div>
  );
}