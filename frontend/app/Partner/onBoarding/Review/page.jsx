"use client";
import React, { useState } from "react";
import { ClipboardCheck, CheckCircle2, Building2, MapPin, FlaskConical, Clock, IndianRupee, FileCheck } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { StepCard, NavButtons } from "../Lab-Info/page";

export default function ReviewPage() {
  const { formData, goPrev } = useOnboarding();
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const sections = [
    { icon: <Building2 size={18} />, label: "Lab Info", data: formData.labInfo, fields: ["labName", "ownerName", "phone", "email", "labType", "homeCollection"] },
    { icon: <MapPin size={18} />, label: "Address", data: formData.address, fields: ["addressLine1", "city", "state", "pincode"] },
    { icon: <FlaskConical size={18} />, label: "Services", data: null, custom: formData.services ? `${Object.values(formData.services.selected || {}).flat().length + (formData.services.customList?.length || 0)} tests selected` : "Not filled" },
    { icon: <Clock size={18} />, label: "Timings", data: null, custom: formData.timings ? "Schedule configured" : "Not filled" },
    { icon: <IndianRupee size={18} />, label: "Pricing", data: null, custom: formData.pricing ? `${formData.pricing.tests?.filter(t => t.name).length || 0} tests priced` : "Not filled" },
    { icon: <FileCheck size={18} />, label: "Documents", data: null, custom: formData.documents ? `${Object.keys(formData.documents).length} documents uploaded` : "Not filled" },
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-16 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F3B73] mb-3">Submitted Successfully!</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
            Your lab onboarding request has been received. Our team will verify your documents and get in touch within <strong>2–3 business days</strong>.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-left space-y-2">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">What Happens Next?</p>
            <ul className="text-xs text-slate-500 space-y-1.5">
              <li>✅ Document verification by TestWise team</li>
              <li>✅ Lab listing review and approval</li>
              <li>✅ Your lab goes live on TestWise platform</li>
              <li>✅ You start receiving booking requests</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-6">For queries: <span className="text-[#0F3B73] font-bold">partner@testwise.in</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <StepCard
        icon={<ClipboardCheck size={26} className="text-[#0F3B73]" />}
        title="Review & Submit"
        subtitle="Review all details before final submission"
      >
        <div className="space-y-3 mb-8">
          {sections.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-9 h-9 bg-[#0F3B73] rounded-xl flex items-center justify-center text-white shrink-0">
                {s.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#0F3B73]">{s.label}</p>
                {s.data ? (
                  <div className="flex flex-wrap gap-x-6 gap-y-0.5 mt-1">
                    {s.fields?.filter(f => s.data[f]).map((f) => (
                      <span key={f} className="text-xs text-slate-500">{s.data[f]}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 mt-0.5">{s.custom}</p>
                )}
              </div>
              <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
            </div>
          ))}
        </div>

        {/* Agreement */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 accent-blue-600 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-600 leading-relaxed">
              I confirm that all the information provided is accurate and complete. I agree to TestWise's{" "}
              <a href="/Terms&Conditions" className="text-[#0F3B73] font-bold underline">Terms & Conditions</a> and{" "}
              <a href="/PrivacyPolicy" className="text-[#0F3B73] font-bold underline">Privacy Policy</a>.
              I understand that TestWise is a technology intermediary and all diagnostic services will be provided by my lab independently.
            </p>
          </label>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-100">
          <button onClick={goPrev}
            className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition">
            ← Back
          </button>
          <button
            onClick={() => agreed && setSubmitted(true)}
            disabled={!agreed}
            className={`flex items-center gap-2 font-bold px-8 py-3 rounded-xl text-sm transition
              ${agreed ? "bg-green-600 hover:bg-green-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
            <CheckCircle2 size={16} /> Submit Onboarding
          </button>
        </div>
      </StepCard>
    </div>
  );
}