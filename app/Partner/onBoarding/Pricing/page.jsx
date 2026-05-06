"use client";
import React, { useState } from "react";
import { IndianRupee, Plus, Trash2 } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { inputCls, Field, StepCard, NavButtons } from "../Lab-Info/page";

export default function PricingPage() {
  const { goNext, goPrev, updateFormData } = useOnboarding();
  const [tests, setTests] = useState([
    { name: "", price: "", discountPrice: "" },
  ]);

  const addRow = () => setTests((p) => [...p, { name: "", price: "", discountPrice: "" }]);
  const removeRow = (i) => setTests((p) => p.filter((_, j) => j !== i));
  const update = (i, field, val) =>
    setTests((p) => p.map((t, j) => (j === i ? { ...t, [field]: val } : t)));

  const handleSubmit = () => {
    updateFormData("pricing", { tests });
    goNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepCard
        icon={<IndianRupee size={26} className="text-[#0F3B73]" />}
        title="Test Pricing"
        subtitle="Add pricing for your tests and packages"
      >
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3 mb-6 text-xs text-blue-700 font-semibold">
          💡 You can always update pricing later from your dashboard. Add at least your key tests here.
        </div>

        {/* Header */}
        <div className="hidden md:grid grid-cols-12 gap-3 px-2 mb-2">
          <p className="col-span-5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Test / Package Name</p>
          <p className="col-span-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">MRP (₹)</p>
          <p className="col-span-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Offer Price (₹)</p>
          <div className="col-span-1" />
        </div>

        <div className="space-y-3">
          {tests.map((test, i) => (
            <div key={i} className="grid grid-cols-12 gap-3 items-center bg-slate-50 border border-slate-100 rounded-2xl p-3">
              <div className="col-span-12 md:col-span-5">
                <input value={test.name} onChange={(e) => update(i, "name", e.target.value)}
                  placeholder="e.g. CBC, Lipid Profile..."
                  className={inputCls} />
              </div>
              <div className="col-span-5 md:col-span-3">
                <input value={test.price} onChange={(e) => update(i, "price", e.target.value)}
                  placeholder="₹ MRP" type="number"
                  className={inputCls} />
              </div>
              <div className="col-span-5 md:col-span-3">
                <input value={test.discountPrice} onChange={(e) => update(i, "discountPrice", e.target.value)}
                  placeholder="₹ Offer" type="number"
                  className={inputCls} />
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <button onClick={() => removeRow(i)} disabled={tests.length === 1}
                  className="w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 text-red-400 flex items-center justify-center transition disabled:opacity-30">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={addRow}
          className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0F3B73] hover:text-blue-700 transition">
          <Plus size={16} /> Add Another Test
        </button>

        <NavButtons onNext={handleSubmit} onPrev={goPrev} />
      </StepCard>
    </div>
  );
}