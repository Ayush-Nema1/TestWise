import React from 'react';
import { ShieldCheck, EyeOff, Lock, Database, Info, FileText } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fottter";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* HERO HEADER */}
        <section className="bg-[#0F3B73] py-16 px-6 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
            Your privacy is our priority. Learn how TestWise handles information with transparency and integrity.
          </p>
        </section>

        <div className="max-w-4xl mx-auto py-12 px-6">
          {/* KEY PRIVACY HIGHLIGHTS */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100">
              <EyeOff className="text-blue-600 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-[#0F3B73]">Zero Interference</h3>
                <p className="text-xs text-gray-600 mt-1">We do not read, alter, or interfere with laboratory test reports.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-green-50 rounded-xl border border-green-100">
              <Database className="text-green-600 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-green-700">No Medical Storage</h3>
                <p className="text-xs text-gray-600 mt-1">We do not store your sensitive medical history or reports on our servers permanently.</p>
              </div>
            </div>
          </div>

          {/* POLICY CONTENT */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed text-gray-700">
            
            <section>
              <h2 className="text-xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-blue-600" /> 1. Introduction
              </h2>
              <p>
                TestWise ("we," "us," or "our") operates as a technology intermediary. This Privacy Policy explains how we manage user data when you use our platform to connect with diagnostic laboratories or research medicine compositions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> 2. Data We Do NOT Collect
              </h2>
              <p className="mb-3">
                To protect your medical integrity, TestWise follows a <strong>Strict Non-Storage Policy</strong> for health data:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>We do not store your final diagnostic reports on our permanent database.</li>
                <li>We do not record your personal medical history or chronic conditions.</li>
                <li>We do not interfere with the data sent from the partner laboratory to the user.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
                <Lock size={20} className="text-blue-600" /> 3. Data We Collect & How We Use It
              </h2>
              <p className="mb-3">We only collect basic information necessary to facilitate your booking and provide a seamless experience:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li><strong>Identity Data:</strong> Name, age, and gender (required by labs for test accuracy).</li>
                <li><strong>Contact Data:</strong> Phone number and email for sending booking confirmations and report links.</li>
                <li><strong>Booking Data:</strong> The laboratory you selected and the test(s) you booked, along with the amount associated with your order. We do not store how, when, where, or through what method the payment was made. No card, bank, or transaction details are collected or stored by TestWise.</li>
              </ul>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
                <Info size={20} className="text-blue-600" /> 4. Third-Party Lab Privacy
              </h2>
              <p className="text-sm">
                Since TestWise is an intermediary, once your data is shared with a partner laboratory for a test, their own privacy policy applies to that data. We only partner with NABL/ISO certified labs that maintain high data-security standards, but we encourage you to review the privacy terms of the specific lab you choose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
                 5. Medicine Search & Composition Data
              </h2>
              <p>
                When you search for medicines or cheaper alternatives, your search queries are used anonymously to improve our database. We do not link your medicine searches to your identity or share them with third parties for marketing purposes.
              </p>
            </section>

            <section className="border-t pt-8">
              <p className="text-xs text-gray-500 text-center">
                Last Updated: May 2024. TestWise reserves the right to update this policy to comply with Indian Data Protection Laws (DPDP Act 2023).
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}