"use client";


const universities = [
  { name: "De Montfort University", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/24.png" },
  { name: "Concordia University", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/22.png" },
  { name: "Mercy University", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/21.png" },
  { name: "University of Memphis", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/20.png" },
  { name: "University of Birmingham", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/19.png" },
  { name: "University of Greenwich", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/18.png" },
  { name: "University of West London", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/17.png" },
  { name: "Anglia Ruskin University", logo: "https://excelenciaint.com/wp-content/uploads/2025/10/16.png" },
];

const UniversityScroll = () => {
  // We double the list to ensure the loop is seamless
  const scrollList = [...universities, ...universities];

  return (
    <section className="w-full bg-slate-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT: Enhanced Typography */}
        <div className="lg:col-span-4 bg-[#c1972d] text-white rounded-3xl p-6 shadow-xl z-10">
          <h3 className="text-3xl font-extrabold tracking-tight leading-tight">
            Trusted <br /> Excellence
          </h3>
       
        </div>

        {/* RIGHT SCROLLING LOGOS */}
        <div className="lg:col-span-8 relative">
          {/* Gradient Overlays for "Fade" effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-slate-50 to-transparent z-10" />

          <div className="overflow-hidden py-4">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
              {scrollList.map((uni, index) => (
                <div
                  key={`${uni.name}-${index}`}
                  className="flex items-center justify-center px-10 min-w-40 transition-all duration-500"
                >
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="h-32 w-auto object-contain  transition-all duration-300 transform hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityScroll;