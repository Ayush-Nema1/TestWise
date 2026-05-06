'use client';
import React from 'react';
import { Mail, MessageSquare, MapPin, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Fottter';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 pb-20 font-sans">
        
        {/* HEADER */}
        <section className="py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-slate-900">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-medium">
            TestWise is a digital-first technology platform. We don't have physical clinics; 
            we exist everywhere through our technology.
          </p>
        </section>

        {/* CONTACT BOXES */}
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          
          {/* PARTNERSHIP ENQUIRIES */}
          <div className="p-10 border-2 border-slate-100 rounded-[2.5rem] hover:border-blue-200 transition-all group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-slate-900">Partnerships</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              For laboratory registrations, investor relations, or pharmaceutical brand listings.
            </p>
            <a href="mailto:partner@testwise.in" className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] underline decoration-2 underline-offset-4">
              partner@testwise.in
            </a>
          </div>

          {/* SUPPORT ENQUIRIES */}
          <div className="p-10 border-2 border-slate-100 rounded-[2.5rem] hover:border-emerald-200 transition-all group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-slate-900">Support</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              For booking assistance, technical feedback, or general platform enquiries.
            </p>
            <a href="mailto:hello@testwise.in" className="text-emerald-600 font-black text-sm uppercase tracking-[0.2em] underline decoration-2 underline-offset-4">
              hello@testwise.in
            </a>
          </div>

        </div>

        {/* EMERGENCY DISCLAIMER */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="text-red-500 bg-white p-4 rounded-full shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-red-900 font-black uppercase text-sm mb-1 tracking-widest">Medical Emergency?</h4>
              <p className="text-red-700/70 text-xs leading-relaxed">
                TestWise is an intermediary platform and does not provide clinical services. 
                In case of a medical emergency, please immediately call <strong>102</strong> or <strong>108</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* REGISTERED INFO */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            <MapPin size={12} /> Registered in India | A Pure Technology Conduit
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
