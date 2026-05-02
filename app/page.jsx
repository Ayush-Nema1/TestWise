import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Populartest from "./components/Test";
import Findmedi from "./components/Findmedi";
import MedicineCompareCard from "./components/Compare";
import TestCTA from "./components/TestCTA";
import HowitWorkks from "./components/Howworks"
import TestPositiveCard from "./components/Testpositive";
import ConsultDoctorCard from "./components/Consultdoctor";
import CalorieTracker from "./components/Calorietracker";
import Footer from "./components/Fottter";
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
     
     <div className="px-4 py-10 bg-white">
<HowitWorkks/>
     </div>
      
  <div className="bg-[#F5F8FC] py-10">
    
      <TestCTA />
    </div>

     <div className="bg-white py-8">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
     <ConsultDoctorCard />
    <TestPositiveCard />
   
    <CalorieTracker />  
  </div>
</div>
<Footer/>
    </>

  );
}