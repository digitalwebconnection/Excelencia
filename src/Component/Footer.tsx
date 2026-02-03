'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/image.png";

const Footer = () => {
  return (
    <footer className="bg-[#00142e] border-t border-[#c1972d]">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <img src={logo} alt="Excelencia International" className="w-56 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Excelencia International helps students achieve their global
            education dreams with trusted university partnerships and expert
            guidance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[#c1972d] font-semibold text-lg mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "About Us",
              "Universities",
              "Study MBBS Abroad",
              "Our Services",
              "Careers",
              "Blog",
              "Contact Us",
            ].map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#c1972d] transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-[#c1972d] font-semibold text-lg mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Study Abroad Counseling",
              "University Admissions",
              "Visa Assistance",
              "Education Loans",
              "Scholarship Guidance",
            ].map((service, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#c1972d] transition"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-[#c1972d] font-semibold text-lg mb-4">
            Contact Us
          </h4>

          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="text-[#c1972d]" />
              Office No. 402, Business Plaza, Mumbai, India
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#c1972d]" />
              +91 97697 87211
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#c1972d]" />
              queries@excelenciaint.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#c1972d] text-white  hover:bg-[#c1972d] hover:text-[#0b1f3a] transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#010d20] border-[#020f24]">
        <div className="max-w-7xl  mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} Excelencia International. All Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-[#c1972d]">excellence</span>.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
