"use client";
import React, { useState } from "react";
import { Building2, ArrowRight } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";

export default function LabInfoPage() {
  const { goNext, updateFormData } = useOnboarding();
  const [form, setForm] = useState({
    labName: "", ownerName: "", phone: "", email: "",
    labType: "", homeCollection: "", about: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    updateFormData("labInfo", form);
    goNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepCard
        icon={<Building2 size={26} className="text-[#0F3B73]" />}
        title="Lab Information"
        subtitle="Add your lab basic information"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Lab Name" required>
            <input name="labName" value={form.labName} onChange={handleChange}
              placeholder="Enter lab name"
              className={inputCls} />
          </Field>
          <Field label="Owner Name" required>
            <input name="ownerName" value={form.ownerName} onChange={handleChange}
              placeholder="Enter owner name"
              className={inputCls} />
          </Field>
          <Field label="Phone Number" required>
            <input name="phone" value={form.phone} onChange={handleChange}
              placeholder="Enter phone number" type="tel"
              className={inputCls} />
          </Field>
          <Field label="Email Address" required>
            <input name="email" value={form.email} onChange={handleChange}
              placeholder="Enter email address" type="email"
              className={inputCls} />
          </Field>
          <Field label="Lab Type" required>
            <select name="labType" value={form.labType} onChange={handleChange} className={inputCls}>
              <option value="">Select lab type</option>
              <option>Pathology Lab</option>
              <option>Radiology / Imaging Center</option>
              <option>Multispecialty Diagnostic Center</option>
              <option>Cardiology Lab</option>
              <option>Microbiology Lab</option>
              <option>Genetic Testing Lab</option>
            </select>
          </Field>
          <Field label="Home Collection">
            <select name="homeCollection" value={form.homeCollection} onChange={handleChange} className={inputCls}>
              <option value="">Select option</option>
              <option>Yes — Available</option>
              <option>No — Not Available</option>
              <option>Coming Soon</option>
            </select>
          </Field>
          <Field label="About Your Lab" className="md:col-span-2">
            <textarea name="about" value={form.about} onChange={handleChange}
              rows={4} placeholder="Write a short description about your lab..."
              className={inputCls + " resize-none"} />
          </Field>
        </div>

        <NavButtons onNext={handleSubmit} showPrev={false} />
      </StepCard>
    </div>
  );
}

// ── Shared helpers ──────────────────────────────────────────
export const inputCls =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition";

export function Field({ label, required, children, className = "" }) {
  return (
    <div className={className}>
      {/* Bas yahan text-slate-500 ko text-slate-900 kar diya hai */}
      <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export function StepCard({ icon, title, subtitle, children }) {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-[#0F3B73]">{title}</h2>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}

export function NavButtons({ onNext, onPrev, showPrev = true, nextLabel = "Save & Continue" }) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
      {showPrev ? (
        <button onClick={onPrev}
          className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition">
          ← Back
        </button>
      ) : <div />}
      <button onClick={onNext}
        className="flex items-center gap-2 bg-[#0F3B73] hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl text-sm transition">
        {nextLabel} <ArrowRight size={16} />
      </button>
    </div>
  );
}