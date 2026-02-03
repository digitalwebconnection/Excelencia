"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Active Partners" },
  { value: 10, suffix: "+", label: "Experienced Team" },
  { value: 2000, suffix: "", label: "Successful Visa Created", isK: true },
  { value: 10, suffix: "+", label: "Years Of Experiences" },
];

const CounterItem = ({ value, suffix, label, isK }: { value: number; suffix: string; label: string; isK?: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out formula: 1 - Math.pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  const formatDisplay = () => {
    if (isK && count >= 1000) return `${(count / 1000).toFixed(0)}k`;
    return count;
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#cb9e18] tabular-nums">
        {formatDisplay()}{suffix}
      </h2>
      <p className="mt-2 text-gray-700 font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-6 md:divide-x divide-gray-300">
        {stats.map((item, index) => (
          <CounterItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;