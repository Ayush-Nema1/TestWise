"use client";

import React from "react";
import {
  ShieldAlert,
  AlertTriangle,
  FlaskConical,
  Scale,
  Stethoscope,
  UserCheck,
  Ban,
  Gavel,
  Lock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fottter";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-800 pb-20">
        
        {/* HEADER */}
        <section className="bg-gradient-to-r from-[#0F3B73] to-blue-800 py-20 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-blue-100">
            Legally Binding Agreement for TestWise Platform
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
              <Scale /> 1. Intermediary Role
            </h2>
            <p className="text-gray-600">
              TestWise is a technology platform acting as an intermediary under
              the Information Technology Act, 2000. We only facilitate booking
              of diagnostic tests from third-party laboratories.
            </p>
            <p className="text-gray-600 mt-2">
              We do not conduct tests, provide medical advice, or control lab
              operations. All services are provided solely by partner laboratories.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
              <UserCheck /> 2. User Responsibility
            </h2>
            <p className="text-gray-600">
              Users must be 18+ and provide accurate information. You are
              responsible for your account and any activity under it.
            </p>
          </section>

          {/* 3 — FIXED */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
              <AlertTriangle /> 3. Payments & Refunds
            </h2>
            <p className="text-gray-600">
              All payments are made directly between the User and the Laboratory.
              TestWise does not collect, hold, or process funds on behalf of any party.
            </p>
            <p className="text-gray-600 mt-2">
              Refunds are governed solely by the individual laboratory's cancellation
              and refund policy. TestWise may assist in facilitating communication
              with the lab, but bears no financial liability and cannot guarantee
              the issuance of any refund.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
              <Gavel /> 4. Liability
            </h2>
            <p className="text-gray-600">
              Laboratories are fully responsible for test accuracy, reports,
              technicians, and service delivery.
            </p>
            <p className="text-gray-600 mt-2">
              TestWise shall not be liable for any indirect or consequential
              damages including medical complications, delays, or inaccuracies
              in reports.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4 flex items-center gap-2">
              <Lock /> 5. Data & Conduct
            </h2>
            <p className="text-gray-600">
              User data may be shared with laboratories for service fulfillment.
              Users must not misuse the platform or provide false information.
            </p>
          </section>

          {/* 6 */}
          <section>
            <div className="border rounded-2xl overflow-hidden">
              <div className="bg-[#0F3B73] text-white px-6 py-4 flex items-center gap-2">
                <FlaskConical /> Medicine Disclaimer
              </div>
              <div className="p-6 text-gray-600 text-sm space-y-3">
                <p>
                  The information provided through this comparison tool is for
                  informational purposes only and does not constitute medical advice.
                </p>
                <p>
                  TestWise does not guarantee safety, effectiveness, or equivalence
                  of alternative medicines.
                </p>
                <p>
                  Users must consult a Registered Medical Practitioner before
                  making any changes.
                </p>
                <p className="font-semibold">
                  TestWise is not liable for any adverse effects or medical issues.
                </p>
              </div>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4">
              7. Indemnification
            </h2>
            <p className="text-gray-600">
              Users agree to indemnify and hold TestWise harmless from any claims,
              losses, or disputes arising from platform use or lab services.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4">
              8. Force Majeure
            </h2>
            <p className="text-gray-600">
              TestWise is not liable for delays due to events beyond control such
              as natural disasters, strikes, or technical failures.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4">
              9. Account Termination
            </h2>
            <p className="text-gray-600">
              Accounts may be suspended or terminated in case of fraud, misuse,
              or violation of terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0F3B73] mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600">
              These terms are governed by the laws of India. Disputes will fall
              under the jurisdiction of courts in your operating city.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}