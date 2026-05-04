"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => setSaved(s => !s)}
      className={`flex items-center gap-1.5 text-sm transition-colors ${saved ? "text-red-500" : "text-gray-500 hover:text-red-400"}`}
    >
      <Heart size={15} fill={saved ? "currentColor" : "none"} /> Save
    </button>
  );
}