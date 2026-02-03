"use client";

import { Globe, GraduationCap, ShieldCheck } from "lucide-react";




const AboutUs = () => {
    const brandGold = "#c1972d";

    const features = [
        { icon: <GraduationCap className="w-5 h-5" />, text: "University Selection" },
        { icon: <ShieldCheck className="w-5 h-5" />, text: "Visa Assistance" },
        { icon: <Globe className="w-5 h-5" />, text: "Global Network" },
    ];

    
    return (
        <>
            <section className="relative w-full bg-slate-50 py-14 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        {/* LEFT – IMAGE AREA */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative group">

                                {/* Main Image */}
                                <div className="relative z-10 rounded-3xl overflow-hidden border-12 border-white shadow-2xl 
                transition-all duration-700 
                group-hover:scale-[1.03] group-hover:-rotate-1 group-hover:shadow-amber-300/40">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk05odpBF2kqJj_HWAs7gjjlGB1BOxs6AWFhgHVFANBXX4EUm"
                                        alt="Global Education"
                                        className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlapping Image */}
                                <div className="absolute -bottom-10 -right-8 z-20 w-3/4 hidden sm:block 
                transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-1">
                                    <div className="rounded-2xl overflow-hidden border-[6px] border-white shadow-xl">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SXmtD4XJdPRF_tx5rAUW69xmjqZuJOUa8Q&s"
                                            alt="Students Success"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div
                                    style={{ backgroundColor: brandGold }}
                                    className="absolute -top-6 -left-6 z-30 p-6 rounded-3xl text-white shadow-lg
                transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                >
                                    <p className="text-3xl font-bold">10+</p>
                                    <p className="text-xs uppercase tracking-tighter opacity-90">
                                        Years Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT – CONTENT */}
                        <div className="lg:col-span-7 space-y-6">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#c1972d] text-sm font-bold uppercase tracking-wider">
                                About Excelencia International
                            </div>

                            {/* Heading with underline hover */}
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] group">
                                Your Bridge to <br />
                                <span className="relative inline-block" style={{ color: brandGold }}>
                                    Elite Universities
                                    <span
                                        className="absolute left-0 -bottom-2 w-0 h-1 bg-[#c1972d] transition-all duration-500 group-hover:w-full"
                                    />
                                </span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                Navigating overseas education shouldn't feel like a maze.
                                We provide a <strong>clear, transparent roadmap</strong> from
                                consultation to campus.
                            </p>

                            {/* Feature Cards */}
                            <div className="grid sm:grid-cols-3 gap-4 py-4">
                                {features.map((f, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div
                                            style={{ color: brandGold }}
                                            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                        >
                                            {f.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">
                                            {f.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <button
                                    style={{ backgroundColor: brandGold }}
                                    className="px-8 py-4 rounded-xl text-white font-bold shadow-lg shadow-amber-200
                transition-all duration-300 hover:scale-105 hover:shadow-amber-300/60 active:scale-95"
                                >
                                    Book Free Counselling
                                </button>

                                <button
                                    className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold
                transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95"
                                >
                                    Explore Programs
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
