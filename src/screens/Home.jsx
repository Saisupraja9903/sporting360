import HeroSection from "../components/HeroSection";
import CricketFeatureCard from "../components/CricketFeatureCard";
import CommunitySection from "../components/CommunitySection"; 
import ClubPartnersSection from "../components/ClubPartnersSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ArenaStatsSection from "../components/ArenaStatsSection";
import ParallaxBannerSection from "../components/CTABannerSection";
import MembershipSection from "../components/MembershipSection";


const Home = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-white">
      {/* Top Section: Hero and Decorative Text with Gray Background */}
      <div className="bg-[#f7f7fb] pb-12 pt-6 md:pb-20 lg:pb-0 lg:pt-[40px]">
        <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:translate-x-2 lg:px-0">
          <HeroSection />

          <div className="relative z-10 -mt-1 md:-mt-2 lg:-mt-6">
            <h2 className="sport-condensed pointer-events-none select-none whitespace-nowrap text-center text-[72px] font-bold uppercase tracking-[-0.65em] leading-[0.86] text-[#9da2ac] md:text-[132px] lg:text-[130px] xl:text-[130px]">
              SPORTING 360
            </h2>
          </div>
        </div>
      </div>

      {/* Transition Section: Split background at 50% height of the card container */}
      <div className="bg-[linear-gradient(to_bottom,#f7f7fb_50%,#ffffff_50%)]">
        <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:translate-x-2 lg:px-0">
          <div className="relative z-20 lg:ml-0 lg:mr-[108px] lg:mt-[-9px]">
            <CricketFeatureCard />
          </div>
        </div>
      </div>

      {/* Bottom Section: Community Content on White Background */}
      <div className="mx-auto max-w-[1176px] px-5 pb-6 md:px-8 lg:translate-x-2 lg:px-0">
        <div className="mt-16 lg:mt-[-10px]">
          <CommunitySection />
        </div>
      </div>

      {/* Club Partners Section */}
      <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:translate-x-2 lg:px-0">
        <ClubPartnersSection className="-mt-16 lg:-mt-32" />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection className="-mt-12 lg:-mt-20" />

      {/* Arena Stats Section */}
      <ArenaStatsSection className="-mt-12 lg:-mt-[80px]" />

      {/* Parallax Banner Section */}
      <ParallaxBannerSection />

      {/* Membership Section */}
      <MembershipSection />
    </section>
  );
};

export default Home;
