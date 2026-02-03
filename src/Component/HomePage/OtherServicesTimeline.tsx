"use client";

import { motion, easeOut } from "framer-motion";

const services = [
  {
    title: "Work Permit Services",
    description:
      "Expert assistance to help you obtain work permits smoothly and legally across countries.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Visitor Visa Services",
    description:
      "Hassle-free visitor visa processing for tourism, family visits, and short stays.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Air Ticket Assistance",
    description:
      "Best airfare deals and complete booking support for your international travel.",
    image: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
  },
  {
    title: "Education Loan & Forex Services",
    description:
      "Financial guidance including education loans and forex support for studying abroad.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Dependant Visa Assistance",
    description:
      "Complete support for spouse and family dependant visa applications.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
  {
    title: "Insurance Services",
    description:
      "International health and travel insurance ensuring safety and peace of mind abroad.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  return (
    <motion.article variants={item} className="relative pr-14 group">
      {/* Timeline Dot */}
      <div className="absolute -right-2.25 top-8 z-20">
        <div className="w-5 h-5 rounded-full bg-white border-2 border-[#c1972d] flex items-center justify-center shadow">
          <div className="w-2 h-2 rounded-full bg-[#c1972d] transition-transform duration-300 group-hover:scale-150" />
        </div>
      </div>

      {/* Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image */}
        <div className="md:w-1/3 h-48 md:h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest text-[#c1972d] uppercase mb-2">
            Service {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-[#c1972d]">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {service.description}
          </p>

          <button className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-900 group/btn">
            Learn More
            <span className="w-8 h-0.5 bg-[#c1972d] transition-all duration-300 group-hover/btn:w-12" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const OtherServicesTimeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16">
          {/* Sticky Content */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#c1972d] font-bold tracking-[0.25em] uppercase text-sm mb-4">
                Other Services
              </h4>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Complete <br />
                <span className="text-[#c1972d]">Support Timeline</span>
              </h2>

              <p className="text-gray-500 text-lg mb-8">
                Seamless assistance that supports you at every step of your
                global journey.
              </p>

              <div className="h-1.5 w-20 bg-[#c1972d] rounded-full" />
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="lg:w-3/5 relative">
            {/* Vertical Line */}
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gray-200">
              <motion.div
                className="w-full bg-[#c1972d] origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServicesTimeline;
