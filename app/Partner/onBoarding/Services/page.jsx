"use client";
import React, { useState, useMemo } from "react";
import { FlaskConical, Home, Plus, X, Search, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useOnboarding } from "../../OnboardingContext";
import { inputCls, Field, StepCard, NavButtons } from "../Lab-Info/page"; 

const testCategories = [
  {
    category: "Blood Tests",
    tests: ["Complete Blood Count (CBC)", "Blood Sugar (Fasting/PP)", "HbA1c", "Lipid Profile", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Thyroid Profile (T3/T4/TSH)"],
  },
  {
    category: "Urine & Stool",
    tests: ["Urine Routine & Microscopy", "Urine Culture", "Stool Routine", "Stool Culture"],
  },
  {
    category: "Imaging & Radiology",
    tests: ["X-Ray", "Ultrasound", "ECG", "2D Echo", "CT Scan", "MRI"],
  },
  {
    category: "Hormones & Specialty",
    tests: ["Vitamin B12", "Vitamin D", "Iron Studies", "Ferritin", "PSA (Prostate)", "CA-125", "Beta HCG"],
  },
  {
    category: "Infection & Immunity",
    tests: ["HIV Test", "HBsAg (Hepatitis B)", "Hepatitis C (Anti HCV)", "Dengue NS1/IgM/IgG", "Malaria Test", "COVID-19 RT-PCR", "Widal Test"],
  },
  {
    category: "Health Packages",
    tests: ["Basic Health Checkup", "Full Body Checkup", "Diabetic Package", "Heart Package", "Women Health Package", "Senior Citizen Package"],
  },
];

export default function ServicesAndPricingPage() {
  const { goNext, goPrev, updateFormData } = useOnboarding();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCats, setExpandedCats] = useState(["Blood Tests"]); 

  const [selectedTests, setSelectedTests] = useState({});
  
  const [globalHomeCollection, setGlobalHomeCollection] = useState(false);
  const [homeRadius, setHomeRadius] = useState("");
  const [homeCharge, setHomeCharge] = useState(""); 
  
  const [customTest, setCustomTest] = useState("");
  const [customList, setCustomList] = useState([]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return testCategories;
    const lowerQuery = searchQuery.toLowerCase();
    return testCategories.map(cat => ({
      ...cat,
      tests: cat.tests.filter(t => t.toLowerCase().includes(lowerQuery))
    })).filter(cat => cat.tests.length > 0);
  }, [searchQuery]);

  const toggleCategory = (catName) => {
    setExpandedCats(prev => 
      prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
    );
  };

  const toggleTest = (testName) => {
    setSelectedTests(prev => {
      const newTests = { ...prev };
      if (newTests[testName]) {
        delete newTests[testName]; 
      } else {
        newTests[testName] = { price: "", homeSample: true, homePrice: "" }; 
      }
      return newTests;
    });
  };

  const updateTestDetail = (testName, field, value) => {
    setSelectedTests(prev => ({
      ...prev,
      [testName]: { ...prev[testName], [field]: value }
    }));
  };

  const addCustom = () => {
    if (customTest.trim()) {
      setCustomList(prev => [...prev, customTest.trim()]);
      setSelectedTests(prev => ({
        ...prev,
        [customTest.trim()]: { price: "", homeSample: true, homePrice: "" }
      }));
      setCustomTest("");
    }
  };

  const removeCustom = (testName) => {
    setCustomList(prev => prev.filter(t => t !== testName));
    setSelectedTests(prev => {
      const newTests = { ...prev };
      delete newTests[testName];
      return newTests;
    });
  };

  const handleSubmit = () => {
    updateFormData("servicesAndPricing", { selectedTests, globalHomeCollection, homeRadius, homeCharge, customList });
    goNext();
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      
      <StepCard
        icon={<FlaskConical size={26} className="text-[#0F3B73]" />}
        title="Services & Pricing"
        subtitle="Select tests you offer and set their prices directly"
      >
        {/* NAYA PRO TIP BANNER YAHAN HAI */}
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
          <Info size={20} className="text-[#0F3B73] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-[#0F3B73]">💡 Pro Tip: Maximize Your Bookings</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Patients on TestWise primarily look for <strong className="text-slate-800">Home Sample Collection</strong>. 
              We highly recommend keeping your Extra Visit Charge <strong className="text-slate-800">Free or very minimal</strong>. 
              High extra charges often lead to patients canceling the booking or visiting the lab directly!
            </p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search for a test or package (e.g., CBC, MRI)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim() !== "") {
                setExpandedCats(testCategories.map(c => c.category));
              }
            }}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F3B73]/20 focus:border-[#0F3B73] focus:bg-white transition-all shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {filteredCategories.map(({ category, tests }) => {
            const isExpanded = expandedCats.includes(category);
            const selectedCount = tests.filter(t => selectedTests[t]).length;

            return (
              <div key={category} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <button 
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-extrabold text-[#0F3B73] uppercase tracking-wide">{category}</p>
                    {selectedCount > 0 && (
                      <span className="bg-[#0F3B73] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {selectedCount} Selected
                      </span>
                    )}
                  </div>
                  {isExpanded ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
                </button>

                {isExpanded && (
                  <div className="divide-y divide-slate-100 p-2">
                    {tests.map((test) => {
                      const isSelected = !!selectedTests[test];
                      return (
                        <div key={test} className={`flex flex-col lg:flex-row lg:items-center justify-between p-3 rounded-xl transition-all ${isSelected ? "bg-white" : "hover:bg-slate-50"}`}>
                          
                          <label className="flex items-center gap-3 cursor-pointer select-none flex-1 mb-2 lg:mb-0">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleTest(test)}
                              className="w-4 h-4 accent-[#0F3B73] shrink-0"
                            />
                            <span className={`text-sm font-bold transition-colors ${isSelected ? "text-[#0F3B73]" : "text-slate-700"}`}>
                              {test}
                            </span>
                          </label>

                          {isSelected && (
                            <div className="flex flex-wrap items-center gap-3 ml-7 lg:ml-0 bg-slate-50 border border-slate-200 rounded-xl p-1.5 animate-in fade-in slide-in-from-right-4 duration-200">
                              
                              <div className="flex items-center gap-2 px-2">
                                <span className="text-xs font-bold text-slate-600">Lab Price:</span>
                                <div className="relative h-8">
                                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm">₹</span>
                                  <input
                                    type="number"
                                    placeholder="e.g. 500"
                                    value={selectedTests[test].price}
                                    onChange={(e) => updateTestDetail(test, "price", e.target.value)}
                                    className="w-24 h-full pl-6 pr-2 text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3B73]/20 focus:border-[#0F3B73] transition-all bg-white shadow-sm"
                                  />
                                </div>
                              </div>

                              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>

                              <div className="flex items-center gap-3 px-2">
                                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedTests[test].homeSample}
                                    onChange={(e) => updateTestDetail(test, "homeSample", e.target.checked)}
                                    className="w-3.5 h-3.5 accent-[#0F3B73]"
                                  />
                                  Home Sample
                                </label>
                                
                                {selectedTests[test].homeSample && (
                                  <div className="flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2 ml-1">
                                    <span className="text-[10px] font-bold text-slate-500 leading-tight text-right uppercase tracking-wider">
                                      Extra<br/>Charge:
                                    </span>
                                    <div className="relative h-8 w-20">
                                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#0F3B73] font-bold text-xs">+₹</span>
                                      <input
                                        type="number"
                                        placeholder={homeCharge ? homeCharge : "Auto"}
                                        value={selectedTests[test].homePrice || ""}
                                        onChange={(e) => updateTestDetail(test, "homePrice", e.target.value)}
                                        className="w-full h-full pl-6 pr-1 text-xs font-bold text-[#0F3B73] border border-blue-200 bg-blue-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3B73]/20 focus:border-[#0F3B73] transition-all placeholder-blue-300"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </StepCard>

      <StepCard
        icon={<Home size={26} className="text-[#0F3B73]" />}
        title="Global Home Collection Rules"
        subtitle="Set standard default charges for home pickup"
      >
        <label className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer border-2 transition-all mb-5
          ${globalHomeCollection ? "border-[#0F3B73] bg-blue-50/50" : "border-slate-200 hover:border-slate-300"}`}>
          <input
            type="checkbox"
            checked={globalHomeCollection}
            onChange={(e) => setGlobalHomeCollection(e.target.checked)}
            className="w-5 h-5 accent-[#0F3B73]"
          />
          <div>
            <p className="font-bold text-[#0F3B73] text-sm">Enable Home Collection Service</p>
            <p className="text-xs text-slate-500 mt-0.5">Define your general coverage area and default visit charges below</p>
          </div>
        </label>

        {globalHomeCollection && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 animate-in fade-in slide-in-from-top-2">
            <Field label="Service Radius (KM)">
              <input value={homeRadius} onChange={(e) => setHomeRadius(e.target.value)}
                placeholder="e.g. 10" type="number"
                className={inputCls} />
            </Field>
            <Field label="Standard Extra Charge (₹)">
              <input value={homeCharge} onChange={(e) => setHomeCharge(e.target.value)}
                placeholder="e.g. 150 (Leave blank if Free)" type="number"
                className={inputCls} />
            </Field>
          </div>
        )}

        <NavButtons onNext={handleSubmit} onPrev={goPrev} />
      </StepCard>
    </div>
  );
}