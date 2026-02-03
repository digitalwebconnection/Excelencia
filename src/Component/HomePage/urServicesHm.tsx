"use client";
import { useState, useEffect } from "react";

const services = [
  {
    id: "01",
    title: "Career Guidance",
    description:
      "Expert counselling to help students choose the right career path based on skills and goals.",
    tag: "Planning",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: "02",
    title: "Profile Evaluation",
    description:
      "Detailed assessment of academic and professional background for better admission chances.",
    tag: "Analysis",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    id: "03",
    title: "Country & University Shortlisting",
    description:
      "Personalized shortlisting aligned with career objectives, budget, and eligibility.",
    tag: "Selection",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    id: "04",
    title: "Admissions Assistance",
    description:
      "Guided support through the entire admissions process, from application to acceptance.",
    tag: "Support",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    id: "05",
    title: "SOP & Applications",
    description:
      "Professionally written SOPs and applications tailored to university expectations.",
    tag: "Creative",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },
  {
    id: "06",
    title: "Documentation Support",
    description:
      "Assistance in preparing and organizing all required documents for applications.",
    tag: "Support",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
  },
  {
    id: "07",
    title: "Visa Application Assistance",
    description:
      "Structured visa filing with expert guidance to improve approval success.",
    tag: "Legal",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    id: "08",
    title: "Interview Preparation",
    description:
      "Comprehensive preparation for visa interviews with mock sessions and expert feedback.",
    tag: "Preparation",
    image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b",
  },
  {
    id: "09",
    title: "Financial Planning",
    description:
      "Guidance on education loans, scholarships, and financial planning.",
    tag: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
];

const PremiumServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, services.length]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.75 bg-[#c1972d]" />
            <span className="text-[#c1972d] font-black tracking-widest uppercase text-sm">
              Premium Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">
            Expertise in{" "}
            <span className="text-[#c1972d]">Global Education.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT LIST */}
          <div
            className="lg:col-span-5 space-y-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                onFocus={() => setActiveTab(index)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-300
                ${
                  activeTab === index
                    ? "border-[#c1972d] bg-[#c1972d]/5 shadow-md scale-[1.01]"
                    : "border-gray-100 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`text-xl font-bold ${
                      activeTab === index
                        ? "text-[#c1972d]"
                        : "text-gray-400"
                    }`}
                  >
                    {service.id}
                  </span>
                  <h3
                    className={`text-xl font-bold ${
                      activeTab === index
                        ? "text-[#111]"
                        : "text-gray-500"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT SHOWCASE */}
          <div className="lg:col-span-7 sticky top-10">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              {/* IMAGE */}
              <img
                key={services[activeTab].image}
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 opacity-0 animate-imageFade"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[1px]" />

              {/* CONTENT */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-end text-white animate-contentFade">
                <span className="inline-block w-fit mb-4 px-4 py-1 rounded bg-[#c1972d] text-xs font-bold uppercase tracking-wider">
                  {services[activeTab].tag}
                </span>

                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {services[activeTab].title}
                </h3>

                <p className="text-gray-100 text-lg max-w-lg mb-8">
                  {services[activeTab].description}
                </p>

                <button className="w-fit flex items-center gap-3 bg-white text-[#111] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#c1972d] hover:text-white transition-all">
                  Enquire Now
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* PROGRESS BAR */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20">
                <div
                  className="h-full bg-[#c1972d] transition-all duration-500 ease-linear"
                  style={{
                    width: `${((activeTab + 1) / services.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes imageFade {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-imageFade {
          animation: imageFade 0.7s ease-out forwards;
        }

        @keyframes contentFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-contentFade {
          animation: contentFade 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PremiumServices;
