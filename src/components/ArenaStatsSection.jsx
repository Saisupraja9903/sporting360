import React, { useState, useEffect, useRef } from "react";
import {
  ThumbsUp,
  Trophy,
  UserRound,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: ThumbsUp,
    number: "500+",
    label: "Members Active",
  },
  {
    icon: Trophy,
    number: "10+",
    label: "Games Cover",
  },
  {
    icon: UserRound,
    number: "5+",
    label: "Professional Coach",
  },
  {
    icon: Award,
    number: "1+",
    label: "Years of Experience",
  },
];

const StatItem = ({ item, isLast }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const Icon = item.icon;

  // Extract numeric value (e.g., 500 from "500+") and suffix (e.g., "+")
  const targetNumber = parseInt(item.number.replace(/\D/g, ""), 10);
  const suffix = item.number.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const duration = 2000; // Animation lasts 2 seconds

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setDisplayValue(Math.floor(progress * targetNumber));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`group flex items-center justify-center gap-6 lg:justify-start ${
        !isLast ? "lg:border-r lg:border-[#c9ccd3]" : ""
      }`}
    >
      <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-2xl bg-[#fff5f5] transition-all duration-300 group-hover:bg-[#ff5635] group-hover:shadow-[0_12px_24px_rgba(255,86,53,0.25)]">
        <Icon size={38} strokeWidth={1.5} className="text-[#ff5635] transition-colors duration-300 group-hover:text-white" />
      </div>
      <div>
        <h3 className="sport-condensed text-[48px] font-bold leading-none text-[#2a2475] lg:text-[54px]">
          {displayValue}{suffix}
        </h3>
        <p className="mt-3 text-[18px] text-[#7a7a7a]">{item.label}</p>
      </div>
    </div>
  );
};

const ArenaStatsSection = ({ className = "" }) => {
  return (
    <section className={`bg-white py-[100px] ${className}`}>
      <div className="mx-auto max-w-[1176px] px-5 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <h2 className="sport-condensed text-[30px] font-bold text-[#1d2c44] md:text-[35px]">
            Our Sports Arena In Just Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[18px] text-[#666666]">
            Building a thriving sports community through excellence, 
            dedication, and expert guidance.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-[40px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <StatItem 
                key={index} 
                item={item} 
                isLast={index === stats.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArenaStatsSection;