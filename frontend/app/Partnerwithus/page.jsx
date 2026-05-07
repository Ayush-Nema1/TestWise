'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FlaskConical,
  Pill,
  ArrowRight,
  CheckCircle2,
  X,
  Building2,
  IndianRupee,
  Send,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Fottter';

const partnerTypes = [
  {
    id: 'lab',
    icon: <FlaskConical size={36} />,
    tag: 'For Laboratories',
    title: 'Register Your Lab',
    subtitle: 'Become a TestWise Partner',
    description:
      'List your NABL/ISO certified laboratory on TestWise and get discovered by thousands of patients in your city. We bring the bookings — you deliver the service.',
    benefits: [
      'Increased patient footfall through digital discovery',
      'Zero interference in your lab operations',
      'You handle all payments directly with patients',
      'Your reports, your process — we only facilitate bookings',
    ],
    color: 'blue',
    gradient: 'from-blue-600 to-blue-800',
    border: 'border-blue-200',
    redirectRoute: '/Partner/onBoarding/Lab-Info', 
  },
  {
    id: 'brand',
    icon: <Pill size={36} />,
    tag: 'For Medicine Brands',
    title: 'List Your Brand',
    subtitle: 'Add Your Medicines to TestWise',
    description:
      'Get your pharmaceutical brand and medicine compositions listed on our comparison engine. Help patients discover your products alongside accurate composition data.',
    benefits: [
      'Appear in medicine composition searches across the platform',
      'Purely informational listing — no sales or dispensing involved',
      'Reach health-conscious users actively researching medicines',
      'Data accuracy verified before listing',
    ],
    color: 'orange',
    gradient: 'from-orange-500 to-rose-600',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100 text-orange-600',
    formTitle: 'Medicine Brand Listing',
    fields: [
      { label: 'Brand / Company Name', type: 'text', placeholder: 'e.g. ABC Pharma Ltd.' },
      { label: 'Contact Person', type: 'text', placeholder: 'Full name' },
      { label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
      { label: 'Email Address', type: 'email', placeholder: 'brand@example.com' },
      { label: 'Drug License Number', type: 'text', placeholder: 'License ID' },
      { label: 'Medicines to List', type: 'textarea', placeholder: 'List key medicines or salt compositions...' },
    ],
  },
];

function FormModal({ partner, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <div className={`bg-gradient-to-r ${partner.gradient} px-8 py-6 rounded-t-[2rem] flex items-center justify-between`}>
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-1">{partner.tag}</p>
            <h3 className="text-white text-xl font-extrabold">{partner.formTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="space-y-4 mb-6">
                {partner.fields?.map((field, i) =>
                  field.type === 'textarea' ? (
                    <div key={i}>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        {field.label}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={field.placeholder}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                      />
                    </div>
                  ) : (
                    <div key={i}>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  )
                )}
              </div>

              <p className="text-[10px] text-slate-400 leading-relaxed mb-5">
                By submitting this form, you agree that TestWise may contact you regarding your partnership enquiry.
              </p>

              <button
                onClick={handleSubmit}
                className={`w-full bg-gradient-to-r ${partner.gradient} text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition`}
              >
                <Send size={16} /> Submit Enquiry
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div className={`w-16 h-16 ${partner.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <CheckCircle2 size={32} className={`text-${partner.color}-600`} />
              </div>
              <h4 className="text-xl font-extrabold text-[#0F3B73] mb-2">Enquiry Received!</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Thank you for your interest. Our team will review your details and get back to you soon.
              </p>
              <button
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl text-sm transition"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PartnerWithUs() {
  const [activeModal, setActiveModal] = useState(null);
  const router = useRouter(); 

  const activePartner = partnerTypes.find((p) => p.id === activeModal);

  return (
    <div className="min-h-screen bg-[#F0F4FA] flex flex-col">
      <Navbar />
      
      <div className="flex-1 pb-20">
        
        {/* MINIMAL HEADER */}
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 rounded-full px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-[#0F3B73]">
            <Building2 size={14} /> Partner Portal
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F3B73] mb-4 tracking-tight">
            Partner With TestWise
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Join India's most trusted diagnostic platform. Select your business type below to get started.
          </p>
        </div>

        {/* 2 CARDS (CENTERED) */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerTypes.map((partner) => (
              <div
                key={partner.id}
                className={`relative border-2 bg-white ${partner.border} rounded-[2rem] overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Card Top */}
                <div className={`bg-gradient-to-br ${partner.gradient} px-8 pt-10 pb-12 text-white relative`}>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-white rounded-t-[2rem]" />
                  <div className="mb-5 opacity-90">{partner.icon}</div>
                  <h3 className="text-2xl font-extrabold leading-tight">{partner.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{partner.subtitle}</p>
                </div>

                {/* Card Body */}
                <div className="px-8 pb-8 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {partner.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={18} className={`text-${partner.color}-500 shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (partner.redirectRoute) {
                        router.push(partner.redirectRoute);
                      } else {
                        setActiveModal(partner.id);
                      }
                    }}
                    className={`w-full bg-gradient-to-r ${partner.gradient} text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition group-hover:scale-[1.02] duration-200 shadow-md`}
                  >
                    Get Started <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTACT STRIP */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0F3B73] rounded-[2rem] p-10 text-center text-white relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <IndianRupee className="mx-auto mb-3 text-blue-300" size={32} />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Are you an Investor?</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                If you are looking to invest in TestWise or have a different partnership proposal, reach out to our founding team.
              </p>
              <a
                href="mailto:founders@testwise.in"
                className="inline-block bg-white text-[#0F3B73] hover:bg-slate-50 transition font-extrabold px-8 py-3.5 rounded-full text-sm uppercase tracking-widest shadow-sm"
              >
                Email Founders
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            TestWise Partnerships | © 2026 TestWise
          </p>
        </div>
      </div>

      {/* MODAL */}
      {activeModal && activePartner && (
        <FormModal partner={activePartner} onClose={() => setActiveModal(null)} />
      )}

      <Footer />
    </div>
  );
}