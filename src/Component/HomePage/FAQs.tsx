"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Excelencia International?",
    answer: "Excelencia International is a B2B education platform that connects verified student recruitment agencies with accredited universities worldwide, simplifying international admissions.",
  },
  {
    question: "Who can partner with us?",
    answer: "Only verified education consultants, student recruitment agencies, and accredited universities can partner with Excelencia, ensuring trust, quality, and transparency.",
  },
  {
    question: "How do we support agencies?",
    answer: "Excelencia provides access to global universities, centralized application management, expert guidance, and training to help agencies grow efficiently.",
  },
  {
    question: "Do you provide visa assistance?",
    answer: "Yes, Excelencia supports agencies with professional visa guidance and coordination to ensure a smooth student application process.",
  },
];

export default function ModernFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#fafaf9] selection:bg-[#c1972d]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Static Header */}
          <div className="lg:col-span-5 sticky top-32">
            <h4 className="text-[#c1972d] font-bold tracking-widest uppercase text-sm mb-4">
              Help Center
            </h4>
            <h2 className="text-5xl font-black text-gray-900 leading-tight mb-6">
              Common <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c1972d] to-[#e4bc4a]">
                Questions.
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Can't find what you're looking for? Reach out to our support team for personalized assistance.
            </p>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-[#c1972d] transition-all duration-300 shadow-xl shadow-gray-200">
              Contact Support
            </button>
          </div>

          {/* Right Side: Animated Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={false}
                  className={`group rounded-3xl transition-all duration-500 border ${
                    isOpen 
                      ? "bg-white border-[#c1972d]/30 shadow-2xl shadow-[#c1972d]/5" 
                      : "bg-transparent border-gray-200 hover:border-[#c1972d]/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-[#c1972d]" : "text-gray-900"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-[#c1972d] rotate-0" : "bg-gray-100 rotate-90"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px w-full bg-gray-100 mb-6" />
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}