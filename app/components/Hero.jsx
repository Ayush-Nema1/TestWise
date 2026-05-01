import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-6 md:px-12 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Your Health.
            <br />
            <span className="text-green-600">Your Choice.</span>
          </h1>

          <p className="mt-4 text-gray-500 text-lg max-w-lg">
            Book lab tests with home sample collection and compare medicine prices to save big.
          </p>

          {/* FEATURE BADGES */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-gray-700">
            {["Reports in 6 Hours", "Home Sample Collection", "Certified Labs", "Best Price Guarantee"].map((item) => (
              <span key={item} className="flex items-center gap-1 bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">
                <span className="text-green-500 font-bold">✔</span> {item}
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
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm">
        {[
          { icon: "⚡", label: "Fast Reports in 6 Hours*" },
          { icon: "🏠", label: "Home Sample Collection" },
          { icon: "💊", label: "Lowest Medicine Prices" },
          { icon: "🔒", label: "100% Secure Transactions" },
          { icon: "✅", label: "Verified Labs Only" },
          { icon: "🎧", label: "24/7 Support" },
        ].map((item) => (
          <div key={item.label} className="bg-white shadow-sm rounded-xl py-4 px-3 hover:shadow-md transition flex flex-col items-center gap-2">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-gray-700 font-medium leading-snug">{item.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}