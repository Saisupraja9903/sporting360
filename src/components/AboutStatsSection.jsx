import React, { useState, useEffect, useRef } from "react";
import {
  ThumbsUp,
  Trophy,
  UserRound,
  Award,
} from "lucide-react";
import { Check } from "lucide-react";

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
        <h3 className="sport-condensed text-[48px] font-semibold leading-none text-[#2a2475] lg:text-[54px]">
          {displayValue}{suffix}
        </h3>
        <p className="mt-3 text-[18px] text-[#7a7a7a]">{item.label}</p>
      </div>
    </div>
  );
};

const AboutStatsSection = ({ className = "" }) => {
  return (
    <section className={`bg-white py-[100px] ${className}`}>
      <div className="mx-auto max-w-[1176px] px-5 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <h2 className="sport-condensed text-[30px] font-semibold text-[#1d2c44] md:text-[35px]">
           Stay connected. Stay active. Play hard.
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[18px] text-[#666666]">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.
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
        {/* Buttons */}
<div className="mt-[50px] flex flex-col items-center justify-center gap-4 sm:flex-row">
  <button className="min-w-[240px] bg-[#16c35b] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#13ad50]">
   <u>Find Out More</u>
  </button>

  <button className="min-w-[240px] border border-[#2a2475] bg-white px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-[#13ad50] hover:text-white">
    <u>Become A Member</u>
  </button>
</div>

{/* Vision & Fun Cards */}
<div className="mt-[40px] grid grid-cols-1 gap-8 lg:grid-cols-2"></div>


{/* Vision Cards */}
<div className="mt-[100px] grid grid-cols-1 gap-8 lg:grid-cols-2">

  {/* Card 1 */}
  <div className="bg-white px-[35px] py-[30px] shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
   <h3 className="sport-condensed text-[28px] font-semibold leading-[1.1] text-[#0f2340]">
      Our Vision About Future
    </h3>

    <p className="mt-5 text-[15px] leading-[1.7] text-[#6a6a6a]">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.
    </p>

    <p className="mt-5 text-[15px] leading-[1.7] text-[#6a6a6a]">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white px-[35px] py-[30px] shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
    <h3 className="sport-condensed text-[28px] font-semibold leading-[1.1] text-[#0f2340]">
      Best Place To Play And Create Fun
    </h3>

    <p className="mt-5 text-[15px] leading-[1.7] text-[#6a6a6a]">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4">

      <div className="flex items-start gap-4">
       <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center border-[3px] border-[#2a2475] bg-white">
  <Check
    size={24}
    strokeWidth={3.5}
    className="text-[#2a2475]"
  />
</div>
        <p className="text-[15px] leading-[1.5] text-[#5f4ca8]">
          Lorem Ipsum is simply dummy text.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center border-[3px] border-[#2a2475] bg-white">
  <Check
    size={24}
    strokeWidth={3.5}
    className="text-[#2a2475]"
  />
</div>
        <p className="text-[15px] leading-[1.5] text-[#5f4ca8]">
          Lorem Ipsum is simply dummy text.
        </p>
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default AboutStatsSection;