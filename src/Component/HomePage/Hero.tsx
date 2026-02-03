'use client';

import { useEffect, useState } from "react";
import { Globe, GraduationCap, Languages, ShieldCheck } from "lucide-react";

const slides = [
  {
    title: "Empower Global Intellect",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    title: "Shape Your International Future",
    image: "https://cdn.adu.ac.ae/images-container/images/default-source/adu-new-images/about/our-profile-dxb.jpg?sfvrsn=90d363e2_4",
  },
  {
    title: "Your Gateway to Global Education",
    image: "https://img.freepik.com/free-photo/canada-day-celebration-with-maple-leaf-symbol_23-2151440452.jpg",
  },
  {
    title: "Think Global. Study Global.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80",
  },
];

const services = [
  {
    title: "Career Planning",
    desc: "Strategic guidance to align education with global careers.",
    icon: Globe,
  },
  {
    title: "Overseas Education",
    desc: "Expert counselling for top international universities.",
    icon: GraduationCap,
  },
  {
    title: "Language Readiness",
    desc: "IELTS, PTE & language proficiency support.",
    icon: Languages,
  },
  {
    title: "Quality Assurance",
    desc: "Transparent, ethical & student-first processes.",
    icon: ShieldCheck,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(120);

  // Background Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const fullText = slides[index].title;

    const typing = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(typing, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full mb-40 overflow-hidden flex items-center justify-center">

        {/* BACKGROUND SLIDES */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Hero Background"
              className={`w-full h-full object-cover transition-transform duration-6000 ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-4 animate-fadeUp">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide h-[1.2em]">
              {displayText}
              <span className="ml-2 border-r-4 border-[#c1972d] animate-cursorGlow"></span>
            </h1>

            <h2 className="mt-15 text-[#c1972d] text-xl md:text-3xl font-semibold uppercase tracking-widest">
              Global Vision Consultants
            </h2>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <div className="absolute -bottom-22.5 w-full z-40 px-4">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white/95 backdrop-blur-xl rounded-xl shadow-xl p-6
                border-t-4 border-[#c1972d]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl hover:bg-[#c1972d]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full
                bg-[#c1972d]/10 mb-4
                transition-transform duration-300
                group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/20">
                  <Icon className="w-6 h-6 text-[#c1972d] group-hover:text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-white transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
