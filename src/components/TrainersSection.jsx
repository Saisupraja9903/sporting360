import React from "react";

import trainer1 from "../assets/Trainers/trainer1.jpg";
import trainer2 from "../assets/Trainers/trainer2.jpg";
import trainer3 from "../assets/Trainers/trainer3.jpg";
import trainer4 from "../assets/Trainers/trainer4.jpg";

const trainers = [
  {
    image: trainer1,
    name: "Ben Nebert",
    role: "Baseball Trainer",
  },
  {
    image: trainer2,
    name: "Pieter Noël",
    role: "Professional Rugby Coach",
  },
  {
    image: trainer3,
    name: "Thomas Stanley",
    role: "Hockey Trainer",
  },
  {
    image: trainer4,
    name: "Raumond Little",
    role: "Tennis Coach",
  },
];

const TrainersSection = ({ className = "" }) => {
  return (
    <section className={`bg-[#f5f3f8] py-[100px] ${className}`}>
      <div className="mx-auto max-w-[1220px] px-5">

        {/* Heading */}
        <div className="text-center">
          <h2 className="sport-condensed text-[40px] font-bold text-[#2B236B] md:text-[55px]">
            Our Top Trainers
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-[17px] leading-[1.8] text-[#666666]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="mt-[60px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-[260px] w-full object-cover"
              />

              {/* Content */}
              <div className="px-4 py-5">

                <h3 className="sport-condensed text-[28px] font-bold text-[#2B236B]">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-[16px] text-[#666666]">
                  {trainer.role}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrainersSection;