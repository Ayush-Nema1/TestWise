"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Fottter";

import {
  ShoppingBag,
  CalendarDays,
  FlaskConical,
  Clock3,
  BadgeCheck,
  XCircle,
  ChevronRight,
  X,
} from "lucide-react";

const orders = [
  {
    id: "#TW8421",
    test: "Complete Blood Count (CBC)",
    lab: "Redcliffe Labs",
    date: "16 May 2026",
    amount: 199,
    status: "booked",
  },

  {
    id: "#TW8422",
    test: "Vitamin B12 Test",
    lab: "Dr Lal PathLabs",
    date: "15 May 2026",
    amount: 349,
    status: "accepted",
  },

  {
    id: "#TW8423",
    test: "Liver Function Test (LFT)",
    lab: "Pathkind Labs",
    date: "13 May 2026",
    amount: 599,
    status: "cancelled",
  },
];

const cancelReasons = [
  "Booked by mistake",
  "Found better price",
  "Need later",
  "Wrong address",
];

export default function MyOrdersPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f6f8fc]">
        {/* TOP */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[760px] mx-auto px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center">
                <ShoppingBag size={20} className="text-white" />
              </div>

              <div>
                <h1 className="text-[22px] font-bold text-gray-900">
                  My Orders
                </h1>

                <p className="text-sm text-gray-500">
                  Track your booked tests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ORDERS */}
        <div className="max-w-[760px] mx-auto px-4 py-5 space-y-4">
          {orders.map((order, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              {/* TOP */}
              <div className="flex items-start justify-between gap-3">
                {/* LEFT */}
                <div className="flex gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <FlaskConical
                      size={21}
                      className="text-blue-600"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[16px] font-semibold text-gray-900 leading-snug">
                      {order.test}
                    </h2>

                    <p className="text-sm text-gray-500 mt-0.5 truncate">
                      {order.lab}
                    </p>

                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <CalendarDays size={13} />
                        {order.date}
                      </div>

                      <div className="text-xs text-gray-300">
                        •
                      </div>

                      <p className="text-sm font-semibold text-gray-900">
                        ₹{order.amount}
                      </p>
                    </div>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-300 shrink-0 mt-1"
                />
              </div>
              {/* DELIVERY INFO */}
<div className="mt-3 rounded-2xl bg-blue-50 border border-blue-100 px-3.5 py-3">

  <p className="text-[13px] leading-5 text-blue-900">
    Your sample collection is scheduled soon at
    <span className="font-semibold">
      {" "}
      Niranjan Ward, Shubham Colony, Kareli, M.P.
    </span>
  </p>

</div>

              {/* STATUS */}
              <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
                {/* STATUS BADGE */}
                {order.status === "booked" && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-[12px] font-medium text-yellow-700">
                    <Clock3 size={13} />
                    Order Booked
                  </div>
                )}

                {order.status === "accepted" && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-[12px] font-medium text-green-700">
                    <BadgeCheck size={13} />
                    Accepted by Lab
                  </div>
                )}

                {order.status === "cancelled" && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-[12px] font-medium text-red-700">
                    <XCircle size={13} />
                    Cancelled by Lab
                  </div>
                )}

                {/* CANCEL */}
                {order.status !== "cancelled" && (
                  <button
                    onClick={() => setOpenModal(true)}
                    className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {openModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-end sm:items-center justify-center p-0 sm:p-4">

            <div className="w-full sm:max-w-md bg-white rounded-t-[30px] sm:rounded-3xl p-5 animate-in slide-in-from-bottom duration-200">

              {/* HEADER */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-[20px] font-bold text-gray-900">
                    Cancel Order
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Why are you cancelling?
                  </p>
                </div>

                <button
                  onClick={() => setOpenModal(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>

              {/* REASONS */}
              <div className="mt-5 space-y-2">
                {cancelReasons.map((reason, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-blue-300 transition"
                  >
                    <input
                      type="radio"
                      name="cancel-reason"
                      className="accent-blue-600"
                    />

                    <span className="text-sm text-gray-700">
                      {reason}
                    </span>
                  </label>
                ))}
              </div>

              {/* TEXTAREA */}
              <div className="mt-4">
                <textarea
                  placeholder="Any other reason..."
                  className="w-full h-24 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none resize-none focus:border-blue-500"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-5">

                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 h-11 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-700"
                >
                  Keep Order
                </button>

                <button className="flex-1 h-11 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors">
                  Confirm Cancel
                </button>

              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}