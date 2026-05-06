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
    <div className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col h-full">

      {/* Accent */}
      <div className="h-1 w-12 bg-green-500 rounded-full mb-4"></div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
       Check if Two Medicines are Same
       </h2>
      <p className="text-sm text-gray-500 mb-5">
        Match two medicines by composition & price.
      </p>

      {/* MAIN */}
      <div className="flex items-center gap-4 mb-5">

        {/* LEFT */}
        <div className="flex-1">
          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-green-300 rounded-xl p-5 flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 transition">
              
              {img1 ? (
                <img src={img1} className="w-20 h-20 object-contain" />
              ) : (
                <>
                  <ImagePlus className="w-5 h-5 text-green-600 mb-1" />
                  <p className="text-xs text-green-600 font-medium">
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
            className="mt-3 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CENTER ICON */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 p-3 rounded-full">
            <ArrowLeftRight className="text-green-600 w-4 h-4" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-green-300 rounded-xl p-5 flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 transition">
              
              {img2 ? (
                <img src={img2} className="w-20 h-20 object-contain" />
              ) : (
                <>
                  <ImagePlus className="w-5 h-5 text-green-600 mb-1" />
                  <p className="text-xs text-green-600 font-medium">
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
            className="mt-3 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Button */}
      <button className="mt-auto bg-green-600 hover:bg-green-700 text-white w-full py-2.5 rounded-xl text-sm font-medium transition">
       Check is same
      </button>
    </div>
  );
}