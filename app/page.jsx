import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Populartest from "./components/Test";
import Findmedi from "./components/Findmedi";
import MedicineCompareCard from "./components/Compare";
import TestCTA from "./components/TestCTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Populartest />

      {/* 🔥 MAIN SECTION FIX */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* LEFT */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm p-5">
        <Findmedi />
      </div>

      {/* RIGHT */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm p-5">
        <MedicineCompareCard />
      </div>

    </div>
  </div>
</div>
  <div className="bg-[#F5F8FC] py-10">
      <TestCTA />
    </div>
    </>
  );
}