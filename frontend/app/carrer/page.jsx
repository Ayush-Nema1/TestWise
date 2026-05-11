'use client';
import React from 'react';
import { Rocket, Mail, Zap, Target, IndianRupee } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fottter";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 pb-20">
        {/* HERO SECTION */}
        <section className="bg-slate-50 py-16 px-6 text-center border-b border-slate-100">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest">
            <Zap size={12} /> Project Status: Active
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-slate-900 text-balance">
            Build. Solve. Partner.
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
            TestWise is a technology bridge built to help patients. No corporate hierarchy, no payroll yet—just a solution-first approach.
          </p>
        </section>

        {/* CORE THOUGHTS SECTION */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Reality Check</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Currently, TestWise is not in a state to pay employees. This is a mission-driven project built to bridge the gap in diagnostics. 
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">The Opening</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                <strong>If you see something we missed and you can solve it, contact us to become a partner.</strong> We are always open for someone who can implement and make the platform sustainable.
              </p>
            </div>
          </div>

          {/* REVERTED TO PREVIOUS PREMIUM DESIGN */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <IndianRupee className="mx-auto mb-6 text-blue-400" size={40} />
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  Pitch Your Partnership
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
                  Don't contact as a job seeker. If you have an idea that creates revenue or adds massive value to TestWise, we build together as partners.
                </p>
                <a 
                  href="mailto:partner@testwise.in" 
                  className="inline-block bg-blue-600 hover:bg-blue-500 transition-all text-white font-black px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] shadow-lg transform hover:scale-105"
                >
                  Email Your Proposal
                </a>
                
                <p className="mt-8 text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                  We share the growth, not just the tasks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MINIMAL FOOTER TAG */}
       
      </div>
      <Footer />
    </>
  );
}
