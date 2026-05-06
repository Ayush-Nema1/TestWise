"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Building2, MapPin, FlaskConical, Clock,
  IndianRupee, FileCheck, ClipboardCheck, Headphones, ChevronRight,
} from "lucide-react";
import { OnboardingProvider, steps } from "./OnboardingContext.jsx";

const stepIcons = [Building2, MapPin, FlaskConical, Clock, IndianRupee, FileCheck, ClipboardCheck];

export default function OnboardingLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentStep = steps.find((s) => pathname?.startsWith(s.path));
  const currentStepId = currentStep?.id || 1;

  return (
    <OnboardingProvider currentStepId={currentStepId}>
      <div className="min-h-screen bg-[#F0F4FA] flex flex-col">

        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <span className="text-2xl font-extrabold text-[#0F3B73]">Testwise</span>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Lab Partner Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0F3B73] flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="text-sm font-semibold text-slate-700">Testwise Lab</span>
            <ChevronRight size={16} className="text-slate-400" />
          </div>
        </header>

        <div className="flex flex-1">

          {/* Sidebar */}
          <aside className="w-72 bg-white border-r border-slate-200 flex flex-col p-5 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
            <div className="flex-1 space-y-1">
              {steps.map((step) => {
                const Icon = stepIcons[step.id - 1];
                const isActive = step.id === currentStepId;
                const isDone = step.id < currentStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => router.push(step.path)}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 text-left relative
                      ${isActive ? "bg-blue-50 border border-blue-200" : "hover:bg-slate-50 border border-transparent"}`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#0F3B73] rounded-r-full" />
                    )}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                      ${isActive ? "bg-[#0F3B73] text-white" : isDone ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400"}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate
                        ${isActive ? "text-[#0F3B73]" : isDone ? "text-green-700" : "text-slate-600"}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-400 truncate">{step.sub}</p>
                    </div>
                    <span className={`text-xs font-black tabular-nums
                      ${isActive ? "text-[#0F3B73]" : isDone ? "text-green-500" : "text-slate-300"}`}>
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Help Card */}
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#0F3B73] rounded-lg flex items-center justify-center">
                  <Headphones size={16} className="text-white" />
                </div>
                <p className="text-sm font-bold text-[#0F3B73]">Need Help?</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contact Testwise support team for onboarding assistance.
              </p>
            </div>

            <p className="text-center text-[10px] text-slate-300 mt-4">
              © 2026 Testwise. All rights reserved.
            </p>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </OnboardingProvider>
  );
}