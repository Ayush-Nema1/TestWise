// app/book/[slug]/page.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, BadgeCheck } from "lucide-react";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const lab = searchParams.get("lab") || "Dr Lal PathLabs";

  const [sameLabAllowed, setSameLabAllowed] = useState(true);

  return (
    <div className="min-h-screen bg-[#f6f8fc] pb-28 text-gray-900">
      {/* Top Bar */}
      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <Link href="/tests" className="flex items-center justify-center">
            <ArrowLeft size={20} className="text-gray-800" />
          </Link>

          <div>
            <h1 className="text-[17px] font-semibold text-gray-900">
              Book Test
            </h1>
            <p className="text-xs text-gray-400">
              Home sample collection
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-md px-4 pt-4">
        {/* Test Summary */}
        <div className="rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Selected Test
              </p>
              <h2 className="mt-1 text-[21px] font-semibold leading-tight text-gray-900">
                Complete Blood Count (CBC)
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {lab}
              </p>
            </div>

           
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-400">Total Amount</p>
              <p className="text-3xl font-bold text-gray-900">₹299</p>
            </div>

            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Home Collection
            </div>
          </div>

          <label className="mt-4 flex items-start gap-2 rounded-xl bg-gray-50 px-3 py-3">
            <input
              type="checkbox"
              checked={sameLabAllowed}
              onChange={(e) => setSameLabAllowed(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-blue-600"
            />
            <span className="text-[12px] leading-5 text-gray-600">
              Forward to similar trusted lab if unavailable. (recommended)
            </span>
          </label>
        </div>

        {/* Form */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                required
                placeholder="Enter mobile number"
                className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                House / Flat / Building
              </label>
              <input
                type="text"
                required
                placeholder="House no. or building"
                className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Street / Colony
              </label>
              <input
                type="text"
                required
                placeholder="Street or colony"
                className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Area / Ward
              </label>
              <input
                type="text"
                required
                placeholder="Area or ward"
                className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  required
                  placeholder="State"
                  className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                required
                placeholder="Pincode"
                className="h-12 w-full rounded-xl border border-gray-100 bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-4">
          <div>
            <p className="text-xs text-gray-400">Total Amount</p>
            <p className="text-2xl font-bold text-gray-900">₹299</p>
          </div>

          <button className="h-12 flex-1 rounded-xl bg-blue-600 text-[15px] font-semibold text-white transition hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}