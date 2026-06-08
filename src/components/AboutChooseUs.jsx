import {
  PartyPopper,
  BadgeDollarSign,
  UserRound,
  ThumbsUp,
} from "lucide-react";

import image1 from "../assets/WhyChooseUs/why-choose.jpg";
import image2 from "../assets/WhyChooseUs/why-choose-1.jpg";
import image3 from "../assets/WhyChooseUs/why-choose-2.jpg";

const features = [
  {
    icon: PartyPopper,
    title: "Fun And\nEnjoyment",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible\nPricing",
  },
  {
    icon: UserRound,
    title: "Professional\nTrainer",
  },
];

const AboutChooseUs = ({ className = "" }) => {
  return (
    <section className={`overflow-hidden py-16 md:py-[110px] ${className}`}>
      <div className="mx-auto max-w-[1176px] px-5 lg:px-0">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <span className="sport-condensed text-[18px] font-bold text-[#14c65a] md:text-[22px]">
              Why Choose Us
            </span>

            <h2 className="sport-condensed mt-4 text-[28px] font-bold leading-[1.15] text-[#1d2c44] md:text-[32px] lg:text-[40px]">
              Unleash Your True Sporting Potential With Our Exceptional
              Sporting360
            </h2>

            <p className="mt-7 max-w-[520px] text-[16px] leading-[1.8] text-[#666]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index}>
                    <div className="flex h-[135px] items-center justify-center rounded-sm border border-[#f6dcdc] bg-[#fff5f5]">
                      <Icon
                        size={60}
                        strokeWidth={1.5}
                        className="text-[#ff5635]"
                      />
                    </div>

                    <h3 className="sport-condensed mt-5 whitespace-pre-line text-center text-[26px] font-bold leading-[1.3] text-[#1d2c44]">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-[36px] flex flex-col gap-4 sm:flex-row sm:gap-[18px]">
              <button className="h-[50px] w-full border border-[#10C851] bg-[#10C851] text-[15px] font-semibold text-white underline underline-offset-8 transition-all duration-300 hover:bg-white hover:text-[#10C851] sm:w-[212px]">
                Find Out More
              </button>

              <button className="h-[50px] w-full border border-[#2B236B] bg-transparent text-[15px] font-semibold text-[#2B236B] underline underline-offset-8 transition-all duration-300 hover:bg-[#10C851] hover:text-white sm:w-[212px]">
                Become A Member
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative mt-12 lg:mt-0">
            {/* Background */}
            <div className="absolute left-[10%] top-0 h-full w-[100%] rounded-tl-[60px] bg-gradient-to-b from-[#29246d] via-[#29246d] to-[#10c85a] sm:left-[15%] lg:left-[70px] lg:h-[630px] lg:w-[720px] lg:rounded-tl-[120px]" />

            <div className="relative z-10 pb-10 pt-10 sm:pb-[220px] sm:pt-14">
              <div className="grid grid-cols-1 gap-0  sm:grid-cols-[2fr_1fr] lg:grid-cols-[430px_180px]">
                {/* Main Image */}
                <img
                  src={image1}
                  alt=""
                  className="relative z-10 h-[250px] w-[95%] object-cover sm:h-[300px]"
                />

                {/* Right Images */}
                <div className="relative z-20 -mt-[60px] ml-[20%] flex flex-col gap-5 sm:-ml-[45px] sm:mt-0 sm:ml-0">
                  <img
                    src={image2}
                    alt=""
                    className="hidden h-[120px] w-full object-cover sm:block"
                  />

                  <img
                    src={image3}
                    alt=""
                    className="h-[180px] w-full object-cover sm:h-[300px]"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="relative z-20 mt-8 w-[95%] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] sm:absolute sm:left-[2px] sm:top-[370px] sm:mt-0 sm:w-[410px]">
                <div className="h-[12px] w-[95px] bg-[#14c65a]" />

                <div className="flex items-center gap-5 px-6 py-5">
                  <div className="flex h-[52px] w-[60px] shrink-0 items-center justify-center">
                    <ThumbsUp
                      size={42}
                      strokeWidth={1.8}
                      className="text-[#2B236B]"
                    />
                  </div>

                  <div>
                    <h3 className="sport-condensed text-[18px] font-bold text-[#2B236B]">
                      We Are Ready To Serve You.
                    </h3>

                    <p className="mt-1 text-[14px] leading-[1.5] text-[#666]">
                      Our team is prepared to support you at every step of your
                      sporting journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChooseUs;
