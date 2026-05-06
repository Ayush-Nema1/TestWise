"use client";
import React, { useState } from "react";
import { Clock } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { inputCls, StepCard, NavButtons } from "../Lab-Info/page";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const defaultDay = { open: true, from: "08:00", to: "20:00" };

export default function TimingsPage() {
  const { goNext, goPrev, updateFormData } = useOnboarding();
  const [schedule, setSchedule] = useState(
    Object.fromEntries(days.map((d) => [d, { ...defaultDay }]))
  );
  const [emergency, setEmergency] = useState(false);

  const toggle = (day) =>
    setSchedule((p) => ({ ...p, [day]: { ...p[day], open: !p[day].open } }));

  const update = (day, field, val) =>
    setSchedule((p) => ({ ...p, [day]: { ...p[day], [field]: val } }));

  const copyToAll = (fromDay) => {
    const src = schedule[fromDay];
    const updated = Object.fromEntries(days.map((d) => [d, { ...src }]));
    setSchedule(updated);
  };

  const handleSubmit = () => {
    updateFormData("timings", { schedule, emergency });
    goNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepCard
        icon={<Clock size={26} className="text-[#0F3B73]" />}
        title="Working Schedule"
        subtitle="Set your lab's operating hours for each day"
      >
        <div className="space-y-3">
          {days.map((day) => {
            const s = schedule[day];
            const isWeekend = day === "Saturday" || day === "Sunday";
            return (
              <div key={day}
                className={`flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl border transition-all
                  ${s.open ? "border-blue-100 bg-blue-50/30" : "border-slate-100 bg-slate-50 opacity-60"}`}>

                {/* Day Toggle */}
                <div className="flex items-center gap-3 w-36 shrink-0">
                  <button
                    onClick={() => toggle(day)}
                    className={`w-11 h-6 rounded-full transition-colors relative shrink-0
                      ${s.open ? "bg-[#0F3B73]" : "bg-slate-300"}`}>
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all
                      ${s.open ? "left-6" : "left-1"}`} />
                  </button>
                  <span className={`text-sm font-bold ${isWeekend ? "text-orange-500" : "text-slate-700"}`}>
                    {day.slice(0, 3)}
                  </span>
                </div>

                {s.open ? (
                  <>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Opens At</label>
                        <input type="time" value={s.from}
                          onChange={(e) => update(day, "from", e.target.value)}
                          className={inputCls + " py-2"} />
                      </div>
                      <span className="text-slate-300 font-bold mt-4">—</span>
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Closes At</label>
                        <input type="time" value={s.to}
                          onChange={(e) => update(day, "to", e.target.value)}
                          className={inputCls + " py-2"} />
                      </div>
                    </div>
                    <button
                      onClick={() => copyToAll(day)}
                      className="text-[10px] text-blue-500 font-bold uppercase tracking-wider hover:underline shrink-0">
                      Copy to All
                    </button>
                  </>
                ) : (
                  <span className="text-sm text-slate-400 italic">Closed</span>
                )}
              </div>
            );
          })}
        </div>

        {/* 24x7 Emergency */}
        <label className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer border-2 transition-all mt-6
          ${emergency ? "border-red-300 bg-red-50" : "border-slate-200 hover:border-slate-300"}`}>
          <input type="checkbox" checked={emergency} onChange={(e) => setEmergency(e.target.checked)}
            className="w-5 h-5 accent-red-500" />
          <div>
            <p className="font-bold text-slate-700 text-sm">24×7 Emergency Services Available</p>
            <p className="text-xs text-slate-400 mt-0.5">Check if your lab operates round the clock for emergencies</p>
          </div>
        </label>

        <NavButtons onNext={handleSubmit} onPrev={goPrev} />
      </StepCard>
    </div>
  );
}