import heroImg from "../assets/hero.png";
import MembersCard from "./MembersCard";

const heroContent = {
  kicker: "BE THE",
  highlight: "BEST ATHLETE",
  prefix: "THAT",
  title: "YOU CAN BE.",
  description:
    "The UK excels in innovation and enterprise, yet the full potential of sport remains untapped. Sporting 360 is here to change that by empowering athletes, building strong sporting ecosystems, and promoting inclusive growth through sport. We believe in the power of sport to shape character strengthen communities, and inspire the next generation.",
  cta: "Get Started",
};

const HeroSection = () => {
  return (
    <div className="relative mx-auto max-w-[1176px]">
      <div className="grid min-w-0 items-start gap-12 md:grid-cols-[46%_54%] md:gap-6 lg:grid-cols-[46%_54%] lg:gap-0">
        {/* Left Content */}
        <div className="relative z-10 min-w-0 text-left lg:pl-0 lg:pt-[55px]">
          <p className="text-[28px] font-bold uppercase tracking-[1px] leading-none text-[#192337] md:text-[32px]">
            {heroContent.kicker}
          </p>

          <h1 className="mt-2 text-left uppercase leading-none">
            <span className="block text-[38px] font-bold leading-[0.92] tracking-[1px] text-[#12bf58] min-[420px]:text-[52px] sm:text-[64px] lg:text-[67px]">
              {heroContent.highlight}
            </span>

            <span className="mr-2 inline-block align-baseline text-[18px] font-semibold leading-none text-[#192337] min-[420px]:text-[20px] lg:text-[22px]">
              {heroContent.prefix}
            </span>

            <span className="inline-block text-[38px] font-black tracking-[-1px] leading-[0.9] text-[#192337] min-[420px]:text-[48px] sm:text-[58px] lg:text-[57px]">
              {heroContent.title}
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-[15px] font-medium leading-[1.45] text-[#0f1f38] lg:max-w-[480px] lg:text-[16px] lg:leading-[1.36]">
            {heroContent.description}
          </p>

          <a
            href="#join"
            className="mt-8 inline-flex h-[48px] w-[156px] items-center justify-center border border-[#29215f] bg-transparent text-[15px] font-semibold text-[#29215f] underline underline-offset-2 transition-colors duration-300 hover:bg-[#29215f] hover:text-white focus:outline-none focus-visible:bg-[#29215f] focus-visible:text-white"
          >
            {heroContent.cta}
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative mx-auto flex min-h-[520px] md:min-h-[430px] lg:min-h-[438px] w-full min-w-0 max-w-[680px] items-start justify-center overflow-visible lg:max-w-none lg:justify-end">

          {/* Background Shape */}
          <div className="absolute right-0 top-[40px] h-[400px] w-full overflow-hidden rounded-tr-[62px] bg-[#292562] md:top-[70px] md:h-[374px] md:w-[86%] lg:right-[104px] lg:top-[49px] lg:h-[374px] lg:w-[536px]">
            <div className="absolute inset-0 w-[46%] bg-[linear-gradient(160deg,#21486b_0%,#0ebb5b_100%)]" />
          </div>

          {/* Athlete Image */}
<div className="relative z-20 flex w-full items-start justify-center pt-[90px] md:pt-0 lg:justify-end lg:pr-[104px]">          
   <img
  src={heroImg}
  alt="athletes"
  className="
    relative
    z-20
    w-[120%]
    max-w-none
    object-contain

    mt-[68px]

    md:mt-0
    md:w-full
    md:max-w-[100%]
    md:-translate-x-4

    lg:max-w-[500px]
    lg:-translate-x-20
  "
/>
          </div>

          {/* Members Card */}
          <MembersCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;