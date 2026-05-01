"use client";

import { useState } from "react";
import { ArrowLeftRight, ImagePlus } from "lucide-react";

export default function MedicineCompareUpload() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [med1, setMed1] = useState("");
  const [med2, setMed2] = useState("");

  const handleImage = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full">
      
      {/* Top Accent */}
      <div className="h-1 w-10 bg-blue-500 rounded-full mb-3"></div>

      {/* Title */}
      <h2 className="text-base font-semibold text-gray-800 mb-1">
        Compare Medicines
      </h2>
      <p className="text-xs text-gray-500 mb-4">
        Match two medicines by composition & price.
      </p>

      {/* MAIN */}
      <div className="flex items-center gap-4">
        
        {/* LEFT */}
        <div className="flex-1 border rounded-xl p-3">
          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-green-300 rounded-lg p-4 flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 transition">
              
              {img1 ? (
                <img src={img1} className="w-20 h-20 object-contain" />
              ) : (
                <>
                  <ImagePlus className="w-5 h-5 text-green-600 mb-1" />
                  <p className="text-[11px] text-green-600 font-medium">
                    Add image
                  </p>
                </>
              )}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => handleImage(e, setImg1)}
            />
          </label>

          <input
            type="text"
            placeholder="Medicine 1"
            value={med1}
            onChange={(e) => setMed1(e.target.value)}
            className="mt-2 w-full border rounded-md px-2 py-1.5 text-xs outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CENTER ICON */}
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-2 rounded-full">
            <ArrowLeftRight className="text-gray-700 w-4 h-4" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 border rounded-xl p-3">
          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 transition">
              
              {img2 ? (
                <img src={img2} className="w-20 h-20 object-contain" />
              ) : (
                <>
                  <ImagePlus className="w-5 h-5 text-blue-600 mb-1" />
                  <p className="text-[11px] text-blue-600 font-medium">
                    Add image
                  </p>
                </>
              )}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => handleImage(e, setImg2)}
            />
          </label>

          <input
            type="text"
            placeholder="Medicine 2"
            value={med2}
            onChange={(e) => setMed2(e.target.value)}
            className="mt-2 w-full border rounded-md px-2 py-1.5 text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 text-white py-2 rounded-md text-xs font-medium transition">
        Start Comparing
      </button>
    </div>
  );
}