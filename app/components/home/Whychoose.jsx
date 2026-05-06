"use client";

import Image from "next/image";

export default function WhyChooseTestWise() {
  return (
    <section className="w-full px-4 py-6 ">
      <div className="mx-auto max-w-[1380px] grid grid-cols-1 md:grid-cols-2 gap-4 ">

        {/* LEFT CARD */}
        <div className="flex items-center justify-between bg-[#F5F7FB] rounded-[18px] p-6 relative overflow-hidden">

          {/* TEXT */}
          <div className="z-10">
            <h2 className="text-[20px] font-semibold text-[#1C1C1C] mb-4">
              Why Choose TestWise?
            </h2>

            <div className="grid grid-cols-2 gap-3 text-[14px] text-gray-600">
              <div>
                <p className="font-medium text-black">Best Prices</p>
                <p>Compare and save up to 70%</p>
              </div>

              <div>
                <p className="font-medium text-black">Home Collection</p>
                <p>Hassle-free sample pickup</p>
              </div>

              <div>
                <p className="font-medium text-black">Trusted Labs</p>
                <p>Only NABL & ISO certified labs</p>
              </div>

              <div>
                <p className="font-medium text-black">Fast & Accurate</p>
                <p>Reports in just 6 hours*</p>
              </div>
            </div>
          </div>

           <div>
            <Image
              src="/doctor.png"
              alt="family"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex items-center justify-between bg-[#F5F7FB] rounded-[18px] p-6">

          {/* TEXT */}
          <div>
            <h2 className="text-[18px] font-semibold text-[#0A4185] mb-2">
              Health Checkup Packages
            </h2>

            <p className="text-gray-500 text-[14px] mb-4">
              Complete care for you & your family
            </p>

            <p className="text-[24px] font-bold text-black">
              ₹499{" "}
              <span className="text-gray-400 line-through text-[14px] ml-2">
                ₹1,299
              </span>
            </p>

            <button className="mt-4 bg-[#0A4185] text-white px-5 py-2 rounded-lg text-sm">
              Book Now
            </button>
          </div>

          {/* FAMILY IMAGE */}
          <div>
            <Image
              src="/family1.png"
              alt="family"
              width={350}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}