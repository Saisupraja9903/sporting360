import { Play } from "lucide-react";
import bannerImage from "../assets/CTA-banner-1.jpg";

const ParallaxBannerSection = () => {
  return (
    <section
      className="relative h-[380px] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1d2c44]/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        {/* Play Button */}
        <div className="group relative mb-10 flex h-[80px] w-[80px] cursor-pointer items-center justify-center md:h-[90px] md:w-[90px]">
          {/* Animated Ripples */}
          <div className="absolute h-full w-full animate-[ping_3s_linear_infinite] rounded-full bg-white/40" />
          <div className="absolute h-full w-full animate-[ping_3s_linear_infinite_1.5s] rounded-full bg-white/20" />

          {/* Main Button */}
          <button className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-md transition-all duration-500 hover:border-[#10C851] hover:bg-[#10C851] hover:shadow-[0_0_40px_rgba(16,200,81,0.6)]">
            <Play
              size={30}
              fill="currentColor"
              className="ml-1 text-white transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        </div>

        {/* Heading */}
        <h2 className="sport-condensed max-w-[700px] text-[48px] font-bold leading-[1.15] text-white md:text-[52px]">
          Stay Connected. Stay
          <br />
          Active. Play Hard.
        </h2>
      </div>
    </section>
  );
};

export default ParallaxBannerSection;