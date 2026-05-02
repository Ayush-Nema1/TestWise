import Image from "next/image";

export default function TestPositiveCard() {
  return (
    <div className="flex justify-between items-start rounded-[18px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF3F9] p-6 border border-gray-100 shadow-sm h-[190px] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      <div className="flex gap-4 h-full">
        
        {/* ICON */}
        <div className="flex h-15 w-15 items-center justify-center">
          <Image src="/leaf.png" alt="leaf" width={90} height={90} />
        </div>

        {/* TEXT */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-800">
            Test Positive?
          </h3>

          <p className="text-sm text-gray-500 mt-1 max-w-[180px]">
            Get diet & lifestyle guidance.
          </p>

          <button className="mt-auto rounded-lg bg-green-500 px-5 py-2 text-sm text-white hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>

      {/* IMAGE */}
     
    </div>
  );
}