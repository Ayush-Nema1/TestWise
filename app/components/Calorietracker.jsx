import Image from "next/image";

export default function CalorieTrackerCard() {
  return (
    <div className="flex justify-between items-start rounded-[18px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF3F9] p-6 border border-gray-100 shadow-sm h-[190px] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      {/* LEFT WRAPPER */}
      <div className="flex gap-4 h-full">
        
        {/* ICON */}
        <div className="flex h-15 w-15 items-center justify-center ">
          <Image
            src="/kcal.png"   // 👈 apna generated icon yahan daal
            alt="calorie icon"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col h-full max-w-[240px]">
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            Calorie Tracker & Custom Diet Plans
          </h3>

          <div className="mt-2 flex gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              Lactose Free
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              Gluten-Free
            </span>
          </div>

 

          <button className="mt-auto rounded-lg bg-green-600 px-5 py-2 text-sm text-white hover:bg-green-700">
            Track & Plan Diet
          </button>
        </div>
      </div>
    </div>
  );
}