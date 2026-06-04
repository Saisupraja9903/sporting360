import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import bootcamp from "../assets/Clubs/Bootcamp.jpg";
import cricketClub from "../assets/Clubs/cricket-club.jpeg";
import healo from "../assets/Clubs/Healo.jpeg";
import studegram from "../assets/Clubs/studegram.jpg";
import thunders from "../assets/Clubs/thunders-Logo.png";

const partners = [
  {
    id: 1,
    image: bootcamp,
    alt: "Bootcamp Sports Academy",
  },
  {
    id: 2,
    image: thunders,
    alt: "Thunders Cricket Club",
  },
  {
    id: 3,
    image: studegram,
    alt: "Studegram",
  },
  {
    id: 4,
    image: cricketClub,
    alt: "Cricket Club",
  },
  {
    id: 5,
    image: healo,
    alt: "Healo Wellbeing",
  },
];

const ClubPartnersSection = ({ className = "" }) => {
  return (
    <section className={`py-[80px] lg:py-[100px] ${className}`}>
      <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <h2 className="sport-condensed text-[18px] font-bold leading-tight text-[#1E266D] md:text-[24px] lg:text-[30px]">
            Sports Clubs & Partners That Joined Our Arena
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-relaxed text-[#5F6470] md:text-[18px]">
            Partnering with clubs and academies to grow the game and create new
            opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-16 lg:mt-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-28"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="h-[150px] w-auto object-contain transition-all duration-500 hover:scale-110 md:h-[180px] lg:h-[200px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom style for Swiper pagination dots */}
        <style jsx="true">{`
          .swiper-pagination {
            bottom: 0px !important;
          }
          .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
            background: #cbd5e1;
            opacity: 1;
            margin: 0 10px !important;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #10c851 !important;
            transform: scale(1.4);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClubPartnersSection;