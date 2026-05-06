"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const steps = [
  { 
    id: 1, 
    path: "/Partner/onBoarding/Lab-Info", 
    label: "Lab Information", 
    sub: "Basic details & setup" 
  },
  { 
    id: 2, 
    path: "/Partner/onBoarding/contact&address", 
    label: "Contact & Address", 
    sub: "Location details" 
  },
  { 
    id: 3, 
    path: "/Partner/onBoarding/Services", 
    label: "Lab Services", 
    sub: "Tests & categories" 
  },
  { 
    id: 4, 
    path: "/Partner/onBoarding/Timings", 
    label: "Operating Timings", 
    sub: "Working hours" 
  },
  { 
    id: 5, 
    path: "/Partner/onBoarding/Pricing", 
    label: "Pricing & Rates", 
    sub: "Financial details" 
  },
  { 
    id: 6, 
    path: "/Partner/onBoarding/Doc-Verification", 
    label: "Verification", 
    sub: "Legal documents" 
  },
  { 
    id: 7, 
    path: "/Partner/onBoarding/Review", 
    label: "Review & Submit", 
    sub: "Final confirmation" 
  },
];

const OnboardingContext = createContext({});

export function useOnboarding() {
  return useContext(OnboardingContext);
}

export function OnboardingProvider({ children, currentStepId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const updateFormData = (section, data) => {
    setFormData((prev) => ({ ...prev, [section]: { ...prev[section], ...data } }));
  };

  const goNext = () => {
    const next = steps.find((s) => s.id === currentStepId + 1);
    if (next) router.push(next.path);
  };

  const goPrev = () => {
    const prev = steps.find((s) => s.id === currentStepId - 1);
    if (prev) router.push(prev.path);
  };

  return (
    <OnboardingContext.Provider value={{ formData, updateFormData, goNext, goPrev, currentStepId }}>
      {children}
    </OnboardingContext.Provider>
  );
}