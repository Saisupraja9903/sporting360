import HeroSection from "../components/HeroSection";
import CricketFeatureCard from "../components/CricketFeatureCard";
import CommunitySection from "../components/CommunitySection";
import ClubPartnersSection from "../components/ClubPartnersSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ArenaStatsSection from "../components/ArenaStatsSection";
import ParallaxBannerSection from "../components/CTABannerSection";
import MembershipSection from "../components/MembershipSection";
import GamesCategories from "../components/GamesCategories";
import TopTrainersSection from "../components/TopTrainersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrainingSessions from "../components/TrainingSessions";
import IncredibleMemories from "../components/IncredibleMemories";
import SpecialPackages from "../components/SpecialPackages";
import FAQSection from "../components/FAQSection";
import NewsForm from "../components/NewsForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-white">
      {/* Top Section: Hero and Decorative Text with Gray Background */}
      <div className="bg-[#f7f7fb] pb-12 pt-6 md:pb-20 lg:pb-0 lg:pt-[40px]">
        <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:px-0">
          <HeroSection />

          <div className="relative z-10 -mt-20 md:-mt-2 lg:-mt-6">
            <h2 className="pointer-events-none select-none md:whitespace-nowrap text-center font-black uppercase leading-[1.1] md:leading-none text-[#828d99] text-[45px] md:text-[80px] lg:text-[100px]">
              <span className="block md:inline">SPORTING</span>
              <span className="hidden md:inline"> </span>
              <span className="block md:inline">360</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Transition Section: Split background at 50% height of the card container */}
      <div className="bg-[linear-gradient(to_bottom,#f7f7fb_50%,#ffffff_50%)]">
        <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:px-0">
          <div className="relative z-20 lg:ml-0 lg:mr-[108px] lg:mt-[-9px]">
            <CricketFeatureCard />
          </div>
        </div>
      </div>

      {/* Bottom Section: Community Content on White Background */}
      <div className="mx-auto max-w-[1176px] px-5 pb-6 md:px-8 lg:px-0">
        <div className="mt-16 lg:mt-[-10px]">
          <CommunitySection />
        </div>
      </div>

      {/* Club Partners Section */}
      <div className="mx-auto max-w-[1176px] px-5 md:px-8 lg:translate-x-2 lg:px-0">
        <ClubPartnersSection className="-mt-16 lg:-mt-32" />
      </div>

      <GamesCategories className="mt-16 lg:mt-[-10px]" />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection className="-mt-12 lg:-mt-20" />

      {/* Arena Stats Section */}
      <ArenaStatsSection className="-mt-12 lg:-mt-[80px]" />

      {/* Parallax Banner Section */}
      <ParallaxBannerSection />

      {/* Membership Section */}
      <MembershipSection />

      {/* Top Trainers Section */}
      <TopTrainersSection className="-mt-12 lg:-mt-20" />

      {/* Testimonials Section */}
      <TestimonialsSection className="-mt-10 lg:-mt-20" />

      {/* Training Sessions Section */}
      <TrainingSessions className="-mt-10 lg:-mt-20" />

      {/* Incredible Memories Section */}
      <IncredibleMemories className="-mt-10 lg:-mt-20" />

      {/* Special Packages Section */}
      <SpecialPackages className="-mt-10 lg:-mt-20" />

      {/* FAQ Section */}
      <FAQSection className="-mt-10 lg:-mt-20" />

      {/* News Form Section */}
      <NewsForm className="-mt-10 lg:-mt-20" />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Home;
