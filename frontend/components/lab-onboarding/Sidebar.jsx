// components/lab-onboarding/Sidebar.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onboardingSteps } from "./Steps";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-[280px] min-h-screen bg-white border-r border-slate-200 flex-col">
      
      {/* LOGO */}
      <div className="h-20 border-b border-slate-200 flex items-center px-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Testwise
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Lab Partner Portal
          </p>
        </div>
      </div>

      {/* STEPS */}
      <div className="flex-1 p-4 space-y-2">
        {onboardingSteps.map((step, index) => {
          const isActive = pathname === step.href;
          const Icon = step.icon;

          return (
            <Link
              key={step.href}
              href={step.href}
              className={`group flex items-start gap-4 rounded-2xl border px-4 py-4 transition-all
              ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white"
                  : "bg-white border-transparent hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div
                className={`h-10 w-10 rounded-xl flex items-center justify-center
                ${
                  isActive
                    ? "bg-white/10"
                    : "bg-slate-100 group-hover:bg-white"
                }`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">
                    {step.title}
                  </h3>

                  <span
                    className={`text-xs
                    ${
                      isActive
                        ? "text-slate-300"
                        : "text-slate-400"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <p
                  className={`text-xs mt-1 leading-relaxed
                  ${
                    isActive
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-slate-200">
        <div className="rounded-2xl bg-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-800">
            Need Help?
          </p>

          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Contact Testwise support team for onboarding assistance.
          </p>
        </div>
      </div>
    </aside>
  );
}