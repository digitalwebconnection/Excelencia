"use client";

import { ArrowRight, GraduationCap } from "lucide-react";

const destinations = [
  {
    country: "United States",
    universities: "4000+ Institutions",
    description: "Home to Ivy League excellence and diverse research opportunities.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    flag: "🇺🇸",
  },
  {
    country: "United Kingdom",
    universities: "150+ Institutions",
    description: "Rich academic heritage with globally recognized degrees.",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
    flag: "🇬🇧",
  },
  {
    country: "New Zealand",
    universities: "Top-ranked Universities",
    description: "High quality of life paired with world-class education standards.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    flag: "🇳🇿",
  },
  {
    country: "Australia",
    universities: "40+ Institutions",
    description: "Leading destination for innovation and post-study work goals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbRkqc2rqPpO31UUw6UVi008zxkTUeQgBOQ&s",
    flag: "🇦🇺",
  },
];

const ExploreDestinations = () => {
  return (
    <section className="relative bg-[#00245f] py-14 overflow-hidden" 
    style={{backgroundImage: "url('https://media.istockphoto.com/id/491522385/photo/group-of-students-studying-about-global-issues.jpg?s=612x612&w=0&k=20&c=SpEMvKvAg5v42IHRYU1chArcWhoYvYVmtI2DxooezsU=')", backgroundSize: "cover", backgroundPosition: "center"}}>
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#0f0f0f] to-transparent opacity-60" />

      {/* CONTENT HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#c1972d] font-semibold tracking-widest uppercase text-sm">Global Education</span>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mt-2">
              Explore Destinations
            </h2>
          </div>

          <button className="group flex items-center gap-3 bg-[#c1972d] text-white px-8 py-4 rounded-full font-bold hover:bg-[#a68226] transition-all shadow-lg shadow-[#c1972d]/20">
            View All Countries 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* DESTINATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map(({ country, universities, description, image, flag }, index) => (
            <div
              key={index}
              className="group bg-[#15294b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c1972d]/50 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={country}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#15294b] via-transparent to-transparent opacity-80" />
                <span className="absolute text-[#c1972d] bottom-4 left-5 text-4xl shadow-sm">{flag}</span>
              </div>

              <div className="p-6">
                <h4 className="text-white font-bold text-xl mb-2">
                  {country}
                </h4>
                <div className="flex items-center gap-2 text-[#c1972d] mb-3">
                  <GraduationCap size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wider">{universities}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <button className="text-white text-sm font-medium flex items-center gap-2 group-hover:text-[#c1972d] transition-colors">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW ALL BUTTON (visible only on small screens) */}
        <div className="mt-12 md:hidden">
          <button className="w-full border-2 border-[#c1972d] text-[#c1972d] py-4 rounded-xl font-bold">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;