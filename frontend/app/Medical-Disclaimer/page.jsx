import React from 'react';
import { 
  Stethoscope, 
  ShieldAlert, 
  FlaskConical, 
  HeartPulse, 
  AlertTriangle, 
  Info, 
  UserRoundCheck, 
  Microscope,
  ShieldX
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Fottter';

export default function MedicalDisclaimer() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 pb-20">
        
        {/* HERO HEADER */}
        <section className="bg-gradient-to-r from-[#0F3B73] to-blue-800 py-20 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Medical Disclaimer</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium">
            Essential Clinical Boundaries and Liability Disclosures
          </p>
        </section>

        <div className="max-w-6xl mx-auto py-12 px-6">
          
          {/* PRIMARY SAFETY BANNER */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-blue-900/5">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-[#0F3B73] rounded-3xl rotate-3 flex items-center justify-center shadow-2xl shadow-blue-900/20">
                    <ShieldX className="text-white -rotate-3" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Intermediary Notice</span>
                    <h2 className="text-3xl font-extrabold text-[#0F3B73] tracking-tight">Not a Healthcare Provider</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium italic">
                      "TestWise is a technology aggregator. We provide the digital bridge to diagnostics; we do not provide the diagnostics themselves."
                    </p>
                    <div className="bg-red-50 border border-red-100 p-8 rounded-[2rem]">
                      <div className="flex items-center gap-3 mb-3 text-red-600">
                        <AlertTriangle size={24} />
                        <span className="font-black text-sm uppercase tracking-widest">Emergency Critical Warning</span>
                      </div>
                      <p className="text-xl md:text-2xl text-[#0F3B73] font-black leading-snug">
                        TestWise is <span className="text-red-600 underline">NOT for Emergency Use.</span> If you are facing a life-threatening situation, call 102/108 or visit a hospital immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space-y-20 max-w-5xl mx-auto">
            
            {/* 1. NO DOCTOR-PATIENT RELATIONSHIP */}
            <section className="border-l-4 border-blue-600 pl-8">
              <h2 className="text-2xl font-bold text-[#0F3B73] mb-5 flex items-center gap-3 uppercase tracking-tight">
                <UserRoundCheck size={26} className="text-blue-600" /> 1. Absence of Clinical Relationship
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Accessing the TestWise platform does <strong>not</strong> constitute a doctor-patient relationship, a nurse-patient relationship, or any other professional healthcare relationship. 
                </p>
                <p className="text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                  TestWise does not employ medical professionals to provide consultations. All laboratory services are executed by <b>Independent Third-Party Laboratories</b> who carry their own professional indemnity.
                </p>
              </div>
            </section>

            {/* 2. LAB REPORT INTERPRETATION */}
            <section className="border-l-4 border-emerald-600 pl-8 bg-emerald-50/20 py-10 pr-10 rounded-r-[3rem]">
              <h2 className="text-2xl font-bold text-[#0F3B73] mb-5 flex items-center gap-3 uppercase tracking-tight">
                <Microscope size={26} className="text-emerald-600" /> 2. Data Neutrality & Interpretations
              </h2>
              <div className="space-y-6 text-sm md:text-base text-gray-700">
                <p>TestWise acts as a <b>Passive Conduit</b> for medical reports. To ensure clinical integrity, we expressly state that we do not:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex gap-2 items-start"><span className="text-emerald-600 font-bold">•</span> Review findings for medical accuracy.</li>
                  <li className="flex gap-2 items-start"><span className="text-emerald-600 font-bold">•</span> Provide opinions on biological reference ranges.</li>
                  <li className="flex gap-2 items-start"><span className="text-emerald-600 font-bold">•</span> Verify the credentials of laboratory technicians.</li>
                  <li className="flex gap-2 items-start"><span className="text-emerald-600 font-bold">•</span> Interfere with the final diagnostic output.</li>
                </ul>
                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm mt-4">
                  <p className="font-black text-emerald-900 leading-relaxed">
                    MANDATORY: Final reports must be interpreted only by a Registered Medical Practitioner (RMP). Do not attempt to self-treat based on lab values.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. MEDICINE THEORY DISCLAIMER */}
            <section className="mt-16">
              <div className="bg-white border-2 border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="bg-[#0F3B73] px-10 py-6 flex items-center gap-3">
                  <FlaskConical className="text-white" size={28} />
                  <h2 className="text-xl font-bold text-white uppercase tracking-widest">3. Pharmaceutical Information Theory</h2>
                </div>
                <div className="p-10 space-y-8">
                  <p className="text-base text-gray-600 leading-relaxed italic">
                    "Our medicine comparison engine is a mathematical algorithm matching chemical compositions based on theoretical pharmaceutical data."
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <h4 className="font-bold text-[#0F3B73] mb-3 flex items-center gap-2">
                        <Info size={18} className="text-blue-500" /> Technical Limitations
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Composition matching does not account for manufacturing excipients, bioavailability, or shelf-stability variances between brands.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <h4 className="font-bold text-[#0F3B73] mb-3 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-orange-500" /> Clinical Variance
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Two medicines with identical salt compositions may behave differently in individual patients based on history and genetics.</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-8 border-orange-500 p-8 rounded-r-2xl shadow-inner">
                    <h4 className="text-orange-800 font-black mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                      <Stethoscope size={20} /> Professional Directive
                    </h4>
                    <p className="text-sm text-orange-900 leading-relaxed font-bold uppercase">
                      TESTWISE NEITHER DISPENSES NOR RECOMMENDS MEDICINES. ALWAYS CONSULT YOUR DOCTOR BEFORE SWITCHING BRANDS OR ALTERING DOSAGES.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. TOTAL LIABILITY WAIVER */}
            <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-5 blur-[100px] group-hover:opacity-10 transition-opacity"></div>
               <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-blue-400">4. Assumption of Risk & Waiver</h2>
               <div className="space-y-6">
                 <p className="text-base md:text-lg leading-relaxed opacity-80 font-light">
                   By utilizing the TestWise platform, the User acknowledges a total assumption of risk. TestWise, its parent company, and its affiliates expressly disclaim liability for:
                 </p>
                 <ul className="grid md:grid-cols-2 gap-6 text-sm">
                   <li className="flex gap-3 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Clinical errors or report inaccuracies.
                   </li>
                   <li className="flex gap-3 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Delayed diagnostics leading to health deterioration.
                   </li>
                   <li className="flex gap-3 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Adverse reactions from self-medication.
                   </li>
                   <li className="flex gap-3 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Misinterpretation of pharmaceutical data.
                   </li>
                 </ul>
               </div>
            </section>

            <div className="pt-12 border-t flex flex-col items-center gap-4 text-center">
              <p className="text-[10px] text-gray-400 max-w-2xl leading-relaxed uppercase tracking-[0.3em] font-bold">
                Certified Legal Disclaimer | Last Updated May 2024 | © TestWise Intermediary Platform
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
