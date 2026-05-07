"use client";
import React, { useState, useRef } from "react";
import { MapPin, Upload, X, ImageIcon } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { inputCls, Field, StepCard, NavButtons } from "../Lab-Info/page";

export default function AddressPage() {
  const { goNext, goPrev, updateFormData } = useOnboarding();
  const [form, setForm] = useState({
    addressLine1: "", addressLine2: "", city: "", state: "",
    pincode: "", landmark: "", googleMapsLink: "",
  });
  const [images, setImages] = useState([]);
  const fileRef = useRef();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((f) => ({ file: f, url: URL.createObjectURL(f), name: f.name }));
    setImages((prev) => [...prev, ...previews].slice(0, 6));
  };

  const removeImage = (i) => setImages((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = () => {
    updateFormData("address", { ...form, images });
    goNext();
  };

  const indianStates = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
    "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
    "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
    "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Address Card */}
      <StepCard
        icon={<MapPin size={26} className="text-[#0F3B73]" />}
        title="Address & Location"
        subtitle="Where is your lab located?"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Address Line 1" required className="md:col-span-2">
            <input name="addressLine1" value={form.addressLine1} onChange={handleChange}
              placeholder="Building name, Street, Area"
              className={inputCls} />
          </Field>
          <Field label="Address Line 2">
            <input name="addressLine2" value={form.addressLine2} onChange={handleChange}
              placeholder="Landmark, Near (optional)"
              className={inputCls} />
          </Field>
          <Field label="Landmark">
            <input name="landmark" value={form.landmark} onChange={handleChange}
              placeholder="e.g. Near City Hospital"
              className={inputCls} />
          </Field>
          <Field label="City" required>
            <input name="city" value={form.city} onChange={handleChange}
              placeholder="e.g. Indore"
              className={inputCls} />
          </Field>
          <Field label="State" required>
            <select name="state" value={form.state} onChange={handleChange} className={inputCls}>
              <option value="">Select state</option>
              {indianStates.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="PIN Code" required>
            <input name="pincode" value={form.pincode} onChange={handleChange}
              placeholder="6-digit PIN code" maxLength={6} type="number"
              className={inputCls} />
          </Field>
          <Field label="Google Maps Link">
            <input name="googleMapsLink" value={form.googleMapsLink} onChange={handleChange}
              placeholder="Paste your Google Maps URL"
              className={inputCls} />
          </Field>
        </div>
      </StepCard>

      {/* Image Upload Card */}
      <StepCard
        icon={<ImageIcon size={26} className="text-[#0F3B73]" />}
        title="Lab Photos"
        subtitle="Upload photos of your lab (max 6 images)"
      >
        {/* Upload Zone */}
        <div
          onClick={() => fileRef.current.click()}
          className="border-2 border-dashed border-blue-200 rounded-2xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all group"
        >
          <Upload size={32} className="mx-auto mb-3 text-blue-300 group-hover:text-blue-500 transition" />
          <p className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition">
            Click to upload lab photos
          </p>
          <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB each — max 6 photos</p>
          <input ref={fileRef} type="file" multiple accept="image/*" onChange={handleImages} className="hidden" />
        </div>

        {/* Image Previews */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {images.map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={14} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-2 py-1">
                  <p className="text-white text-[10px] truncate">{img.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <NavButtons onNext={handleSubmit} onPrev={goPrev} />
      </StepCard>
    </div>
  );
}