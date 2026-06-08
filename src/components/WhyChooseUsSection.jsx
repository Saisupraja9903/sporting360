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

const WhyChooseUsSection = ({ className = "" }) => {
  return (
    <section className={`overflow-hidden py-[110px] ${className}`}>
      <div className="mx-auto max-w-[1176px] px-5 lg:px-0">
        <div className="grid items-start gap-16 lg:grid-cols-[560px_560px]">

          {/* LEFT SIDE */}
          <div>
            <span className="text-[18px] font-bold text-[#14c65a] md:text-[22px]">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-[32px] font-bold leading-[1.15] text-[#1d2c44] lg:text-[40px]">
              Unleash Your True Sporting Potential With Our Exceptional
              Sporting360
            </h2>

            <p className="mt-7 max-w-[520px] text-[16px] leading-[1.8] text-[#666]">
              Experience the perfect blend of fun, energy, and expert guidance
              at Sporting360. Train with professional coaches, enjoy every
              moment, and elevate your game in an arena built for champions.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-3 gap-5">
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

                    <h3 className="mt-5 whitespace-pre-line text-center text-[26px] font-bold leading-[1.3] text-[#1d2c44]">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-[36px] flex gap-[18px]">

              <button className="h-[50px] w-[212px] border border-[#10C851] bg-[#10C851] text-[15px] font-semibold text-white underline underline-offset-8 transition-all duration-300 hover:bg-white hover:text-[#10C851]">

                Find Out More

              </button>

              <button className="h-[50px] w-[212px] border border-[#2B236B] bg-transparent text-[15px] font-semibold text-[#2B236B] underline underline-offset-8 transition-all duration-300 hover:bg-[#10C851] hover:text-white">

                Become A Member

              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Background */}
            <div className="absolute left-[70px] top-0 h-[650px] w-[720px] rounded-tl-[120px] bg-gradient-to-b from-[#29246d] via-[#29246d] to-[#10c85a]" />

            <div className="relative z-10 pt-14">
              <div className="grid grid-cols-[430px_180px] gap-5">

                {/* Main Image */}
                <img
                  src={image1}
                  alt=""
                  className="h-[300px] w-[90%] object-cover"
                />

                {/* Right Images */}
                <div className="flex flex-col gap-5 -ml-[45px]" >
                  <img
                    src={image2}
                    alt=""
                    className="h-[120px] w-[80%] object-cover"
                  />

                  <img
                    src={image3}
                    alt=""
                    className="h-[235px] w-[80%] object-cover"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="relative -mt-[60px] -ml-4 w-[400px] bg-white px-8 py-7 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

                <div className="absolute left-0 top-0 h-[16px] w-[110px] bg-[#14c65a]" />

                <div className="flex items-start gap-6">
                  <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#f0fff4]">
                    <ThumbsUp
                      size={42}
                      strokeWidth={1.5}
                      className="text-[#14c65a]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[20px] font-bold text-[#29246d]">
                      We Are Ready To Serve You.
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#666]">
                      Our team is prepared to support you at every step of your
                      sporting journey. With expert guidance and dedicated
                      service, we're here to help you perform at your best.
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

export default WhyChooseUsSection;