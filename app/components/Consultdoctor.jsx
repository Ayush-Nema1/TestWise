import Image from "next/image";

export default function ConsultDoctorCard() {
  return (
    <div className="flex justify-between items-start rounded-[18px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF3F9] p-6 border border-gray-100 shadow-sm h-[190px] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      <div className="flex gap-4 h-full">
        
        <div className="flex h-15 w-15 items-center justify-center">
          <Image src="/chat.png" alt="chat" width={90} height={90} />
        </div>

        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-800">
            Not Sure Which Test?
          </h3>

          <p className="text-sm text-gray-500 mt-1 max-w-[180px]">
            Tell us your symptoms, we’ll guide you.
          </p>

          <button className="mt-auto rounded-lg bg-blue-500 px-5 py-2 text-sm text-white hover:bg-blue-600">
            Consult with Doctor
          </button>
        </div>
      </div>
    </div>
  );
}