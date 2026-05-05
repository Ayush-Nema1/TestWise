import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Lock, ShieldCheck, IndianRupee, Info } from 'lucide-react'; // Info icon add kiya
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[#0F3B73] text-white">
      {/* TOP */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* LOGO + DESC */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold">TestWise</h2>
          <p className="mt-2 text-sm text-gray-300">
            Your Health. Our Priority.
          </p>
          <p className="mt-4 text-[12px] leading-relaxed text-gray-400 max-w-[300px]">
            TestWise is a digital intermediary platform connecting users with NABL/ISO certified labs. We do not provide medical advice or operate our own laboratories.
          </p>
          
          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all"><FaFacebookF size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all"><FaInstagram size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all"><FaYoutube size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-all"><FaTwitter size={16} /></div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Tests</li>
            <li className="hover:text-white cursor-pointer">Medicines</li>
            <li className="hover:text-white cursor-pointer">Health Tips</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Partner With Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">   <Link href="/PrivacyPolicy">Privacy Policy</Link>      </li>
            <li className="hover:text-white cursor-pointer">   <Link href="/Terms&Conditions">Terms & Conditions</Link>      </li>
            <li className="hover:text-white cursor-pointer">   <Link href="/Medical-Disclaimer">Medical Disclaimer</Link>      </li>
            <li className="hover:text-white cursor-pointer">   <Link href="/Refund-Policy">Refund Policy</Link>      </li>
            <li className="hover:text-white cursor-pointer">   <Link href="/FAQs">FAQs</Link>      </li>
          </ul>
        </div>
      </div>

      {/* NEW LEGAL DISCLAIMER STRIP - Safety ke liye */}
      <div className="max-w-[1200px] mx-auto px-6 pb-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-[11px] text-gray-400 leading-normal">
          <div className="flex gap-2 items-start">
            <Info size={14} className="mt-0.5 flex-shrink-0" />
            <p>
              <strong>Disclaimer:</strong> TestWise is a technology service provider and NOT a medical laboratory. All diagnostic tests are conducted by independent partner laboratories. Reports are generated and issued solely by the respective labs. We do not provide medical interpretation or emergency services. Please consult a qualified doctor for any medical concerns.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-green-400" /> 
              <span>100% Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-400" /> 
              <span>Verified Labs Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee size={16} className="text-green-400" /> 
              <span>Best Price Guarantee</span>
            </div>
          </div>
          <p>© 2024 TestWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
