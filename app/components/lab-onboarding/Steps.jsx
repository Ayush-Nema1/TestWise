// components/lab-onboarding/steps.js

import {
  Building2,
  MapPin,
  FlaskConical,
  Clock3,
  IndianRupee,
  FileText,
  CheckCircle2,
} from "lucide-react";

export const onboardingSteps = [
  {
    title: "Lab Info",
    description: "Basic lab details",
    href: "/lab/onboarding/info",
    icon: Building2,
  },
  {
    title: "Address",
    description: "Location details",
    href: "/lab/onboarding/address",
    icon: MapPin,
  },
  {
    title: "Services",
    description: "Tests & packages",
    href: "/lab/onboarding/services",
    icon: FlaskConical,
  },
  {
    title: "Timings",
    description: "Working schedule",
    href: "/lab/onboarding/timings",
    icon: Clock3,
  },
  {
    title: "Pricing",
    description: "Test pricing",
    href: "/lab/onboarding/pricing",
    icon: IndianRupee,
  },
  {
    title: "Documents",
    description: "Verification files",
    href: "/lab/onboarding/documents",
    icon: FileText,
  },
  {
    title: "Review",
    description: "Submit onboarding",
    href: "/lab/onboarding/review",
    icon: CheckCircle2,
  },
];