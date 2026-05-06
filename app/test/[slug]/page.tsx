// app/tests/[slug]/page.jsx
// ✅ Server Component — async params, no useState here

import {
  Home, ChevronRight, Share2, Heart, ClipboardList, Droplets,
  Clock, FlaskConical, Truck, ShieldCheck, FileText, BookOpen,
  RefreshCw, CheckCircle2, X,IndianRupee,Search, BadgeCheck
} from "lucide-react";
import { testData } from "@/app/data/testData";
import LabsSection from "@/app/components/Testbooking/LabSection";
import SaveButton from "@/app/components/Testbooking/SaveButton";
import Navbar from "@/app/components/home/Navbar";

/* ─── Static lab data per slug ─── */
const labsData = {
  "vitamin-b12-test": [
    { name: "Dr Lal PathLabs",        abbr: "DR", color: "bg-blue-100 text-blue-700",     price: 349, originalPrice: 699, discount: 50, rating: 4.6, booked: "1200+", reportTime: "24 hrs", best: true  },
    { name: "Thyrocare Technologies", abbr: "TH", color: "bg-purple-100 text-purple-700", price: 399, originalPrice: 700, discount: 43, rating: 4.5, booked: "950+",  reportTime: "24 hrs", best: false },
    { name: "Redcliffe Labs",         abbr: "RE", color: "bg-green-100 text-green-700",   price: 449, originalPrice: 800, discount: 43, rating: 4.4, booked: "800+",  reportTime: "24 hrs", best: false },
  ],
  "complete-blood-count-cbc": [
    { name: "Redcliffe Labs",        abbr: "RE", color: "bg-green-100 text-green-700",   price: 199, originalPrice: 399, discount: 50, rating: 4.7, booked: "2000+", reportTime: "24 hrs", best: true  },
    { name: "Dr Lal PathLabs",       abbr: "DR", color: "bg-blue-100 text-blue-700",     price: 249, originalPrice: 450, discount: 44, rating: 4.6, booked: "1800+", reportTime: "24 hrs", best: false },
    { name: "Thyrocare",             abbr: "TH", color: "bg-purple-100 text-purple-700", price: 279, originalPrice: 500, discount: 44, rating: 4.5, booked: "1500+", reportTime: "48 hrs", best: false },
    { name: "Metropolis Healthcare", abbr: "ME", color: "bg-orange-100 text-orange-700", price: 299, originalPrice: 550, discount: 45, rating: 4.4, booked: "900+",  reportTime: "24 hrs", best: false },
    { name: "SRL Diagnostics",       abbr: "SR", color: "bg-red-100 text-red-700",       price: 319, originalPrice: 580, discount: 44, rating: 4.3, booked: "700+",  reportTime: "48 hrs", best: false },
  ],
  "diabetes-panel": [
    { name: "Dr Lal PathLabs",       abbr: "DR", color: "bg-blue-100 text-blue-700",     price: 399, originalPrice: 799, discount: 50, rating: 4.8, booked: "1500+", reportTime: "24 hrs", best: true  },
    { name: "Thyrocare Technologies",abbr: "TH", color: "bg-purple-100 text-purple-700", price: 449, originalPrice: 850, discount: 47, rating: 4.6, booked: "1100+", reportTime: "24 hrs", best: false },
    { name: "Redcliffe Labs",        abbr: "RE", color: "bg-green-100 text-green-700",   price: 499, originalPrice: 900, discount: 44, rating: 4.5, booked: "800+",  reportTime: "48 hrs", best: false },
  ],
};

const relatedMap = {
  "vitamin-b12-test":         ["vitamin-d-test", "complete-blood-count-cbc", "thyroid-profile", "lipid-profile"],
  "diabetes-panel":           ["complete-blood-count-cbc", "kidney-function-test", "lipid-profile", "liver-function-test"],
  "complete-blood-count-cbc": ["vitamin-b12-test", "vitamin-d-test", "liver-function-test", "thyroid-profile"],
};

export default async function TestDetailPage({ params }) {
  const { slug } = await params;

  const test = testData.find((t) => t.slug === slug);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f4ff]">
        <div className="text-center">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-700 font-semibold text-lg">Test not found</p>
          <p className="text-gray-400 text-sm mt-1">No test found for: <code className="bg-gray-100 px-2 py-0.5 rounded">{slug}</code></p>
          <a href="/tests" className="mt-4 inline-block text-blue-600 text-sm hover:underline">← Back to all tests</a>
        </div>
      </div>
    );
  }

  /* Build labs list — fallback to bestLab from testData */
  const allLabs = labsData[slug] ?? [
    {
      name: test.bestLab.name,
      abbr: test.bestLab.name.slice(0, 2).toUpperCase(),
      color: "bg-blue-100 text-blue-700",
      price: test.bestLab.price,
      originalPrice: Math.round(test.bestLab.price * 1.8),
      discount: 44,
      rating: test.bestLab.rating,
      booked: "500+",
      reportTime: "24 hrs",
      best: true,
    },
  ];

  const lowestPrice = Math.min(...allLabs.map(l => l.price));

  /* Related tests */
  const relatedSlugs  = relatedMap[slug] ?? testData.filter(t => t.slug !== slug).slice(0, 4).map(t => t.slug);
  const relatedTests  = relatedSlugs.map(s => testData.find(t => t.slug === s)).filter(Boolean).slice(0, 5);

  /* Highlights */
  const highlights = [
    { icon: <ClipboardList size={18} />, label: `${test.includes}`, sub: "Test Included" },
    { icon: <X size={18} />,             label: "No Fasting",        sub: "Required" },
    { icon: <Clock size={18} />,         label: "24 hrs",            sub: "Report Time" },
    { icon: <Droplets size={18} />,      label: "Blood Test",        sub: "Sample Type" },
    { icon: <Truck size={18} />,         label: "Home Collection",   sub: "Available" },
  ];

  return (
    <>
   
    <div className="bg-[#f0f4ff] min-h-screen pb-24 md:pb-8">

      {/* ── BREADCRUMB NAV ── */}
       <Navbar></Navbar>

      {/* ── HERO CARD ── */}
      <div className="max-w-[1240px] mx-auto px-4 mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6">

          {/* Image + Info */}
          <div className="flex gap-5 flex-1">
            <div className="w-[120px] h-[120px] shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center overflow-hidden border border-blue-100">
              <img src={test.image} alt={test.name} className="w-[100px] h-[100px] object-contain" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[22px] font-bold text-gray-900">{test.name}</h1>
                <span className="text-[11px] bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full font-semibold">Bestseller</span>
              </div>

              <div className="mt-2 space-y-1.5">
                <p className="text-sm text-gray-500 flex items-start gap-1.5">
                  <ClipboardList size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  {test.description.split(".")[0]}.
                </p>
                <p className="text-sm text-gray-500 flex items-start gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  Essential for routine health monitoring and early detection.
                </p>
              </div>

              {/* Highlights */}
             <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 text-sm text-gray-600">

  <div className="flex items-center gap-2">
    <ClipboardList size={16} className="text-blue-500"/>
    <span className="font-medium">{test.includes}</span> tests included
  </div>

  <div className="flex items-center gap-2">
    <X size={16} className="text-blue-500"/>
    No fasting required
  </div>

  <div className="flex items-center gap-2">
    <Clock size={16} className="text-blue-500"/>
    Reports in 24 hrs
  </div>

  <div className="flex items-center gap-2">
    <Droplets size={16} className="text-blue-500"/>
    Blood sample
  </div>

  <div className="flex items-center gap-2">
    <Truck size={16} className="text-blue-500"/>
    Home collection available
  </div>

</div>

              {/* Links */}
            
            </div>
          </div>

          {/* CTA Box */}
          <div className="w-full md:w-[210px] shrink-0 border border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <p className="text-xs text-gray-400 uppercase tracking-wide">Starting from</p>
            <h2 className="text-[34px] font-bold text-gray-900 leading-tight mt-0.5">₹{lowestPrice}</h2>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors">
              Book Now
            </button>
            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-gray-400">
              <ShieldCheck size={12} /> Lowest price guarantee
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
<div className="max-w-[1240px] mx-auto px-4 mt-3">

  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">


    {[
      {
        icon: <Search size={20} className="text-blue-600" />,
        title: "Compare Labs",
        sub: "Best price & rating",
      },
      {
        icon: <BadgeCheck size={20} className="text-blue-600" />,
        title: "Verified Labs",
        sub: "Trusted partners only",
      },
      {
        icon: <Home size={20} className="text-blue-600" />,
        title: "Home Collection",
        sub: "Doorstep sample pickup",
      },
      {
        icon: <IndianRupee size={20} className="text-blue-600" />,
        title: "Transparent Pricing",
        sub: "No hidden charges",
      },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 p-4">

        {/* Icon box */}
        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-100">
          {item.icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {item.title}
          </p>
          <p className="text-xs text-gray-400">
            {item.sub}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>
</div>

      {/* ── LABS SECTION (Client Component) ── */}
      <div className="max-w-[1240px] mx-auto px-4 mt-4">
        <LabsSection allLabs={allLabs} test={test} relatedTests={relatedTests} />
      </div>

      {/* ── MOBILE STICKY BOTTOM ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between lg:hidden z-50 shadow-lg">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Book this test & get accurate health insights</p>
          <p className="text-[10px] text-gray-400">Trusted by 10M+ customers · 100% Safe & Secure</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-gray-900">₹{lowestPrice}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors">
            Book Now
          </button>
        </div>
      </div>

    </div>
    </>

  );
}