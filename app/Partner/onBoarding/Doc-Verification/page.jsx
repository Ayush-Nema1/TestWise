"use client";
import React, { useState, useRef } from "react";
import { FileCheck, Upload, CheckCircle2, X, File } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { StepCard, NavButtons } from "../Lab-Info/page";

const requiredDocs = [
  { id: "nabl", label: "NABL / ISO Certificate", desc: "Accreditation certificate from NABL or ISO body", required: true },
  { id: "gst", label: "GST Registration Certificate", desc: "Valid GST number document", required: true },
  { id: "pan", label: "PAN Card (Lab / Owner)", desc: "PAN card of lab or proprietor", required: true },
  { id: "drug", label: "Drug License", desc: "License issued by State Drug Authority", required: false },
  { id: "reg", label: "Lab Registration Certificate", desc: "State/Municipal body registration", required: false },
  { id: "owner_id", label: "Owner ID Proof", desc: "Aadhaar / Passport / Voter ID of owner", required: true },
];

export default function DocVerificationPage() {
  const { goNext, goPrev, updateFormData } = useOnboarding();
  const [docs, setDocs] = useState({});
  const refs = useRef({});

  const handleFile = (id, file) => {
    if (!file) return;
    setDocs((prev) => ({
      ...prev,
      [id]: { file, name: file.name, url: URL.createObjectURL(file) },
    }));
  };

  const removeDoc = (id) =>
    setDocs((prev) => { const n = { ...prev }; delete n[id]; return n; });

  const allRequired = requiredDocs.filter((d) => d.required).every((d) => docs[d.id]);

  const handleSubmit = () => {
    updateFormData("documents", docs);
    goNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepCard
        icon={<FileCheck size={26} className="text-[#0F3B73]" />}
        title="Document Verification"
        subtitle="Upload required documents for lab verification"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 mb-6 text-xs text-amber-700 font-semibold">
          ⚠️ All marked <span className="text-red-500">*</span> documents are mandatory. Your lab goes live only after verification.
        </div>

        <div className="space-y-4">
          {requiredDocs.map((doc) => {
            const uploaded = docs[doc.id];
            return (
              <div key={doc.id}
                className={`flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl border-2 transition-all
                  ${uploaded ? "border-green-200 bg-green-50/30" : "border-slate-100 bg-white"}`}>

                {/* Doc Info */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-700">
                    {doc.label} {doc.required && <span className="text-red-500">*</span>}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{doc.desc}</p>
                  {uploaded && (
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span className="text-xs text-green-600 font-semibold truncate max-w-[200px]">{uploaded.name}</span>
                    </div>
                  )}
                </div>

                {/* Upload / Remove */}
                <div className="flex items-center gap-3 shrink-0">
                  {uploaded ? (
                    <>
                      <a href={uploaded.url} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-blue-600 font-bold hover:underline">
                        <File size={14} /> Preview
                      </a>
                      <button onClick={() => removeDoc(doc.id)}
                        className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-400 flex items-center justify-center transition">
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => refs.current[doc.id]?.click()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0F3B73] hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition">
                      <Upload size={14} /> Upload
                    </button>
                  )}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    ref={(el) => (refs.current[doc.id] = el)}
                    onChange={(e) => handleFile(doc.id, e.target.files[0])}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {!allRequired && (
          <p className="text-xs text-red-400 font-semibold mt-4">
            * Please upload all mandatory documents to proceed.
          </p>
        )}

        <NavButtons
          onNext={handleSubmit}
          onPrev={goPrev}
          nextLabel={allRequired ? "Save & Continue" : "Skip for Now"}
        />
      </StepCard>
    </div>
  );
}