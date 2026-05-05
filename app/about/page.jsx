import React from 'react';
import { ShieldCheck, Target, Zap, Heart, Search, BadgeIndianRupee, Pill, ArrowLeftRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Fottter';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0F3B73] to-blue-800 py-20 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Empowering Better Health Choices</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            TestWise is India’s smart technology bridge connecting you with verified diagnostics and intelligent medicine insights.
          </p>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0F3B73] mb-6 text-left">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At <strong>TestWise</strong>, we believe that health diagnostics should be accessible, transparent, and hassle-free. We are not a laboratory or a pharmacy, but a specialized <b>Technology Platform</b> designed to simplify your medical journey.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We bring together trusted NABL/ISO labs and smart medicine comparison tools under one digital roof, allowing you to save both time and money on your healthcare needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-sm text-gray-500 font-medium">Partner Labs</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-green-600">10k+</h3>
              <p className="text-sm text-gray-500 font-medium">Users Served</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-orange-600">500+</h3>
              <p className="text-sm text-gray-500 font-medium">Test Types</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-purple-600">24/7</h3>
              <p className="text-sm text-gray-500 font-medium">Support</p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: SMART MEDICINE INSIGHTS */}
        <section className="bg-slate-50 py-16 px-6 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F3B73] mb-4">Smart Medicine Insights</h2>
              <p className="text-gray-500">Helping you understand your prescriptions better.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 flex gap-5 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <BadgeIndianRupee className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-900">Cheaper Alternatives</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Healthcare can be expensive. Our smart search helps you find generic or branded alternatives with the <strong>same composition</strong>, ensuring you get the best treatment at a fraction of the cost.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-50 flex gap-5 items-start">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <ArrowLeftRight className="text-green-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-green-900">Comparison Tool</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Confused between two medicines? Use our comparison engine to match compositions, dosages, and prices side-by-side to make an informed decision for your wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES (Reduced spacing to keep flow) */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0F3B73] mb-12">Why Choose TestWise?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-50 p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Strict Verification</h4>
                <p className="text-sm text-gray-500 text-left">We only partner with NABL/ISO labs, ensuring high quality standards in every report.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Fast & Seamless</h4>
                <p className="text-sm text-gray-500 text-left">Book tests in 2 minutes and get digital reports delivered directly to your device.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-orange-600" />
                </div>
                <h4 className="font-bold mb-2">Diagnostic Comparison</h4>
                <p className="text-sm text-gray-500 text-left">Compare prices across multiple labs side-by-side to find the best value for your health.</p>
              </div>
            </div>
          </div>
        </section>

        {/* UPDATED LEGAL DISCLAIMER SECTION */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center border-t border-gray-100">
          <h2 className="text-2xl font-bold text-[#0F3B73] mb-6">Legal Disclaimer</h2>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <p className="text-gray-600 text-xs leading-relaxed mb-6 max-w-4xl mx-auto italic">
              "TestWise is a technology intermediary. We do not operate medical laboratories, nor do we sell, dispense, or prescribe any medications. Our medicine comparison and alternative tool is for informational purposes only and is based on publicly available data. It should not be treated as medical advice. Always consult a qualified physician or licensed pharmacist before changing or starting any medication. We do not provide services for emergency medical situations."
            </p>
            <button className="bg-[#0F3B73] text-white px-10 py-3.5 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg">
              Partner With Us
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
