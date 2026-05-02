import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Lock } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { IndianRupee } from 'lucide-react';

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

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4">
            <div className="p-2 bg-white/10 rounded-full"><FaFacebookF size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full"><FaInstagram size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full"><FaYoutube size={16} /></div>
            <div className="p-2 bg-white/10 rounded-full"><FaTwitter size={16} /></div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Tests</li>
            <li>Medicines</li>
            <li>Health Tips</li>
            <li>How It Works</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Partner With Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
      
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">

         <div className="flex gap-6 flex-wrap">
  
  <div className="flex items-center gap-2">
    <Lock size={16} />
    <span>100% Secure Transactions</span>
  </div>

  <div className="flex items-center gap-2">
    <ShieldCheck size={16} />
    <span>Verified Labs Only</span>
  </div>

  <div className="flex items-center gap-2">
    <IndianRupee size={16} />
    <span>Best Price Guarantee</span>
  </div>

</div>
          <p>© 2024 TestWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}