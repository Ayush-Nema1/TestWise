"use client";
import React from "react";
import { 
  ShieldAlert, 
  HandCoins, 
  BadgeInfo, 
  Ban, 
  MessageCircle, 
  Wallet,
  Gavel,
  ShieldX
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fottter";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 pb-20">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0F3B73] to-blue-800 py-20 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Refund & Dispute Disclosure
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            TestWise is a booking intermediary. We do not collect payments or manage financial disputes.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
          
          {/* PRIMARY LEGAL ADVISORY */}
          <section className="relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] shadow-xl shadow-blue-900/5">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-red-600 rounded-3xl rotate-3 flex items-center justify-center shadow-2xl shadow-red-900/20">
                  <ShieldX className="text-white -rotate-3" size={36} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Financial Disclaimer</span>
                  <h2 className="text-3xl font-extrabold text-[#0F3B73] tracking-tight">Zero Financial Liability</h2>
                </div>
                <div className="space-y-5">
                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium italic">
                    "Payments are made directly to the Laboratory. TestWise is not responsible for the recovery of funds or the settlement of financial disagreements."
                  </p>
                  <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3 text-red-600">
                      <Gavel size={20} />
                      <span className="font-bold text-sm uppercase tracking-wide">Legal Limit of Assistance</span>
                    </div>
                    <p className="text-base text-[#0F3B73] font-bold leading-snug">
                      TestWise may assist in facilitating communication with the Laboratory, but we are NOT legally responsible for resolving disputes or ensuring a refund is issued.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* POLICY SECTIONS GRID */}
          <div className="space-y-16 max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-8">
              <InfoCard 
                title="1. Direct Transaction Model" 
                text="All fees (Lab Counter, COD, or WhatsApp links) are transactions between you and the Laboratory. TestWise never requests or receives your test fees on this platform." 
              />
              <InfoCard 
                title="2. Dispute Assistance vs. Liability" 
                text="We may act as a bridge to forward your concerns to the lab, but our assistance does not imply any liability. We cannot force a lab to issue a refund." 
              />
            </div>

            <PolicySection 
              icon={<Ban size={22} className="text-red-600" />} 
              title="3. No Responsibility for Fund Recovery" 
              content="If a lab fails to provide service after receiving payment, you must pursue the lab directly for the recovery of funds. TestWise shall not be held liable for any loss of money resulting from direct user-to-lab transactions." 
            />

            <div className="grid md:grid-cols-2 gap-8">
              <InfoCard 
                title="4. Billing Integrity" 
                text="The laboratory is solely responsible for providing a valid invoice. TestWise is not responsible for missing receipts or incorrect billing amounts charged by the lab." 
              />
              <InfoCard 
                title="5. Voluntary Mediation" 
                text="Our support team may voluntarily help clarify booking details with the lab, but we are not legally bound to resolve financial conflicts or provide compensation." 
              />
            </div>

            {/* FINAL LEGAL PROTECTION CARD */}
            <div className="bg-[#0F3B73] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert size={30} className="text-blue-300" />
                  <h2 className="text-2xl font-bold">Important Financial Disclosure</h2>
                </div>
                <p className="text-blue-100 leading-relaxed text-base">
                  TestWise is a <b>Booking Intermediary</b>. By using our services, you expressly waive the right to hold TestWise responsible for any financial disputes, double-charges, or refund failures occurring at the laboratory's end. Always verify the laboratory's individual refund policy before making a direct payment.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
                  <div className="flex items-center gap-2">
                    <HandCoins size={14} />
                    <span>Pure Intermediary Model</span>
                  </div>
                  <span>Contact: support@testwise.in</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function PolicySection({ icon, title, content }) {
  return (
    <section className="border-l-4 border-blue-600 pl-8">
      <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-3 tracking-tight">
        {icon} {title}
      </h2>
      <p className="text-gray-600 leading-relaxed text-base">{content}</p>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
      <h3 className="text-lg font-bold text-[#0F3B73] mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
    </div>
  );
}
