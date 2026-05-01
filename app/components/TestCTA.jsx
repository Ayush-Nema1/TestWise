"use client";

import Image from "next/image";
import { Clock3, Truck, ShieldCheck } from "lucide-react";

export default function TestCTA() {
  return (
    <section className="w-full px-4">
     <div className="mx-auto max-w-[1380px] rounded-[18px] bg-[#0A4185] px-10 ">

        <div className="grid grid-cols-3 items-center">
          
          {/* LEFT */}
          <div>
            <h2 className="text-[22px] font-semibold text-white">
              Your Test. Your Way.
            </h2>

            <p className="mt-1 text-[15px] text-[#D7E8FF]">
              Fast Reports. Home Collection.
            </p>

            <div className="mt-5 flex items-center text-[13px] text-[#D7E8FF]">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-white" />
                Reports in 6 Hours*
              </div>

              <div className="mx-6 h-5 w-px bg-white/25" />

              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-white" />
                Home Sample Collection
              </div>

              <div className="mx-6 h-5 w-px bg-white/25" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white" />
                Safe & Hygienic
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
       {/* CENTER IMAGE */}
<div className="flex justify-center">
  <div className="relative w-[140px] h-[160px] flex items-end justify-center">
    <Image
      src="/delivery-boy.png"
      alt="Delivery"
      width={140}
      height={170}
      className="object-contain"
      priority
    />
  </div>
</div>
          {/* RIGHT */}
          <div className="flex flex-col items-center">
            <button className="bg-[#18C75A] px-8 py-2.5 rounded-lg text-white text-[15px]">
              Book Your Test Now →
            </button>

            <p className="mt-2 text-[13px] text-[#D7E8FF]">
              Doctor guidance available
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}