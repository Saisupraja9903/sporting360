import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import client1 from "../assets/Trainers/founder.jpg";
import client2 from "../assets/Trainers/ceo.jpg";

const testimonials = [
  {
    image: client1,
    name: "Ellen Smets",
    role: "Founder",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: client2,
    name: "Dennis Perez",
    role: "CEO",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: client1,
    name: "Ellen Smets",
    role: "Founder",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: client2,
    name: "Dennis Perez",
    role: "CEO",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Testimonals = ({ className = "" }) => {
  return (
    <section className={`bg-[#f5f5f7] py-[70px] ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="sport-condensed text-[36px] font-bold text-[#2B236B] md:text-[50px]">
            Testimonials
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[18px] leading-[1.8] text-[#666666]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-[70px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            spaceBetween={50}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="pb-20"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="min-h-[280px] bg-white p-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

                  {/* Stars */}
                  <div className="mb-5 flex gap-1 text-[28px] font-black text-[#f5b335]">
                    ★★★★★
                  </div>

                  {/* Review */}
                  <p className="text-[18px] leading-[1.8] text-[#7b7b7b]">
                    {item.review}
                  </p>

                  {/* User */}
                  <div className="mt-8 flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[85px] w-[85px] rounded-full object-cover"
                    />

                    <div>
                      <h4 className="sport-condensed text-[30px] font-bold text-[#10C851]">
                        {item.name}
                      </h4>

                      <p className="text-[18px] text-[#222222]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Styling */}
        <style jsx="true">{`
          .swiper-pagination {
            bottom: 0px !important;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #888;
            opacity: 1;
            margin: 0 6px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #10c851 !important;
            transform: scale(0.5);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonals;