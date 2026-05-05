'use client'
import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  FlaskConical,
  Stethoscope,
  CreditCard,
  ShieldCheck,
  Package,
  AlertTriangle,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Fottter';

const faqs = [
  {
    category: 'General',
    icon: <HelpCircle size={20} />,
    color: 'blue',
    questions: [
      {
        q: 'What is TestWise?',
        a: 'TestWise is a technology intermediary platform that connects users with NABL/ISO-certified diagnostic laboratories. We do not conduct tests ourselves — we facilitate the booking process and help you find the right lab near you.',
      },
      {
        q: 'Is TestWise a hospital or diagnostic lab?',
        a: 'No. TestWise is purely a technology platform. All diagnostic tests are performed by our third-party partner laboratories. We do not employ doctors, nurses, or lab technicians.',
      },
      {
        q: 'Who can use TestWise?',
        a: 'Any individual aged 18 or above with a valid Indian mobile number can use TestWise. For minors, a parent or guardian must complete the booking.',
      },
    ],
  },
  {
    category: 'Lab Tests & Bookings',
    icon: <FlaskConical size={20} />,
    color: 'emerald',
    questions: [
      {
        q: 'How do I book a lab test?',
        a: "Simply search for your test, choose a partner lab near you, select a date and time slot, and complete the payment. You'll receive a booking confirmation via SMS and email.",
      },
      {
        q: 'Can I book a home sample collection?',
        a: "Yes, if the partner laboratory offers home collection, that option will be shown during checkout. Availability depends on your pin code and the selected lab.",
      },
      {
        q: 'How will I receive my test reports?',
        a: 'Reports are delivered digitally — directly from the partner laboratory to your registered email or phone number. TestWise acts as a passive conduit and does not read or modify reports.',
      },
      {
        q: 'Can TestWise interpret my lab report?',
        a: 'No. TestWise does not provide medical interpretation of any kind. All reports must be reviewed by a Registered Medical Practitioner (RMP). Please consult your doctor for any clarification on your results.',
      },
    ],
  },
  {
    category: 'Medicine Comparison',
    icon: <Stethoscope size={20} />,
    color: 'orange',
    questions: [
      {
        q: 'What is the medicine comparison feature?',
        a: 'Our medicine comparison engine matches drug compositions based on pharmaceutical data to help you find affordable alternatives with similar salt compositions.',
      },
      {
        q: 'Can I switch medicines based on TestWise suggestions?',
        a: 'Absolutely not. The comparison tool is for informational purposes only. Never switch, stop, or alter your medication without consulting a licensed doctor. Two medicines with identical salts can behave differently in individual patients.',
      },
      {
        q: 'Does TestWise sell or dispense medicines?',
        a: 'No. TestWise does not sell, dispense, or recommend any medicines. We are not a pharmacy or medical supplier of any kind.',
      },
    ],
  },
  {
    category: 'Payments & Refunds',
    icon: <CreditCard size={20} />,
    color: 'purple',
    questions: [
      {
        q: 'What payment methods are accepted?',
        a: 'Payment methods depend entirely on the laboratory you select. Each lab sets its own accepted modes — commonly cash, UPI, card, or other options at their counter. TestWise does not collect, process, or interfere with any payment between you and the lab.',
      },
      {
        q: 'How do I get a refund if the test is cancelled?',
        a: "Refunds are governed by the individual laboratory's cancellation policy. If you cancel within the allowed window, TestWise will assist in processing your refund request. Final responsibility lies with the partner lab.",
      },
      {
        q: 'Will the lab provide a payment confirmation or receipt?',
        a: 'Payment confirmation and receipts are entirely the responsibility of the laboratory. Most labs do provide one, but TestWise has no visibility or control over this. We only generate an Order ID for your booking — if you do not receive a receipt, you can use your Order ID to follow up with the lab directly. TestWise does not issue, store, or guarantee any payment receipt.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    icon: <ShieldCheck size={20} />,
    color: 'teal',
    questions: [
      {
        q: 'Does TestWise store my medical reports?',
        a: 'No. We follow a Strict Non-Storage Policy for health data. Your final diagnostic reports are not stored permanently on TestWise servers.',
      },
      {
        q: 'Is my personal data safe?',
        a: "We collect only the minimum data required: name, age, gender, contact details, and transaction info. We comply with India's Digital Personal Data Protection (DPDP) Act 2023.",
      },
      {
        q: 'What should I do in a medical emergency?',
        a: 'Do NOT use TestWise in an emergency. Call 102 (ambulance) or 108 (emergency helpline) immediately, or go to the nearest hospital. TestWise is not designed for urgent or emergency care.',
      },
    ],
  },
];

const colorMap = {
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    icon: 'text-blue-600 bg-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    chevron: 'text-blue-600',
  },
  emerald: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600 bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    chevron: 'text-emerald-600',
  },
  orange: {
    border: 'border-orange-500',
    bg: 'bg-orange-50',
    icon: 'text-orange-600 bg-orange-100',
    badge: 'bg-orange-100 text-orange-700',
    chevron: 'text-orange-600',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-50',
    icon: 'text-purple-600 bg-purple-100',
    badge: 'bg-purple-100 text-purple-700',
    chevron: 'text-purple-600',
  },
  teal: {
    border: 'border-teal-500',
    bg: 'bg-teal-50',
    icon: 'text-teal-600 bg-teal-100',
    badge: 'bg-teal-100 text-teal-700',
    chevron: 'text-teal-600',
  },
};

function AccordionItem({ question, answer, color }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[color];

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? `border-l-4 ${c.border} shadow-md` : 'border-slate-200'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-[#0F3B73] text-sm md:text-base leading-snug">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-300 ${c.chevron} ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className={`px-6 pb-6 pt-1 text-sm md:text-base text-gray-600 leading-relaxed ${c.bg} border-t border-slate-100`}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 pb-20">

        {/* HERO */}
        <section className="bg-gradient-to-r from-[#0F3B73] to-blue-800 py-20 px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-blue-200">
            <HelpCircle size={14} /> Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base font-medium">
            Everything you need to know about TestWise — our platform, services, and policies.
          </p>
        </section>

        {/* EMERGENCY STRIP */}
        <div className="bg-red-600 text-white py-3 px-6 text-center text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <AlertTriangle size={16} />
          Medical Emergency? Call 102 / 108 — Do NOT use TestWise for emergencies.
        </div>

        <div className="max-w-4xl mx-auto py-16 px-6 space-y-16">

          {faqs.map((section) => {
            const c = colorMap[section.color];
            return (
              <div key={section.category}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.icon}`}>
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-extrabold text-[#0F3B73] uppercase tracking-tight">
                    {section.category}
                  </h2>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ml-1 ${c.badge}`}>
                    {section.questions.length} Questions
                  </span>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {section.questions.map((item, i) => (
                    <AccordionItem
                      key={i}
                      question={item.q}
                      answer={item.a}
                      color={section.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {/* STILL NEED HELP */}
          <section className="bg-slate-900 text-white rounded-[3rem] p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <Package className="mx-auto mb-4 text-blue-400" size={36} />
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Still have questions?</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                Couldn't find what you were looking for? Reach out to our support team and we'll get back to you.
              </p>
              <a
                href="mailto:support@testwise.in"
                className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest"
              >
                Contact Support
              </a>
            </div>
          </section>

          {/* FOOTER NOTE */}
          <div className="pt-8 border-t text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
              TestWise FAQ | Last Updated May 2024 | © TestWise Intermediary Platform
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}