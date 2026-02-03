'use client';

import { Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/image.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      
      {/* TOP BAR (HIDES ON SCROLL) */}
      <div
        className={`bg-[#c1972d] text-white text-sm transition-all duration-300 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 97697 87211
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> queries@excelenciaint.com
            </span>
          </div>

          <div className="hidden md:flex gap-4 font-medium">
            <span className="cursor-pointer hover:underline">Facebook</span>
            <span className="cursor-pointer hover:underline">LinkedIn</span>
            <span className="cursor-pointer hover:underline">Instagram</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-5" : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <div
            className={`flex items-center transition-all duration-300 ${
              scrolled ? "h-8 w-64" : "h-10 w-80"
            }`}
          >
            <img src={logo} alt="Excelencia International Logo" className="w-full object-contain" />
          </div>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">
            {[
              "Home",
              "About Us",
              "Universities",
              "Study MBBS Abroad",
              "Our Services",
              "Careers",
              "Blog",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-[#c1972d] transition"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>
      </nav>

    </header>
  );
};

export default Header;
